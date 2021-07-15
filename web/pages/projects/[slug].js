import Layout from "../../components/layout";
import { useRouter } from "next/router";
import groq from "groq";
import client from "../../sanity";
import Tag from "../../components/tag";
import BlockContent from "../../components/BlockContent";

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
      <div className=" flex flex-auto flex-col md:flex-row  m-0 md:mt-10 md:mx-44  min-h-screen min-w-screen justify-center">
        {/** Article Section */}
        <article className="flex-grow  md:mx-10 object-contain min-h-full min-w-max ">
          <div
            className="grid  justify-center px-10  md:mt-3"
            style={{
              backgroundImage: `linear-gradient(to bottom right, ${color}, white)`,
            }}
          >
            <div className="m-10 py-5 px-8 rounded-xl bg-white">
              <img
                className="opacity-100 justify-self-center"
                src={imageSource}
                alt={
                  imageSource ? `Image for the ${title} project` : "No image"
                }
                style={{ width: "100px", height: "100px" }}
              />
              <p className="font-bold text-gray-700 text-center mt-2">{title}</p>
            </div>
          </div>

          <div className="mx-3 mt-4 grid justify-center">
            <BlockContent body={body} />
          </div>
        </article>

        {/** Tags and other info */}
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
            {/** Suggested projects details */}
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
        </aside>
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

Post.getInitialProps = async function(context) {
  const { slug = "" } = context.query;
  return await client.fetch(query, { slug }).catch((error) => {
    console.log(error);
  });
};