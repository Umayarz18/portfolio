/* eslint-disable @typescript-eslint/no-explicit-any */
import Layout from "../components/Layout";
import Image from "next/image";
import groq from "groq";
import React from "react";
import { getClient } from "../lib/sanity.server";
import { urlFor } from "../lib/sanity";
import { SkillCard } from "../components/SkillCard";
import BlockContent from "../components/BlockContent";

export default function Home({ content }: any) {
  return (
    <Layout
      title={content.seoContent.title}
      description={content.seoContent.description}
      image={urlFor(content.seoContent.ogImage).url()}
    >
      <div className="mx-auto max-w-2xl">
        <HeroSection content={content.heroSection} />
        <HighlightedSection projects={content.highlighted_content} />
        <SkillSection
          tags={content.featuredTags}
          content={content.skillSection}
        />
        {/* <CTASection /> */}
      </div>
    </Layout>
  );
}

function HeroSection({ content }: any) {
  return (
    <section
      className="flex flex-col-reverse md:flex-row justify-center items-center space-x-3 mt-5 
    max-w-2xl  lg:mx-auto m-5"
    >
      <div className="grid justify-items-center md:justify-items-start  self-center max-w-lg ">
        <h1
          className="dark:text-gray-50 text-gray-800
         text-3xl  py-3  lg:text-5xl md:text-4xl"
        >
          <span className="font-bold">{content.heading}</span>
        </h1>
        <h2 className=" text-2xl lg:text-3xl  my-2 md:mb-3 truncate">
          <span
            className="font-bold text-transparent bg-clip-text bg-gradient-to-b
           from-primary to-primary-dark dark:from-primary-dark dark:to-primary"
          >
            {content.subheading}
          </span>
        </h2>
        <p
          className="text-gray-600  text-center md:text-left 
                dark:text-gray-300 font-normal text-lg md:text-xl  
                mx-4 mt-5 md:ml-0 md:mr-4"
        >
          <BlockContent body={content.summary} />
        </p>
      </div>
      <Image
        src={urlFor(content.profileImage).url()}
        width={200}
        height={200}
        alt={""}
        className="rounded-full"
      />
    </section>
  );
}

function SkillSection({ tags, content }: any) {
  return (
    <section
      className=" flex items-center justify-center flex-col-reverse 
      max-w-2xl  lg:mx-auto m-5 my-20 "
    >
      <div className="flex-1 mt-4 w-full self-center">
        <div className="grid mx-auto  place-items-center grid-cols-1 lg:gap-x-0 md:grid-cols-2 lg:grid-cols-3 ">
          {tags.map(({ title, image, link, _id }) => (
            <SkillCard title={title} image={image} link={link} key={_id} />
          ))}
        </div>
      </div>
      {/** Soft skills + description */}
      <div className="">
        <h2 className="dark:text-gray-100 text-gray-900 text-2xl md:text-3xl lg:text-4xl">
          <span className="font-bold">{content.heading}</span>
        </h2>
        <div className="my-5 text-gray-600 dark:text-gray-300 font-normal text-lg md:text-xl">
          <BlockContent body={content.body} />
        </div>
      </div>
    </section>
  );
}

function HighlightedSection({ projects }: any) {
  return (
    <section className="max-w-2xl  lg:mx-auto m-5 my-16">
      <h2 className="font-bold text-center dark:text-gray-100  text-gray-900 text-2xl md:text-3xl lg:text-4xl">
        Some Posts
      </h2>
      <section className=" md:mx-0 flex flex-col lg:flex-row gap-x-3 my-4 mt-6">
        {projects.map((project) => (
          <article
            key={project._id}
            className="relative rounded-xl
                    p-1 my-2 bg-gradient-to-b from-primary to-primary-dark hover:from-primary-dark "
          >
            <a
              data-splitbee-event={`CTA To ${
                project.title ?? project.seoTitle
              }`}
              href={`/${
                project.slug?.current
                  ? "code-snippets/" + project.slug?.current
                  : "blog/" + project.seoSlug.current
              }`}
              className="w-full h-full self-center flex flex-col dark:bg-gray-900 
                        bg-gray-200 p-4 py-6 rounded-xl lg:max-w-sm"
            >
              <h3 className=" text-lg md:text-xl lg:text-2xl font-bold text-gray-800 dark:text-gray-200">
                {project.title ?? project.seoTitle}
              </h3>
            </a>
          </article>
        ))}
      </section>
    </section>
  );
}

// function CTASection() {
//     return (
//         <section className='flex flex-col m-5 md:mx-0 my-24 lg:my-36 justify-center items-center  '>
//             <div className='flex flex-col place-content-center'>
//                 <h2 className='dark:text-gray-200 text-gray-800 text-2xl md:text-3xl lg:text-4xl mx-auto'>
//                     <span className='font-bold'>Need a Developer?</span> 👨🏾‍💻
//                 </h2>
//                 <p className='text-gray-600 dark:text-gray-300 font-normal text-lg md:text-xl justify-self-center  mx-2 my-4'>
//                     I{'’'}m always open to hearing about collabs and work
//                     opportunities.
//                 </p>
//             </div>
//             <a
//                 href='/contact'
//                 data-splitbee-event='CTA To Contact'
//                 className='btn mt-5 md:mt-0 mx-5 text-md md:text-lg lg:text-xl xl:text-2xl w-2/3 md:w-1/2 lg:w-1/3 justify-self-center'
//             >
//                 <span className='font-bold'>Say Howdy</span> 🤠
//             </a>
//         </section>
//     );
// }

export async function getStaticProps() {
  const content = await getClient()
    .fetch(
      groq`
            *[_type=="page" && pageType == "Home Page"][0]{
                seoContent,
                heroSection,
                highlighted_content[]->{
                 "seoTitle": seoContent.title,
                 title,
                 "seoDescription": seoContent.description,
                 description,
                 "seoSlug":seoContent.slug,
                 slug
                },
                skillSection,
                "featuredTags":*[_type=="tag" && isFeatured == true]{
                 _id,
                 image,
                 title,
                 link
                }
              }`
    )
    .catch((error) => {
      console.log(error);
    });

  return {
    props: { content },
    revalidate: 10,
  };
}
