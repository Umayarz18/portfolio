import Head from "next/head";
import Layout from "../components/layout";
import ProgressBar from "../components/progressbar";
import Image from "next/image";
import HeroSVG from "../public/ComputerSVG";
import Card from "../components/card";
import { FiPhone, FiMail } from "react-icons/fi";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { CgFacebook } from "react-icons/cg";

const myLoader = ({ src, width, quality }) => {
  return `https://localhost:3000/${src}?w=${width}&q=${quality || 75}`;
};

export default function Home() {
  return (
    <>
      <Layout home>
        <section className="">
          <div className="flex items-center flex-wrap items-center justify-center md:flex-row  lg:pt-44 bg-vibrant-blue pt-10 ">
            <div className="grid justify-items-start  flex-initial  self-center  mx-10">
              <h1 className="text-txt-white text-3xl  font-bold lg:text-7xl md:text-5xl">
                Howdy, I'm Roewyn
              </h1>
              <p className="text-gray-200 text-lg lg:text-3xl my-4 md:text-2xl">
                Aspiring Full-Stack Developer
              </p>
            </div>
            <div className="self-center hidden lg:mt-12 lg:block">
              <HeroSVG />
            </div>
          </div>

          <svg
            className="w-screen  m-0 flex-shrink overflow-y-auto"
            viewBox={`0 0 1000 205`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 96L48 90.7C96 85 192 75 288 101.3C384 128 480 192 576 202.7C672 213 768 171 864 165.3C960 160 1056 192 1152 186.7C1248 181 1344 139 1392 117.3L1440 96V0H1392C1344 0 1248 0 1152 0C1056 0 960 0 864 0C768 0 672 0 576 0C480 0 384 0 288 0C192 0 96 0 48 0H0V96Z"
              fill="#00008b"
            />
          </svg>
        </section>

        <div className="grid justify-items-center items-center">
          {/** About Me Section */}
          <section className="md:m-24 my-12 mx-3 grid justify-center text-center">
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
          <section className=" p-20 flex items-center flex-wrap justify-between flex-col-reverse lg:flex-row md:flex-row w-screen">
            {/** Skill Stats */}
            <div className="flex-1 bg-white lg:mx-10 p-10 rounded-xl self-start shadow-md">
              <ul className="grid gap-2 items-center justify-around grid-col-1 lg:gap-x-0 lg:grid-cols-2 ">
                <li className=" text-sm lg:text-base">CSS </li>
                <ProgressBar width="50%" />

                <li className=" text-sm lg:text-base lg:w-50">HTML</li>
                <ProgressBar width="60%" />

                <li className=" text-sm lg:text-base">Javascript</li>
                <ProgressBar width="60%" />

                <li className=" text-sm lg:text-base">React</li>
                <ProgressBar width="75%" />

                <li className=" text-sm lg:text-base">Design</li>
                <ProgressBar width="50%" />

                <li className=" text-sm lg:text-base">Django</li>
                <ProgressBar width="40%" />
              </ul>
            </div>

            {/** Soft skills + description */}
            <div className="flex-1 self-start">
              <h2 className="font-bold text-gray-900 text-2xl md:text-3xl lg:text-4xl">
                Fast Stats
              </h2>
              <p className="my-5 text-gray-800 text-lg md:text-xl lg:text-2xl">
                Resumes are boring to read. Instead, here's a quick rundown on
                my skills. But if you do need mine, you can check it out{" "}
                <a href="#">here</a>.
              </p>
              <ul className="flex flex-row flex-wrap">
                <li className="badge flex-initial w-1/4 inline">
                  Team Player 🏈
                </li>
                <li className="badge flex-initial w-1/4">Self-starter ✍️</li>
                <li className="badge flex-initial w-1/4">Adaptable ⏰</li>
                <li className="badge flex-initial w-1/4">Empathetic 🤗</li>
              </ul>
            </div>
          </section>

          {/** Push to contact me */}
          <section className="grid text-center m-12 md:m-24 justify-center">
            <h2 className="font-bold text-gray-900 text-2xl md:text-3xl lg:text-4xl">
              Need a Developer? 👨🏾‍💻
            </h2>
            <p className="my-2 justify-self-center  md:p-5 text-gray-700 font-normal text-lg md:text-xl lg:text-2xl xl:px-24">
              I’m always open to hearing about collaboration and work
              opportunities.
            </p>
            <a
              href="/contact"
              className="btn-secondary mt-5 md:mt-0 mx-5 text-md md:text-lg lg:text-xl xl:text-2xl w-2/3 md:w-1/2 lg:w-1/3 justify-self-center"
            >
              Slide into my DMs
            </a>
          </section>

          {/** My Projects section */}
          <section className="grid justify-center content-center my-24 ">
            <h2 className="font-bold justify-self-center  m-5 text-gray-900 text-2xl md:text-3xl lg:text-4xl">
              My Recent Projects
            </h2>
            <p className="font-normal mx-5 justify-self-center text-gray-800 text-lg md:text-xl lg:text-2xl">
              {" "}
              You can check out a full list{" "}
              <a
                className=" font-semibold text-vibrant-purple hover:font-bold hover:text-vibrant-purple-dk hover:underline"
                href="/projects"
              >
                here
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

          {/** Contact CTA */}
          <section className="bg-indigo-100 flex flex-col md:flex-row rounded-3xl p-5 w-2/3 content-center">
            <div className="flex-grow mt-3 mx-5 w-full">
              <h1 className="text-gray-900 font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                Want to work Together?
              </h1>
              <p className="text-gray-700 font-normal text-md md:text-lg lg:text-xl xl:text-2xl mt-3 mb-4">
                Feel free to reach out and let's connect.
              </p>

              <div className="grid justify-center">
                <FiPhone />
                <a
                  href="mailto:roewyn.e.umayam@gmail.com"
                  className="mr-3 text-base md:text-md lg:text-lg hover:text-vibrant-purple"
                >
                  <FiMail />
                  roewyn.e.umayam@gmail.com
                </a>
                <a
                  className=" mr-3 text-base md:text-md lg:text-lg hover:text-vibrant-purple"
                  target="_blank"
                  href="https://www.linkedin.com/in/roewyn-umayam/"
                >
                  <FaLinkedinIn />
                  Roewyn Umayam
                </a>
                <a
                  className="text-base md:text-md lg:text-lg hover:text-vibrant-purple"
                  target="_blank"
                  href="https://github.com/Umayarz18"
                >
                  <FaGithub />
                  Umayarz18
                </a>
              </div>
            </div>

            <form name="contact" method="POST" data-netlify="true" className="grid items-center justify-center">
              <p className="m-2.5 ">
                <label htmlFor="name">Name</label> <br />
                <input
                  className="w-60 rounded-xl"
                  type="text"
                  id="name"
                  name="name"
                />
              </p>
              <p className="m-2.5">
                <label htmlFor="email">Email</label> <br />
                <input
                  className="w-60 rounded-xl"
                  type="text"
                  id="email"
                  name="email"
                />
              </p>
              <p className="m-2.5">
                <label htmlFor="message">Message</label> <br />
                <textarea
                  className="w-60 rounded-xl"
                  id="message"
                  name="message"
                ></textarea>
              </p>

              <button
                className="m-2.5  w-60 justify-self-center btn-secondary"
                type="submit"
              >
                Say Hey👋
              </button>
            </form>
          </section>
        </div>
      </Layout>
    </>
  );
}
