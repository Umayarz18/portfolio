import Layout from "../components/layout";
import { ProgressBar } from "../components/progressbar";
import Image from "next/image";
import groq from "groq";
import React from "react";
import { getClient } from "../lib/sanity.server";
import { urlFor } from "../lib/sanity";
import { ProjectCard } from "../components/ProjectCard";
import router from "next/router";

export default function Home({ content }) {
  const featuredProjects = content.featuredProjects;
  const featuredTags = content.featuredTags;

  return (
    <Layout>
      <div className="mx-auto max-w-2xl">
        <HeroSection />
        <SkillSection tags={featuredTags} />
        <ProjectSection projects={featuredProjects} />
        <CTASection />
      </div>
    </Layout>
  );
}

function HeroSection() {
  return (
    <section className="flex flex-col-reverse md:flex-row justify-center items-center space-x-3 mt-5">
      <div className="grid justify-items-center md:justify-items-start  self-center max-w-lg ">
        <h1
          className="dark:text-gray-50 text-gray-800
         text-3xl  py-3  lg:text-5xl md:text-4xl"
        >
          <span className="font-bold">Hey, I'm Roewyn </span> 👋
        </h1>
        <h2 className=" text-2xl lg:text-3xl  my-2 md:mb-3 truncate">
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">
            Frontend Developer{" "}
          </span>
          🕵🏾
        </h2>
        <p className="text-gray-600  text-center md:text-left dark:text-gray-300 font-normal text-lg md:text-xl  mx-4 md:ml-0 md:mr-4">
          A martial artist, comic book geek, and certified clown that loves to
          build web apps for good ideas and memes.
        </p>
      </div>
      <Image
        src={"/images/Profile-2.png"}
        width={200}
        height={200}
        alt={""}
        className="rounded-full"
      />
    </section>
  );
}

/**
 *
 * @returns
 */

function SkillSection({ tags }) {
  return (
    <section
      className=" flex items-center justify-center flex-col-reverse 
      max-w-2xl  lg:mx-auto m-5 my-24 lg:my-36"
    >
      <div className="flex-1 mt-4 w-full self-center">
        <div className="grid gap-3 place-items-center  grid-col-1 lg:gap-x-0 md:grid-cols-3 ">
          {tags.map(tag => (
            <a
              href={tag.link}
              target="_blank"
              rel="noopener noreferrer"
              className="h-48 w-48 justify-center items-center flex flex-col-reverse 
              border-2  dark:bg-gray-500 hover:border-primary-dark
              bg-gray-200  rounded  dark:hover:border-primary-dark 
              border-gray-400  dark:border-gray-100 
              transition duration-300 ease-in-out group
              focus:ring-primary-dark focus:ring-2 focus:outline-none p-8 m-3"
            >
              <h3
                className=" mt-4 text-lg font-bold group-hover:text-primary-dark
              transition duration-300 ease-in-out group"
              >
                {tag.title}
              </h3>
              <img src={urlFor(tag.image)} alt={""} className="h-24 w-24" />
            </a>
          ))}
        </div>
      </div>
      {/** Soft skills + description */}
      <div className="">
        <h2 className="dark:text-gray-100 text-gray-900 text-2xl md:text-3xl lg:text-4xl">
          <span className="font-bold">What I Know</span>
        </h2>
        <p className="my-5 text-gray-600 dark:text-gray-300 font-normal text-lg md:text-xl">
          I've had long time experience, novel understanding, or exposure to
          several web technologies surrounding the Jamstack or frontend
          development. These are the ones I'm loving right now.
        </p>
      </div>
    </section>
  );
}

