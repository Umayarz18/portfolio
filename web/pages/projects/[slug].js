import Layout from '../../components/layout'
import { useRouter } from 'next/router';
import groq from "groq";
import client from "../../sanity";
import Tag from '../../components/tag';
import BlockContent from '../../components/BlockContent';

  export default function Post(props) {
    const router = useRouter();
    let {slug} = router.query;
    const {
      body = "Uh oh, not found?!",
      imageSource ="/logos/Our Anime Rec.svg",
      stack = [],
      title = "Unknown Title?",
      related_articles = [],
    } = props;

    return (
      <Layout pageTitle={`${title} | Roewyn Umayam | Full-Stack Developer & Taekwondo Instructor`}>
        <div className="flex flex-auto flex-col md:flex-row  md:mt-10 md:mx-5  min-h-screen min-w-screen justify-center">
            
            {/** Article Section */}
            <div className="bg-white rounded-2xl shadow-md px-10 md:px-24 lg:px-32 md:mx-10 object-contain  ">
              <img className="pt-5 m-3" src={imageSource} alt={imageSource? `Image for the ${title} project` : "No image"}/>
              <h1>{title}</h1>
              <small> Sub line</small>

              <BlockContent body={body}/>
            </div>

            {/** Tags and other info */}
            <aside className=" md:block mx-5   hidden flex-stretch">
              <div className="mb-5  flex flex-col">
                <h2 className="text-lg font-bold  text-gray-700 my-3 ">Stack Tags</h2>  
                <div className="flex flex-col lg:flex-row ">
                  {stack.map(({color, title, _id})=>
                    <Tag key={_id} color={color} title={title}/>
                  )}
                </div>
                  
              </div>

              <div className=" ">
                {/** Suggested projects details */}
                <h2 className="text-lg font-bold  text-gray-700">Suggested Projects</h2>
                <div className="flex flex-col">
                  {related_articles.map(({_id, title, slug})=> 
                    <a 
                      className="bg-white rounded-2xl shadow-md h-24 my-4 hover:shadow-lg py-12" 
                      href={`/projects/${slug.current}`} key={_id}>
                        {title}

                    </a>
                  )}
                </div>
                
              </div>
            </aside>
        </div>
      </Layout>
    )
  }

  const query = groq`*[_type == "post" && slug.current == $slug][0]{
    body,
    "stack": stack_composition[]->{title, "color": color.hex, _id},
    title,
    mainImage,
    imageSource,
    publishedAt,
    "related_articles": *[_type == "post" && slug.current != $slug]{
      _id,
      title,
      slug
    }
  }`

  Post.getInitialProps = async function(context){
    const  {slug ="" } = context.query;
    return await client.fetch(query, {slug})
    .catch((error)=>{
        console.log(error);
    })
}
