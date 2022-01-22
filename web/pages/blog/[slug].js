import Layout from "../../components/layout";
import Tag from "../../components/tag";
import { groq } from "next-sanity";
import { getClient } from "../../lib/sanity.server";
import { urlFor } from "../../lib/sanity";
import BlockContent from "@sanity/block-content-to-react";
import { config } from "../../lib/config";
import React from "react";
export default function Post({ data, Preview }) {
  const { data: previewData } = usePreviewSubscription(data?.query, {
    params: data?.queryParams ?? {},
    // The hook will return this on first render
    // This is why it's important to fetch *draft* content server-side!
    initialData: data?.page,
    // The passed-down preview context determines whether this function does anything
    enabled: preview,
  });

  // Client-side uses the same query, so we may need to filter it down again
  const page = filterDataToSingleItem(previewData, preview);

  const {
    body = "Uh oh, not found?!",
    color = "#FFFFFF",
    imageSource = "/logos/Our Anime Rec.svg",
    stack = [],
    title = "Unknown Title?",
    related_articles = [],
    mainImage,
  } = page;

  return (
    <Layout
      pageTitle={`${title} | Roewyn Umayam | Full-Stack Developer & Taekwondo Instructor`}
    >
      {/** Article Section */}
      <article className="max-w-2xl m-5">
        <img
          src={urlFor(mainImage)}
          width={200}
          height={200}
          className=" w-full object-cover "
          alt={mainImage.alt}
        />
        <div className="flex flex-row items-center justify-between">
          <h1 className="text-4xl font-bold dark:text-gray-100 text-gray-900 my-4">
            {title}
          </h1>
        </div>
        <div className="prose-2xl dark:prose-dark">
          <div className=" flex flex-wrap  ">
            {stack.map(({ color, title, _id }) => (
              <Tag key={_id} color={color} title={title} />
            ))}
          </div>

          <div className="mx-auto">
            <BlockContent
              className=""
              blocks={body}
              imageOptions={{ w: 320, h: 240, fit: "max" }}
              {...config}
            />
          </div>
        </div>
      </article>
    </Layout>
  );
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
    body,
    "stack": stack_composition[]->{title, "color": color.hex, _id},
    title,
    "color": color.hex,
    mainImage,
    imageSource,
    publishedAt,
    "related_articles": *[_type == "post" && slug.current != $slug][0 .. 1]{
      _id,
      title,
      "color": color.hex,
      slug,
    }
  }`;

export async function getStaticProps({ params, preview = false }) {
  const queryParams = { slug: params.slug };
  const data = await getClient(preview).fetch(query, queryParams);

  // Escape hatch, if our query failed to return data
  if (!data) return { notFound: true };

  // Helper function to reduce all returned documents down to just one
  const page = filterDataToSingleItem(data, preview);

  return {
    // Pass down the "preview mode" boolean to the client-side
    preview,
    props: { page, query, queryParams },
  };
}

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const posts = await getClient().fetch(groq`*[_type=="post"]{
    slug
  }`);

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { slug: post.slug.current },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

/**
 * Helper function to return the correct version of the document
 * If we're in "preview mode" and have multiple documents, return the draft
 */
function filterDataToSingleItem(data, preview) {
  if (!Array.isArray(data)) {
    return data;
  }

  if (data.length === 1) {
    return data[0];
  }

  if (preview) {
    return data.find((item) => item._id.startsWith(`drafts.`)) || data[0];
  }

  return data[0];
}
