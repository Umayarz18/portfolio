import Layout from "../../components/layout";
import { useRouter } from "next/router";
import { groq } from "next-sanity";
import { getClient } from "../../lib/sanity.server";
import Tag from "../../components/tag";
import BlockContent from "../../components/BlockContent";
import Image from "next/dist/client/image";
import { urlFor } from "../../lib/sanity";

export default function Post(props) {
  const router = useRouter();
  let { slug } = router.query;
  const {
    body = "Uh oh, not found?!",
    color = "#FFFFFF",
    imageSource = "/logos/Our Anime Rec.svg",
    stack = [],
    title = "Unknown Title?",
    related_articles = [],
    mainImage,
  } = props;

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
          alt={`post picture`}
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
            <BlockContent body={body} />
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
  const slug = await getClient().fetch(query, {
    slug: params.slug,
  });

  return {
    props: slug,
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
