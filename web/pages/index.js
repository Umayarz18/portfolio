import Head from "next/head";
import Layout from "../components/layout";
import ProgressBar from "../components/progressbar";
import Image from "next/image";
import HeroSVG from "../public/ComputerSVG";
import { FiPhone, FiMail } from "react-icons/fi";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { CgFacebook } from "react-icons/cg";
import useInView from "react-cool-inview";
import dynamic from "next/dynamic";

const Card = dynamic(() => import("../components/card"), {
  loading: () => <p>...</p>
});

const myLoader = ({ src, width, quality }) => {
  return `https://localhost:3000/${src}?w=${width}&q=${quality || 75}`;
};

export default function Home() {
  const { observe, inView } = useInView({
    onEnter: ({ unobserve }) => unobserve() // only run once
  });

  return (
    <Layout>
      <HeroSection />

      <SkillSection observe={observe} />
      {/** Push to contact me */}
      <section
        ref={observe}
        className="grid text-center mx-auto my-24 lg:my-44 justify-center"
      >
        <h2 className="dark:text-gray-200 font-bold text-gray-800 text-2xl md:text-3xl lg:text-4xl">
          Need a Developer? 👨🏾‍💻
        </h2>
        <p className="dark:text-gray-200 my-2 justify-self-center  md:p-5 text-gray-700 font-normal text-lg md:text-xl lg:text-2xl xl:mx-24">
          I’m always open to hearing about collabs and work opportunities.
        </p>
        <a
          href="#contact"
          className="btn mt-5 md:mt-0 mx-5 text-md md:text-lg lg:text-xl xl:text-2xl w-2/3 md:w-1/2 lg:w-1/3 justify-self-center"
        >
          Slide into my DMs
        </a>
      </section>
    </Layout>
  );
}

function HeroSection() {
  const titles = [
    "Full Stack Developer",
    "Frontend Developer",
    "Taekwondo Instructor 🥋",
    "MIS Grad 👨🏾‍🎓",
    "Tech-driven Problem Solver 🕵🏾",
    "Certified Clown 🤡",
    "Comic Nerd 🦸‍♂️"
  ];
  return (
    <div className="flex flex-col-reverse md:flex-row justify-center items-center space-x-3 mt-5">
      <div className="grid justify-items-center md:justify-items-start  self-center max-w-lg m-5">
        <h1 className="text-gray-800 text-3xl  dark:text-primary filter dark:blur-lg font-bold lg:text-5xl md:text-4xl">
          Howdy, I'm Roewyn
        </h1>
        <h2 className="dark:text-gray-100 text-gray-700 font-medium text-lg lg:text-3xl md:text-2xl my-5 truncate">
          {titles[Math.floor(Math.random() * titles.length)]}
        </h2>
        <p className="dark:text-gray-200 text-gray-700 font-normal text-center md:text-left text-md lg:text-lg">
          A simple guy looking to develop projects with{" "}
          <strong>big impact</strong>.
        </p>
        <div className=" mt-2 flex flex-row space-x-5  md:space-y-0 items-center">
          <button className="btn text-sm md:text-lg lg:text-xl xl:text-2xl">
            <a href="#contact" alt="contact link" className="mx-5 ">
              Say hello 👋
            </a>
          </button>

          <button className="btn-secondary px-12  text-sm md:text-lg lg:text-xl xl:text-2xl">
            <a href="/projects" className="mx-5">
              My Work&#8594;
            </a>
          </button>
        </div>
      </div>
      <div className="self-center ">
        <img
          src={"/images/profile-dark.jpg"}
          width={250}
          height={250}
          alt={"My profile picture"}
          className=" max-w-12  border-primary border-4 rounded-full"
        />
      </div>
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
        <div className="grid gap-2 items-center  grid-col-1 lg:gap-x-0 lg:grid-cols-2 ">
          <p className=" text-sm lg:text-base font-bold ">CSS</p>
          <ProgressBar width="50%" color="red" />

          <p className=" text-sm lg:text-base lg:w-50 font-bold">HTML</p>
          <ProgressBar width="60%" color="green" />

          <p className=" text-sm lg:text-base font-bold">Javascript</p>
          <ProgressBar width="60%" color="yellow" />

          <p className=" text-sm lg:text-base font-bold">React</p>
          <ProgressBar width="75%" color="blue" />

          <p className=" text-sm lg:text-base font-bold">Design</p>
          <ProgressBar width="50%" color="indigo" />

          {/**
                <li className=" text-sm lg:text-base font-bold">Django</li>
                <ProgressBar width="40%" />
                 */}
        </div>
      </div>

      {/** Soft skills + description */}
      <div className="">
        <h2 className="font-bold dark:text-gray-100 text-gray-900 text-2xl md:text-3xl lg:text-4xl">
          Fast Stats
        </h2>
        <p className="my-5 dark:text-gray-200 text-gray-800 text-lg md:text-xl lg:text-2xl">
          Resumes are boring to read. Instead, here's a quick rundown on my
          skills. But if you do need mine, here's <a href="#">my resume</a>.
        </p>
      </div>
    </section>
  );
}

