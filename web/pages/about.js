import Layout from "../components/layout";
import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import Image from "next/image";

export default function About() {
  return (
    <Layout title="A Bit About Me - Roewyn Umayam" cannonical="about">
      <section className="mt-10 flex  flex-col  m-5 justify-center max-w-2xl">
        <h2 className="text-3xl font-bold dark:text-gray-100 text-gray-900  ">
          Just A Guy Who Codes
        </h2>
        <p className="text-gray-600 dark:text-gray-300 font-normal text-lg md:text-xl my-5">
          I recently graduated from the University of Washington Bothell. I was
          a business student studying in Management Information Systems. I went
          from project management to developer. I took programming classes
          before but never fell in love until I worked on websites for college
          and clients. This spark of passion for me is towards web development,
          especially frontend development. From my past projects, I found lots
          of pride in making UI that was sleek and scalable. I'm hoping to
          branch out as a full-time front-end developer or developer advocate.
        </p>

        <p className="text-gray-600 dark:text-gray-300 font-normal text-lg md:text-xl my-5">
          I'm working on applications that have a high positive impact on their
          users. A college{" "}
          <a
            href="https://sprout-learning.vercel.app/"
            target="_blank"
            rel="noopener"
            className="text-primary font-medium hover:text-primary-dark 
            transition duration-300 ease-in-out"
          >
            financial literacy project
          </a>{" "}
          I worked on will continue with{" "}
          <a
            className="text-primary font-medium hover:text-primary-dark 
            transition duration-300 ease-in-out"
            rel="noopener"
            href="https://www.linkedin.com/company/working-for-wealth/"
            target="_blank"
          >
            Working for Wealth
          </a>
          . It is a non-profit organization changing how personal finance is
          taught to the next generation. Currently, I act as a volunteer CTO to
          continually improve on this project and distribute it to scale.
        </p>
      </section>

      <section className="flex  flex-col  m-5 justify-center max-w-2xl">
        <h2 className="text-3xl font-bold dark:text-gray-100 text-gray-900  ">
          When I'm Not Just A Guy Who Codes
        </h2>
        <p className="text-gray-600 dark:text-gray-300 font-normal text-lg md:text-xl my-5">
          Before my love of code, I enjoyed helping others by teaching (still
          do). I have taught Taekwondo for five years and trained for 12+ years.
          I loved leaving a positive impact on young students and helping shape
          them to be better people. I love how code allows me to do this help
          others through tech-driven means.
        </p>
        <p className="text-gray-600 dark:text-gray-300 font-normal text-lg md:text-xl my-5">
          Outside of Taekwondo, I'm a huge nerd for all things comics, sci-fi,
          and fantasy. I spend my time either coding, teaching, or taking in
          whatever fresh nerdy content is out there!
        </p>
      </section>

      {/** Recent Activities */}
    </Layout>
  );
}
