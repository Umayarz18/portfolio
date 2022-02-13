/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable react/prop-types */
import Layout from '../../components/Layout';
import React from 'react';
import PropTypes from 'prop-types';
import { groq } from 'next-sanity';
import { getClient } from '../../lib/sanity.server';

export default function Blog({ posts }) {
    return (
        <Layout title='Blog - Roewyn Umayam' cannonical='blog'>
            <div className='max-w-2xl text-gray-600 dark:text-gray-300 m-5'>
                <section className='text-gray-600 dark:text-gray-300 font-normal text-lg md:text-xl my-5'>
                    <h1 className='text-3xl font-bold dark:text-gray-100 text-gray-900'>
                        Blog
                    </h1>
                    <p
                        className='text-gray-600 dark:text-gray-300 font-normal 
            text-lg md:text-xl my-5'
                    >
                        I&apos;m trying to document my experiences around
                        software development with case studies, tutorials, and
                        notes that might help other upcoming developers on your
                        journey. Check back later for some posts and in the mean
                        time, you can take a look at some of my{' '}
                        <a href='/projects' rel='noopener' className='link'>
                            past projects
                        </a>
                        .
                    </p>
                </section>

                <section className='text-gray-600 dark:text-gray-300 font-normal text-lg md:text-xl my-5'>
                    <h2 className='text-3xl font-bold dark:text-gray-100 text-gray-900 mb-4 '>
                        All Posts
                    </h2>
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
            className='w-full h-full flex flex-row'
            key={`blog-post-${key}`}
            href={`/blog/${data.slug.current}`}
        >
            <div
                className='overflow-hidden  rounded-xl h-90 
      md:w-full cursor-pointer md:m-auto group '
            >
                <div className=' w-full text-lg'>
                    <h3
                        className=' text-2xl font-semibold mb-2 
           ease-in-out group-hover:underline text-gray-700 dark:text-gray-200'
                    >
                        {data.title}
                    </h3>
                    <p className='text-gray-600 dark:text-gray-400 text-md mb-2'>
                        {data.description}
                    </p>
                </div>
            </div>
        </a>
    );
}

Blog.propTypes = {
    posts: PropTypes.object.isRequired,
};
