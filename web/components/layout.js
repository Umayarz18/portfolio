import Head from "next/head";
import Image from "next/image";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { CgFacebook } from "react-icons/cg";
import Link from "next/link";
import NavBar from "./navbar";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Icon from "../public/Icon";
import { FiMenu } from "react-icons/fi";

const NavItem = ({ link, title }) => (
  <Link href={link}>
    <a
      className=" lg:ml-5 lg:inline-flex lg:w-auto w-full px-3 py-2 rounded 
    text-gray-700 dark:text-gray-200 font-bold items-center justify-center "
    >
      {title}
    </a>
  </Link>
);

export default function Layout(props) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const [active, setActive] = useState(false);

  //Use to toggle the menue
  const handleClick = () => {
    setActive(!active);
  };
  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  const domain = "localhost:3000"; //Change to match your domain
  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: "Roewyn Umayam - Full-Stack Developer",
    description: `Simple guy building small ideas for big impact.`,
    image: `'${domain}/images/banner.png'`,
    type: "website",
    twitterHandle: "@yourtwitter", //Change for you!
    ...customMeta
  };

  return (
    <div className="overflow-x-hidden">
      <Head>
        <title>{meta.title}</title>
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
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://${domain}${router.asPath}`} />
        <link rel="canonical" href={`https://${domain}${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Roewyn Umayam" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={meta.twitterHandle} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        <link rel="icon" href="/favicon.ico" />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>

      <div
        role="main"
        className={`flex flex-col min-h-screen justify-start items-center  w-screen bg-gray-100 dark:bg-gray-900 `}
      >
        <div className="flex flex-row p-3 ">
          <div className="w-screen lg:w-full lg:max-w-7xl flex items-center flex-wrap lg:flex-row justify-around px-5 md:px-44 :px-0 lg:space-x-60 ">
            <a href="/" className=" inline-flex items-center  ">
              <Icon />
              <span className="sr-only">Roewyn Umayam</span>
            </a>

            <button
              className="inline-flex p-3 hover:bg-vibrant-purple rounded lg:hidden text-txt-white ml-auto hover:text-txt-white outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={handleClick}
            >
              <span className="sr-only">Open main menu</span>
              {/** When Closed */}
              <FiMenu className="text-3xl  m-2 " />

              {/** When Opened */}
            </button>

            {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
            <div
              className={`${
                active ? "" : "hidden"
              }   w-full lg:inline-flex lg:flex-grow lg:w-auto `}
            >
              <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto' ">
                <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
                  <NavBar />
                  <button
                    aria-label="Toggle Dark Mode"
                    type="button"
                    className="lg:inline-flex w-full lg:ml-5 mx-3 lg:w-9 h-9 bg-gray-300 rounded-lg dark:bg-gray-600 flex items-center justify-center  
                    hover:ring-2 ring-gray-300 transition-all"
                    onClick={() =>
                      setTheme(resolvedTheme === "dark" ? "light" : "dark")
                    }
                  >
                    {mounted && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        className="w-5 h-5 text-gray-800 dark:text-gray-200"
                      >
                        {resolvedTheme === "dark" ? (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                          />
                        ) : (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                          />
                        )}
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <main>{children}</main>
        <div className="border-t-2 self-center flex flex-col md:mx-auto px-5  lg:px-32  justify-center items-center">
          <footer className=" p-8 flex flex-col  items-center space-y-3 w-full">
            <small className="text-base md:text-md lg:text-lg">
              Roewyn Umayam &copy;<time>2021</time>. All rights reserved.
            </small>
            <div className="flex items-center mt-2 md:mt-0">
              <a
                className=" mr-3 text-base md:text-md lg:text-lg hover:text-vibrant-purple"
                target="_blank"
                href="https://www.linkedin.com/in/roewyn-umayam/"
                rel="noopener"
              >
                <FaLinkedinIn />
                <span className="sr-only">Link to LinkedIn account</span>
              </a>
              <a
                className=" mr-3 text-base md:text-md lg:text-lg hover:text-vibrant-purple "
                target="_blank"
                href="https://www.instagram.com/roewynaboat_tkd/"
                rel="noopener"
              >
                <GrInstagram />
                <span className="sr-only">Link to Instagram account</span>
              </a>
              <a
                className="mr-3 text-base md:text-md lg:text-lg hover:text-vibrant-purple"
                target="_blank"
                rel="noopener"
                href="https://www.facebook.com/profile.php?id=100009905313992"
              >
                <CgFacebook />
                <span className="sr-only">Link to Facebook account</span>
              </a>
              <a
                className="text-base md:text-md lg:text-lg hover:text-vibrant-purple"
                target="_blank"
                href="https://github.com/Umayarz18"
                rel="noopener"
              >
                <FaGithub />
                <span className="sr-only">Link to Github account</span>
              </a>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
