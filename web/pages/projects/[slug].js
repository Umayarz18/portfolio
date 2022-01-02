import Layout from "../../components/layout";
import Tag from "../../components/tag";
import { groq } from "next-sanity";
import { getClient } from "../../lib/sanity.server";
import { urlFor } from "../../lib/sanity";
import BlockContent from "@sanity/block-content-to-react";
import { config } from "../../lib/config";
export default function Post(props) {
  const {
    projectBreakdown = "Uh oh, not found?!",
    color = "#FFFFFF",
    technologies = [],
    title = "Unknown Title?",
    related_articles = [],
    image
  } = props;

  return (
    <Layout
      pageTitle={`${title} | Roewyn Umayam | Full-Stack Developer & Taekwondo Instructor`}
    >
      {/** Article Section */}
      <article className="max-w-2xl m-5">
        <img
          src={urlFor(image)}
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
            {technologies.map(({ color, title, _id }) => (
              <Tag key={_id} color={color} title={title} />
            ))}
          </div>

          <div className="mx-auto">
            <BlockContent
              className=""
              blocks={projectBreakdown}
              imageOptions={{ w: 320, h: 240, fit: "max" }}
              {...config}
            />
          </div>
        </div>
      </article>
    </Layout>
  );
}

const query = groq`*[_type == "project" && slug.current == $slug][0]{
    ...,
    "technologies": technologies[]->{title, "color": color.hex, _id},
    
  }`;

export async function getStaticProps({ params, preview = false }) {
  const slug = await getClient().fetch(query, {
    slug: params.slug
  });

  return {
    props: slug,
    revalidate: 60
  };
}

export async function getStaticPaths() {
  // Call an external API endpoint to get projects
  const projects = await getClient().fetch(groq`*[_type=="project"]{
    slug    
  }`);
  console.log(projects);
  // Get the paths we want to pre-render based on projects
  const paths = projects.map(project => ({
    params: { slug: project.slug.current }
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}
