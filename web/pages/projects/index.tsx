/* eslint-disable react/prop-types */
import Layout from '../../components/Layout';
import React from 'react';
import { getClient } from '../../lib/sanity.server';
import groq from 'groq';
export default function Projects({ projects }) {
    return (
        <Layout
            title='My Projects - Roewyn Umayam'
            description='A list of the kinda neat projects made for community or memes.'
        >
            <div className='max-w-2xl text-gray-600 dark:text-gray-300 m-5'>
                <section className='text-gray-600 dark:text-gray-300 font-normal text-lg md:text-xl my-5'>
                    <h2 className='text-3xl font-bold dark:text-gray-100 text-gray-900'>
                        Projects for the Memes or Work
                    </h2>
                    <p className='my-5'>
                        I continually work on projects to learn new things in
                        web development. Most of my work is done for
                        organization or to prototype ideas that have promise to
                        do a lot of good. Other times, they exist only to meme
                        around with a new technology or concept{' '}
                        <span role='img' aria-label='Clown face emoji'>
                            🤡
                        </span>
                        .
                    </p>
                    <ul className='my-5 grid grid-cols-1 gap-y-3 text-md md:text-lg'>
                        {projects.map(({ seo }) => (
                            <a
                                key={`${seo.title}-project-card`}
                                className='w-full h-full flex flex-row'
                                href={`/projects/${seo.slug.current}`}
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
                                            {seo.title}
                                        </h3>
                                        <p className='text-gray-600 dark:text-gray-400 text-md mb-2'>
                                            {seo.description}
                                        </p>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </ul>
                </section>
            </div>
        </Layout>
    );
}
export async function getStaticProps() {
    const projects = await getClient()
        .fetch(
            groq`
  *[_type == "project"] | order(_createdAt desc) {
      "seo":seoContent{
      title,
      slug,
      description,
      }
    }`
        )
        .catch((error) => {
            console.log(error);
        });

    return {
        props: {
            projects,
        },
        revalidate: 10, // In seconds
    };
}
