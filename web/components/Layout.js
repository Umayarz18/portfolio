import Head from "next/head";
import Image from "next/image";
import React from "react";
import { FiMenu } from "react-icons/fi";
import NavBar from "./NavBar";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Footer from "./Footer";

const footerLinks = [
  [
    {
      link: "/",
      title: "Home",
    },
    {
      link: "/about",
      title: "About",
    },
    {
      link: "https://timeline.roewynumayam.com",
      title: "Timeline",
    },
  ],
  [
    {
      link: "/projects",
      title: "Projects",
    },
    {
      link: "/code-snippets",
      title: "Snippets",
    },
    {
      link: "/helpful-links",
      title: "Resources",
    },
  ],
  [
    {
      link: "https://twitter.com/RoewynU",
      title: "Twitter",
      outsideLink: true,
    },
    {
      link: "https://github.com/Umayarz18",
      title: "Github",
      outsideLink: true,
    },
    {
      link: "https://www.linkedin.com/in/roewyn-umayam/",
      title: "LinkedIn",
      outsideLink: true,
    },
  ],
];

export default function Layout(props) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const [active, setActive] = useState(false);

  //Use to toggle the menu
  const handleClick = () => {
    setActive(!active);
  };
  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  const domain = "roewynumayam.com";
  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: "Roewyn Umayam - Frontend Developer",
    description: `A martial artist, comic book geek, and certified clown that loves to
    build web apps for good ideas and memes.`,
    image: `https://${domain}/images/banner.png`,
    type: "website",
    twitterHandle: "@RoewynU", //Change for you!
    ...customMeta,
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
        <link rel="icon" href="/Icon.png" />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>

      <div
        className={`flex flex-col min-h-screen justify-start items-center w-screen bg-gray-100 bg-gradient-to-r dark:from-gray-900 dark:to-gray-950`}
      >
        <header className="flex flex-row py-3  w-full max-w-7xl mx-auto sticky top-0 z-50">
          <div
            className=" mx-auto w-full  flex 
          items-center flex-wrap lg:flex-row justify-between px-5 py-2 
          lg:px-0 max-w-3xl md:max-w-2xl"
          >
            <a href="/" className=" inline-flex items-center max-w-3xl">
              <Image
                src="/Icon.png"
                height={50}
                width={50}
                alt="Roewyn Umayam"
              />
            </a>
            <a
              className=" absolute px-4 py-3 transition-transform duration-200 
              transform -translate-y-24 right-3/4 focus:top-4 focus:translate-y-3 
              -top-2 text-gray-700 dark:text-gray-300 z-50 focus:ring-2 focus:ring-primary"
              href="#skip"
            >
              Skip to main content
            </a>
            <button
              className="inline-flex p-3 hover:bg-vibrant-purple rounded md:hidden text-txt-white ml-auto hover:text-txt-white outline-none"
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
              className={`${active ? "" : "hidden"
                }   w-full md:inline-flex flex-initial md:w-auto `}
            >
              <div className="md:inline-flex md:flex-row md:ml-12 md:w-auto w-full md:items-center items-start  flex flex-col md:h-auto' ">
                <div className="md:inline-flex md:flex-row md:ml-auto md:w-auto w-full md:items-center items-start  flex flex-col md:h-auto">
                  <NavBar router={router} />
                  <button
                    aria-label="Toggle Dark Mode"
                    type="button"
                    className="md:inline-flex w-full  md:ml-2 md:w-9 h-9 
                    bg-gray-300 rounded-lg dark:bg-gray-600 flex 
                    items-center justify-center  transition-all
                     focus:outline-none focus:ring-2 focus:ring-gray-600 dark:focus:ring-gray-300  "
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
        </header>
        <main id="skip">{children}</main>
        <Footer footerLinks={footerLinks} />
      </div>
    </div>
  );
}
