import Layout from "../components/layout";
import { ProgressBar } from "../components/progressbar";
import Image from "next/image";
import groq from "groq";
import React from "react";
import { getClient } from "../lib/sanity.server";
import { urlFor } from "../lib/sanity";
import { ProjectCard } from "../components/ProjectCard";
import router from "next/router";

export default function Home({ projects }) {
  return (
    <Layout>
      <div className="mx-auto max-w-2xl">
        <HeroSection />

        <SkillSection />
        <ProjectSection projects={projects} />
        <CTASection />
      </div>
    </Layout>
  );
}

function HeroSection() {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-center items-center space-x-3 mt-5">
      <div className="grid justify-items-center md:justify-items-start  self-center max-w-lg ">
        <h1
          className="dark:text-gray-50 text-gray-800
         text-3xl  py-3  lg:text-5xl md:text-4xl"
        >
          <span className="font-bold">Hey, I'm Roewyn </span> 👋
        </h1>
        <h2 className=" text-lg lg:text-3xl md:text-2xl my-2 md:mb-3 truncate">
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">
            Frontend Developer{" "}
          </span>
          🕵🏾
        </h2>
        <p className="text-gray-600 dark:text-gray-300 font-normal text-lg md:text-xl mr-4">
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
    </div>
  );
}

function SkillSection({ observe }) {
  return (
    <section
      ref={observe}
      className=" flex items-center justify-center   flex-col-reverse max-w-2xl  lg:mx-auto m-5 mt-10 lg:my-24"
    >
      {/** Skill Stats */}
      <div className="flex-1 dark:bg-gray-900 bg-gray-200 w-full p-6 rounded  border-gray-400 border-2 dark:border-gray-700 self-center">
        <div className="grid gap-6 items-center  grid-col-1 lg:gap-x-0 lg:grid-cols-3 ">
          <div className="flex justify-center flex-col items-center">
            <p className=" text-sm lg:text-base font-bold ">CSS</p>
            <ProgressBar width={60} color="red" label="CSS" />
          </div>
          <div className="flex justify-center flex-col items-center">
            <p className=" text-sm lg:text-base lg:w-50 font-bold">HTML</p>
            <ProgressBar width={75} color="green" label="HTML" />
          </div>
          <div className="flex justify-center flex-col items-center">
            <p className=" text-sm lg:text-base font-bold">Javascript</p>
            <ProgressBar width={60} color="yellow" label="Javascript" />
          </div>
          <div className="flex justify-center flex-col items-center">
            <p className=" text-sm lg:text-base font-bold">React</p>
            <ProgressBar width={70} color="blue" label="React" />
          </div>

          <div className="flex justify-center flex-col items-center">
            <p className=" text-sm lg:text-base font-bold">Design</p>
            <ProgressBar width={65} color="indigo" label="Desing" />
          </div>
          <div className="flex justify-center flex-col items-center">
            <p className=" text-sm lg:text-base">
              <span className="font-bold">Fun </span>🤡
            </p>
            <ProgressBar width={100} color="indigo" label="Fun🤡" />
          </div>
        </div>
      </div>

      {/** Soft skills + description */}
      <div className="">
        <h2 className="dark:text-gray-100 text-gray-900 text-2xl md:text-3xl lg:text-4xl">
          <span className="font-bold">Fast Stats</span>
        </h2>
        <p className="my-5 text-gray-600 dark:text-gray-300 font-normal text-lg md:text-xl">
          Here's a brutally honest breakdown on my skills (at least what I
          think). If you need something more formal, here's{" "}
          <a
            href="https://docs.google.com/document/d/1AYRmENQAlvM9xK41u4tD8Euq1I0MWAKSBm5VRWhGbrg/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            my resume
          </a>
          .
        </p>
      </div>
    </section>
  );
}

function ProjectSection({ projects }) {
  return (
    <section>
      <h2 className="font-bold text-center dark:text-gray-100  text-gray-900 text-2xl md:text-3xl lg:text-4xl">
        My Recent Projects
      </h2>
      <section className="m-5 md:my-3 md:mx-0">
        {projects.map(project => (
          <article
            key={project._id}
            className="dark:bg-gray-900 bg-gray-200 w-full p-6 rounded  
          border-gray-400 border-2 dark:border-gray-700 self-center
          flex flex-col md:flex-row  md:m-0"
          >
            <div className="w-full h-full md:h-1/2 md:w-1/2 ">
              <img
                src={urlFor(project.projectImage)}
                alt={project.projectImage.alt}
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
                href={`/projects/${project.slug.current}`}
              >
                Project Breakdown
              </a>
            </div>
          </article>
        ))}
      </section>

      <p className="text-center my-5 text-gray-600 dark:text-gray-300 font-normal text-lg md:text-xl">
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

function CTASection({ observe }) {
  return (
    <section
      ref={observe}
      className="grid text-center m-5 my-24 lg:my-36 justify-center"
    >
      <h2 className="dark:text-gray-200 text-gray-800 text-2xl md:text-3xl lg:text-4xl">
        <span className="font-bold">Need a Developer?</span> 👨🏾‍💻
      </h2>
      <p className="text-gray-600 dark:text-gray-300 font-normal text-lg md:text-xl justify-self-center mx-auto my-4">
        I{`’`}m always open to hearing about collabs and work opportunities.
      </p>
      <a
        href="/contact"
        className="btn mt-5 md:mt-0 mx-5 text-md md:text-lg lg:text-xl xl:text-2xl w-2/3 md:w-1/2 lg:w-1/3 justify-self-center"
      >
        <span className="font-bold">Say Howdy</span> 🤠
      </a>
    </section>
  );
}

export async function getStaticProps() {
  const projects = await getClient()
    .fetch(
      groq`
  *[_type == "project" && isFeatured == true]{
      description,
      projectImage,
      slug,
      title,
      _id
  }`
    )
    .catch(error => {
      console.log(error);
    });

  return {
    props: {
      projects
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10 // In seconds
  };
}
