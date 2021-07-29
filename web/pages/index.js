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
const Card = dynamic(() => import('../components/card'),
  { loading: () => <p>...</p> })

const myLoader = ({ src, width, quality }) => {
  return `https://localhost:3000/${src}?w=${width}&q=${quality || 75}`;
};

export default function Home() {
  const { observe, inView } = useInView({
    onEnter: ({ unobserve }) => unobserve(), // only run once
  });

  return (
    <>
      <Layout home>
        <HeroSection />
        <div
          className="grid justify-items-center items-center min-h-screen"
          
        >
          {/** About Me Section */}
          <section
            ref={observe}
            id="about"
            className="md:m-24 my-12 mx-3 grid justify-center text-center"
          >
            <h2 className="font-bold text-gray-800 text-2xl md:text-3xl lg:text-4xl">
              Tech-driven Problem Solver
            </h2>
            <p className="justify-self-center xl:w-1/2 p-5 text-gray-700 font-normal text-lg md:text-xl lg:text-2xl   ">
              I’m a recent graduate of University of Washington Bothell. I was a
              business student studying in MIS. I shifted from leading tech
              projects to becoming their lead developer. I use my love of
              programming and my knowledge of business to create solutions that
              help others.
            </p>
          </section>

          {/** My Skills Section */}
          <section
            ref={observe}
            className="p-20 px-44 flex items-center flex-wrap justify-between flex-col-reverse lg:flex-row md:flex-row w-screen"
          >
            {/** Skill Stats */}
            <div className="flex-1 bg-white lg:mx-10 p-24 lg:p-10 rounded-xl self-start shadow-md lg:py-16 min-w-full md:min-w-max md:mr-10">
              <div className="grid gap-2 items-center  grid-col-1 lg:gap-x-0 lg:grid-cols-2 ">
                <p className=" text-sm lg:text-base font-bold ">CSS</p>
                <ProgressBar width="50%" />

                <p className=" text-sm lg:text-base lg:w-50 font-bold">
                  HTML
                </p>
                <ProgressBar width="60%" />

                <p className=" text-sm lg:text-base font-bold">Javascript</p>
                <ProgressBar width="60%" />

                <p className=" text-sm lg:text-base font-bold">React</p>
                <ProgressBar width="75%" />

                <p className=" text-sm lg:text-base font-bold">Design</p>
                <ProgressBar width="50%" />

                {/**
                <li className=" text-sm lg:text-base font-bold">Django</li>
                <ProgressBar width="40%" />
                 */}
              </div>
            </div>

            {/** Soft skills + description */}
            <div className="flex-1 self-start">
              <h2 className="font-bold text-gray-900 text-2xl md:text-3xl lg:text-4xl">
                Fast Stats
              </h2>
              <p className="my-5 text-gray-800 text-lg md:text-xl lg:text-2xl">
                Resumes are boring to read. Instead, here's a quick rundown on
                my skills. But if you do need mine, here's{" "}
                <a href="#">my resume</a>.
              </p>
            </div>
          </section>

          {/** Push to contact me */}
          <section
            ref={observe}
            className="grid text-center m-12 md:m-24 justify-center"
          >
            <h2 className="font-bold text-gray-900 text-2xl md:text-3xl lg:text-4xl">
              Need a Developer? 👨🏾‍💻
            </h2>
            <p className="my-2 justify-self-center  md:p-5 text-gray-700 font-normal text-lg md:text-xl lg:text-2xl xl:px-24">
              I’m always open to hearing about collaboration and work
              opportunities.
            </p>
            <a
              href="#contact"
              className="btn-secondary mt-5 md:mt-0 mx-5 text-md md:text-lg lg:text-xl xl:text-2xl w-2/3 md:w-1/2 lg:w-1/3 justify-self-center"
            >
              Slide into my DMs
            </a>
          </section>
          <ProjectSection observe={observe} />
          <ContactSection observe={observe} />
        </div>
      </Layout>
    </>
  );
}

function HeroSection() {
  return (
    <header className="">
      <div className="flex items-center flex-wrap items-center justify-center md:flex-row  lg:pt-44  py-10 ">
        <div className="grid justify-items-start  flex-initial  self-center  mx-10">
          <h1 className="text-gray-800 text-3xl  font-bold lg:text-7xl md:text-5xl">
            Howdy, I'm Roewyn
          </h1>
          <p className="text-gray-700 text-lg lg:text-3xl my-4 md:text-2xl">
            Full-Stack Developer
          </p>
          <div className="flex flex-row space-x-5 items-center">
            <a href="#projects" className="text-md md:text-lg lg:text-xl xl:text-2xl">View Projects&#8594;</a>
            <button className="btn-secondary px-12 text-md md:text-lg lg:text-xl xl:text-2xl"><a href="#contact" alt="contact link" className="mx-5">Say Hi</a></button>
          </div>
        </div>
        <div className="self-center hidden lg:mt-12 lg:block">
          <HeroSVG />
        </div>
      </div>
    </header>
  );
}
function ProjectSection({ observe }) {
  return (
    <>
      {/** My Projects section */}
      <section
        ref={observe}
        id="projects"
        className="grid justify-center content-center my-24 "
      >
        <h2 className="font-bold justify-self-center  m-5 text-gray-900 text-2xl md:text-3xl lg:text-4xl">
          My Recent Projects
        </h2>
        <p className="font-normal mx-5 justify-self-center text-gray-800 text-lg md:text-xl lg:text-2xl">
          {" "}
          If you need more samples, you can always view{" "}
          <a
            className=" font-semibold text-vibrant-purple hover:font-bold hover:text-vibrant-purple-dk hover:underline"
            href="/projects"
          >
            my project list
          </a>
          .
        </p>
        <div className="grid grid-cols-1 grid-rows-1 justify-center">
          <div className="flex flex-col lg:flex-row flew-wrap w-full block items-center">
            <Card
              title="Sprout"
              description="An e-learning platform designed to teach high school students personal finance through short articles, quizzes, and activites to better prepare them for adulthood."
              color="#2FC06B"
              logo="/logos/sprout-logo.svg"
              type="vertical"
            />

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
          {/** <div className="flex flex-col md:flex-row flew-wrap w-full block"></div> */}
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
        className="bg-indigo-100 flex flex-col md:flex-row rounded-3xl p-5  content-center justify-between"
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
          <button
            className="m-2.5  w-60 justify-self-center btn-secondary"
            type="submit"
          >
            Say Hey👋
          </button>
        </form>
      </section>{" "}
    </>
  );
}