function ProjectSection({ projects }) {
  return (
    <section className="m-0 my-24 lg:my-36">
      <h2
        className="font-bold text-center dark:text-gray-100  t
      ext-gray-900 text-2xl md:text-3xl lg:text-4xl mb-4"
      >
        My Latest Work
      </h2>
      <section className="m-5 md:my-3 md:mx-0">
        {projects.map(project => (
          <article
            key={project._id}
            className=" w-full p-6 rounded  
           self-center
          flex flex-col md:flex-row  md:m-0"
          >
            <div className="w-full h-full flex justify-center">
              <img
                src={urlFor(project.projectImage)}
                alt={project.projectImage.alt}
                className="w-5/6 place-self-center"
              />
            </div>
            <div
              className="w-full h-full
            flex flex-col justify-center gap-2 mt-4 md:mt-0 md:ml-3"
            >
              <h3
                className=" text-lg lg:text-3xl md:text-2xl font-bold 
              text-transparent bg-clip-text bg-gradient-to-r 
              from-primary to-primary-dark"
              >
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 font-normal text-md md:text-xl mr-4">
                {project.description}
              </p>
              <a
                className="border-gray-400 border-2 dark:border-gray-700 
                rounded dark:hover:bg-gray-700  dark:text-gray-200
                hover:bg-gray-400 text-gray-800
                text-center py-1 px-3 font-medium"
                data-splitbee-event="CTA To Highlighted Project"
                href={`/projects/${project.slug.current}`}
              >
                Project Breakdown
              </a>
            </div>
          </article>
        ))}
      </section>
      <h2
        className="font-bold text-center dark:text-gray-100  t
      ext-gray-900 text-2xl md:text-3xl lg:text-4xl mt-16 lg:mt-24"
      >
        Featured Projects
      </h2>
      <p className="text-center  m-5 text-gray-600 dark:text-gray-300 font-normal text-lg md:text-xl">
        {" "}
        If you need more samples, you can always view{" "}
        <a className="link" href="/projects">
          my project list
        </a>
        .
      </p>
      <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-3 justify-center gap-3">
        <ProjectCard
          title="Sprout"
          description="An e-learning platform designed to teach high school students personal finance through short articles, quizzes, and activites to better prepare them for adulthood."
          color="#2FC06B"
          logo="/logos/sprout-logo.svg"
          link="https://sprout-learning.vercel.app/"
          nextRouter={router}
        />

        <ProjectCard
          title="DEISphere"
          description="An event conference website set for the University of Washington Bothell Beta Alpha Psi meant to bring attention to diversity and inclusion in the accounting field."
          color="#4B2E83"
          link="https://www.deisphere.com/"
          logo="/logos/DEISphere.svg"
          nextRouter={router}
        />

        <ProjectCard
          title="Our-Anime-Rec"
          description="A Django website made for a group Database Systems course that allows users to see titles of anime, manga, and light novels as well as reviews."
          color="#0E87A1"
          link="https://our-anime-rec.herokuapp.com/"
          logo="/logos/OurAnimeRec.svg"
          nextRouter={router}
        />
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="flex flex-col m-5 md:mx-0 my-24 lg:my-36 justify-center items-center  ">
      <div className="flex flex-col place-content-center">
        <h2 className="dark:text-gray-200 text-gray-800 text-2xl md:text-3xl lg:text-4xl mx-auto">
          <span className="font-bold">Need a Developer?</span> 👨🏾‍💻
        </h2>
        <p className="text-gray-600 dark:text-gray-300 font-normal text-lg md:text-xl justify-self-center  mx-2 my-4">
          I{`’`}m always open to hearing about collabs and work opportunities.
        </p>
      </div>
      <a
        href="/contact"
        data-splitbee-event="CTA To Contact"
        className="btn mt-5 md:mt-0 mx-5 text-md md:text-lg lg:text-xl xl:text-2xl w-2/3 md:w-1/2 lg:w-1/3 justify-self-center"
      >
        <span className="font-bold">Say Howdy</span> 🤠
      </a>
    </section>
  );
}

export async function getStaticProps() {
  const content = await getClient()
    .fetch(
      groq`
      *[_type=="project" || _type == "tag"][0]{
        "featuredTags":*[_type=="tag" && isFeatured == true]{
        _id,
        'color': color.hex,
        image,
        title,
        link
        }	,
        "featuredProjects": *[_type=="project" && isFeatured == true]{
          description,
          projectImage,
          slug,
          title,
          _id
        }
      }`
    )
    .catch(error => {
      console.log(error);
    });

  return {
    props: { content },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10 // In seconds
  };
}
