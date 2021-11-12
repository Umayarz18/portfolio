/* eslint-disable react/prop-types */
import Layout from "../../components/Layout";
import React from "react";
import PropTypes from "prop-types";
import { groq } from "next-sanity";
import { getClient } from "../../lib/sanity.server";
import { urlFor } from "../../lib/sanity";
import BlockContent from "../../components/BlockContent";

export default function Blog({ posts }) {
  return (
    <Layout>
      <div className="max-w-2xl m-5 ">
        <section>
          <h1 className="text-3xl font-bold dark:text-gray-100 text-gray-900  ">
            Blog
          </h1>
          <p
            className="text-gray-600 dark:text-gray-300 font-normal 
            text-lg md:text-xl my-5"
          >
            I'm trying to document my experiences around software development
            with case studies, tutorials, and notes that might help other
            upcoming developers on your journey.
          </p>
          <div className="relative w-full mb-4">
            <input
              aria-label="Search articles"
              type="text"
              placeholder="Search articles"
              className="block w-full px-4 py-2 text-gray-900 bg-white border 
              border-gray-200 rounded-md dark:border-gray-900 focus:ring-primary 
              focus:border-primary dark:bg-gray-800 dark:text-gray-100"
            />
            <svg
              className="absolute w-5 h-5 text-gray-400 right-3 top-3 
              dark:text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
        </section>
        <section>
          <h1 className="text-3xl font-bold dark:text-gray-100 text-gray-900 mb-4 ">
            All Posts
          </h1>
          {posts.map((post) => (
            <SlugCard key={post.id} data={post} />
          ))}
        </section>
      </div>
    </Layout>
  );
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps() {
  const posts = await getClient()
    .fetch(
      groq`
  *[_type == "post"]`
    )
    .catch((error) => {
      console.log(error);
    });

  return {
    props: {
      posts,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  };
}

function SlugCard({ data, key }) {
  return (
    <a
      className="w-full h-full flex flex-row"
      key={`blog-post-${key}`}
      role="article"
      href={`/blog/${data.slug.current}`}
    >
      <div
        className="overflow-hidden dark:hover:bg-gray-900 rounded-xl h-90 
      md:w-full cursor-pointer md:m-auto group "
      >
        <div className=" w-full">
          <h2
            className="text-primary text-2xl font-semibold mb-2 
          group-hover:text-primary-dark transition duration-300 ease-in-out"
          >
            {data.title}
          </h2>
          <p className="text-gray-800 dark:text-gray-400 text-md font-medium mb-2">
            <BlockContent body={data.description} />
          </p>
        </div>
      </div>
    </a>
  );
}

Blog.propTypes = {
  posts: PropTypes.object.isRequired,
};
