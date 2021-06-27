import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaGithub,
} from "react-icons/fa";
import { GrInstagram, GrGithub } from "react-icons/gr";
import { CgFacebook } from "react-icons/cg";
import Link from "next/link";
import NavBar from "./navbar";

const name = "Roewyn Umayam";
export const siteTitle =
  "Roewyn Umayam | Full-Stack Developer & Taekwondo Instructor";

export default function Layout({ children, home }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className={`${styles.flexContainer} overflow-x-hidden`}>
        <header>
          <NavBar />
        </header>
        <main className="grid justify-items-center w-screen">{children}</main>
        <footer className="mt-10 p-8 flex flex-col md:flex-row bg-purple-200 items-center justify-around">
          <small className="text-base md:text-md lg:text-lg">
            {" "}
            Roewyn Umayam &copy;<time>2021</time>. All rights reserved.
          </small>
          <div className="flex items-center mt-2 md:mt-0">
            <a
              className=" mr-3 text-base md:text-md lg:text-lg hover:text-vibrant-purple"
              target="_blank"
              href="https://www.linkedin.com/in/roewyn-umayam/"
            >
              <FaLinkedinIn />
            </a>
            <a
              className=" mr-3 text-base md:text-md lg:text-lg hover:text-vibrant-purple "
              target="_blank"
              href="https://www.instagram.com/roewynaboat_tkd/"
            >
              <GrInstagram />
            </a>
            <a
              className="mr-3 text-base md:text-md lg:text-lg hover:text-vibrant-purple"
              target="_blank"
            >
              <CgFacebook />
            </a>
            <a
              className="text-base md:text-md lg:text-lg hover:text-vibrant-purple"
              target="_blank"
              href="https://github.com/Umayarz18"
            >
              <FaGithub />
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}