function ProjectSection({ observe }) {
  return (
    <>
      {/** My Projects section */}
      <section
        ref={observe}
        id="projects"
        className="grid justify-center content-center my-24 mx-auto"
      >
        <h2 className="font-bold justify-self-center  m-5 dark:text-gray-100  text-gray-900 text-2xl md:text-3xl lg:text-4xl">
          My Recent Projects
        </h2>
        <p className="font-normal mx-5 justify-self-center dark:text-gray-200 text-gray-800 text-lg md:text-xl lg:text-2xl">
          {" "}
          If you need more samples, you can always view{" "}
          <a
            className=" font-semibold text-primary hover:font-bold hover:text-vibrant-purple-dk hover:underline"
            href="/projects"
          >
            my project list
          </a>
          .
        </p>
        <div className="grid grid-cols-1 grid-rows-1 justify-center">
          <div className="flex flex-row  w-full items-center justify-center">
            <Card
              title="Sprout"
              description="An e-learning platform designed to teach high school students personal finance through short articles, quizzes, and activites to better prepare them for adulthood."
              color="#2FC06B"
              logo="/logos/sprout-logo.svg"
              type="vertical"
            />
            <Card
              title="Sprout"
              description="An e-learning platform designed to teach high school students personal finance through short articles, quizzes, and activites to better prepare them for adulthood."
              color="#2FC06B"
              logo="/logos/naild.svg"
              type="vertical"
            />
          </div>
          <div className="flex flex-row  w-full k items-center justify-center">
            <Card
              title="DEISphere"
              description="An event conference website set for the University of Washington Bothell Beta Alpha Psi meant to bring attention to diversity and inclusion in the accounting field."
              color="#4B2E83"
              link="https://www.deisphere.com/"
              logo="/logos/DEISphere.svg"
              type="vertical"
            />

            <Card
              title="Our-Anime-Rec"
              description="A Django website made for a group Database Systems course that allows users to see titles of anime, manga, and light novels as well as reviews."
              color="#0E87A1"
              link="https://our-anime-rec.herokuapp.com/"
              logo="/logos/Our Anime Rec.svg"
              type="vertical"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function ContactSection({ observe }) {
  return (
    <>
      {/** Contact CTA */}
      <section
        ref={observe}
        id="contact"
        className="bg-indigo-100 flex flex-col md:flex-row rounded-3xl p-5  content-center  "
      >
        <div className="flex-grow mt-3 mx-5 w-full">
          <h1 className="text-gray-900 font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            Want to work Together?
          </h1>
          <p className="text-gray-700 font-normal text-md md:text-lg lg:text-xl xl:text-2xl mt-3 mb-4">
            Feel free to reach out and let's connect.
          </p>

          <div className="flex flex-col">
            <p className="text-gray-700 mr-3 mb-3 text-base md:text-md lg:text-lg hover:text-vibrant-purple">
              <FiPhone className="inline mr-2 " />
              425-908-9152
            </p>
            <a
              href="mailto:roewyn.e.umayam@gmail.com"
              className="text-gray-700 mr-3 mb-3 text-base md:text-md lg:text-lg hover:text-vibrant-purple"
            >
              <FiMail className="inline mr-2" />
              roewyn.e.umayam@gmail.com
            </a>
            <a
              className="text-gray-700 mr-3 mb-3 text-base md:text-md lg:text-lg hover:text-vibrant-purple"
              target="_blank"
              href="https://www.linkedin.com/in/roewyn-umayam/"
              rel="noopener"
            >
              <FaLinkedinIn className="inline mr-2" />
              Roewyn Umayam
            </a>
            <a
              className="text-gray-700 text-base md:text-md lg:text-lg hover:text-vibrant-purple"
              target="_blank"
              href="https://github.com/Umayarz18"
              rel="noopener"
            >
              <FaGithub className="inline mr-2" />
              Umayarz18
            </a>
          </div>
        </div>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          className="grid items-center justify-center"
        >
          <div className="m-2.5 ">
            <label htmlFor="name">Name</label> <br />
            <input
              className="w-60 rounded-xl"
              type="text"
              id="name"
              name="name"
            />
          </div>
          <div className="m-2.5">
            <label htmlFor="email">Email</label> <br />
            <input
              className="w-60 rounded-xl"
              type="text"
              id="email"
              name="email"
            />
          </div>
          <div className="m-2.5">
            <label htmlFor="message">Message</label> <br />
            <textarea
              className="w-60 rounded-xl"
              id="message"
              name="message"
            ></textarea>
          </div>
          <div className="m-2.5">
            <div data-netlify-captchat="true"></div>
          </div>
          <button className="m-2.5  w-60 justify-self-center btn" type="submit">
            Say Hey👋
          </button>
        </form>
      </section>{" "}
    </>
  );
}
