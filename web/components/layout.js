import Head from "next/head";
import Image from "next/image";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { CgFacebook } from "react-icons/cg";
import Link from "next/link";
import NavBar from "./navbar";

const name = "Roewyn Umayam";
export const siteTitle =
  "Roewyn Umayam | Full-Stack Developer & Taekwondo Instructor";

export default function Layout({ children, home, pageTitle }) {
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
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <div className={`flex flex-col overflow-x-hidden relative`}>
        <NavBar className="order-first"/>
        <main className="flex-auto block justify-items-center  justify-center">
          {children}
        </main>

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
              rel="noopener"
            >
              <FaLinkedinIn /><span className="sr-only">Link to LinkedIn account</span>
            </a>
            <a
              className=" mr-3 text-base md:text-md lg:text-lg hover:text-vibrant-purple "
              target="_blank"
              href="https://www.instagram.com/roewynaboat_tkd/"
              rel="noopener"
            >
              <GrInstagram/><span className="sr-only">Link to Instagram account</span>
            </a>
            <a
              className="mr-3 text-base md:text-md lg:text-lg hover:text-vibrant-purple"
              target="_blank"
              rel="noopener"
              href="https://www.facebook.com/profile.php?id=100009905313992"
            >
              <CgFacebook /><span className="sr-only">Link to Facebook account</span>
            </a>
            <a
              className="text-base md:text-md lg:text-lg hover:text-vibrant-purple"
              target="_blank"
              href="https://github.com/Umayarz18"
              rel="noopener"
            >
              <FaGithub /><span className="sr-only">Link to Github account</span>
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}
