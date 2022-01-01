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
          a business student studying in Management Information Systems but I
          shifted my focus from project management to web development. I took
          programming classes before but never fell in love until I worked on
          websites for college projects and clients. From my past projects, I
          found lots of pride in making UI that was scalable and accessible. I'm
          hoping to branch out as a full-time front-end developer or developer
          advocate at companies with meaningful products.
        </p>
      </section>

      <section className="flex  flex-col  m-5 justify-center max-w-2xl">
        <h2 className="text-3xl font-bold dark:text-gray-100 text-gray-900  ">
          What I'm Up To
        </h2>
        <p className="text-gray-600 dark:text-gray-300 font-normal text-lg md:text-xl my-5">
          A college{" "}
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
        <p className="text-gray-600 dark:text-gray-300 font-normal text-lg md:text-xl my-5">
          Coding is not the only big passion that takes up my time. I'm an
          active Taekwondo Instructor and have been training since I was 8. I
          love to help my peers and students progress in their skills while also
          acting as a positive role model.
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
