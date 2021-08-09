import Layout from "../components/layout";
import { useRouter } from "next/router";
import groq from "groq";
import client from "../sanity";
import Tag from "../components/tag";
import BlockContent from "../components/BlockContent";

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
  } = props;

  return (
    <Layout
      pageTitle={`${title} | Roewyn Umayam | Full-Stack Developer & Taekwondo Instructor`}
    >
      <div className=" flex flex-auto flex-col md:flex-row  m-0 md:mt-10 md:mx-44  ">
        {/** Article Section */}
        <article className="flex-grow  mx-0 md:mx-10  ">
          <div
            className="flex flex-col content-end md:mt-3 pt-10 rounded-t-xl "
            style={{
              backgroundImage: `linear-gradient(to bottom right, ${color}, white)`,
            }}
          >
            <div className="mx-18 mt-20  px-8 rounded-t-xl bg-color w-screen md:w-9/12 self-center relative ">
              <img
                className="opacity-100 justify-self-center border-4 bg-color absolute bottom-9  md:inset-x-8  md:bottom-3 rounded-full"
                src={imageSource}
                alt={
                  imageSource ? `Image for the ${title} project` : "No image"
                }
                style={{ width: "200px", height: "200px", borderColor: color }}
              />
              <div className="flex flex-row ml-52">
                <div className="flex flex-wrap lg:flex-col">
                  <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-gray-700 ">{title}</h1>
                  <p className="mt-2 ">Subtitle here</p>
                  <div className="mt-2 flex flex-wrap md:flex-row ">
                    {stack.map(({ color, title, _id }) => (
                      <Tag key={_id} color={color} title={title} />
                    ))}
                  </div>
                </div>
                <button className="justify-self-end"><a>Visit Website</a></button>
              </div>
            </div>
          </div>

          <div className="mx-3 mt-4 grid justify-center">
            <BlockContent body={body} />
          </div>
        </article>

        {/** Tags and other info 
        <aside className=" md:block mx-5   hidden flex-stretch sticky m-width-screen">
          <div className="mb-5  flex flex-col">
            <h2 className="text-lg font-bold  text-gray-700 my-3 ">
              Project Stack
            </h2>
            <div className="flex flex-col lg:flex-row ">
              {stack.map(({ color, title, _id }) => (
                <Tag key={_id} color={color} title={title} />
              ))}
            </div>
          </div>

          <div className=" ">
            
            <h2 className="text-lg font-bold  text-gray-700">
              Suggested Projects
            </h2>
            <div className="flex flex-col">
              {related_articles.map(({ _id, title, slug, stack, color }) => (
                <a
                  className=" bg-white border-l-4 w-9/12 justify-start shadow-md flex flex-col  my-2 hover:shadow-lg py-3"
                  style={{ borderColor: color }}
                  href={`/projects/${slug.current}`}
                  key={_id}
                >
                  <h3 className="self-start font-bold ml-3">{title}</h3>
                </a>
              ))}
            </div>
          </div>
        </aside> */}
      </div>
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
  const slug = await client.fetch(query, {
    slug: params.slug,
  });

  return {
    props: slug,
  };
}

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const posts = await client.fetch(groq`*[_type=="post"]{
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
