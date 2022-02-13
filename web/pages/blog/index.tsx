/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable react/prop-types */
import Layout from '../../components/Layout';
import React from 'react';
import PropTypes from 'prop-types';
import { BlogCard } from '../../components/BlogCard';
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
                        <BlogCard key={post.id} data={post} />
                    ))}
                </section>
            </div>
        </Layout>
    );
}

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
        revalidate: 10, // In seconds
    };
}

Blog.propTypes = {
    posts: PropTypes.object.isRequired,
};
