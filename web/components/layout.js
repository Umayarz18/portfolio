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

export default function Layout({ children, home , pageTitle}) {
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
        <title>{pageTitle ? pageTitle : siteTitle}</title>
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className={`flex flex-col overflow-x-hidden relative`}>
        <header className="order-first">
          <NavBar />
        </header>
        <main className="flex-auto block justify-items-center  justify-center">{children}</main>
        
        <footer className=" block order-last p-8 flex flex-col flex-initial md:flex-row  block w-screen  items-center justify-around">
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
