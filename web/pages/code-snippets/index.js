/* eslint-disable react/prop-types */
import Layout from '../../components/Layout';
import { groq } from 'next-sanity';
import { getClient } from '../../lib/sanity.server';
import { Tag } from '../../components/Tag';
import React from 'react';
export default function CodeSnippetsPage({ snippets }) {
    return (
        <Layout
            title='Code Snippets - Roewyn Umayam'
            description="I kept looking of the same things when I code so here's a list of things I always refer back to."
        >
            <div
                style={{ minHeight: '70vh' }}
                className='max-w-md md:max-w-xl lg:max-w-2xl'
            >
                <section className='m-5 md:m-0'>
                    <h2 className='text-3xl font-bold dark:text-gray-100 text-gray-900  '>
                        Code Snippets to Recycle{' '}
                        <span role='img' aria-label='recycle symbol'>
                            ♻️
                        </span>
                    </h2>
                    <p
                        className='text-gray-600 dark:text-gray-300 font-normal 
            text-lg md:text-xl my-5'
                    >
                        There&apos;s a lot of code I end up reusing or
                        constantly looking up on Google on how to do it. To save
                        my time and maybe yours, here&apos;s list of snippets
                        that might help you out.
                    </p>
                </section>
                <section className='grid grid-cols-2 gap-2 lg:gap-x-4 m-5 md:m-0'>
                    {snippets.map((snippet) => (
                        <a
                            key={`code-snippet-${snippet.title}`}
                            href={`/code-snippets/${snippet.slug.current}`}
                            className='flex flex-col justify-start dark:bg-gray-900 
              bg-gray-200  py-4 px-2 rounded  border-gray-400 border-2 
              dark:border-gray-700 self-center lg:h-32 h-full'
                        >
                            {snippet.tags && (
                                <div className='flex flex-wrap'>
                                    {snippet.tags.map((tag) => (
                                        <Tag
                                            color={tag.color}
                                            title={tag.title}
                                            key={tag._id}
                                        />
                                    ))}
                                </div>
                            )}
                            <h3 className='dark:text-gray-200 font-bold text-gray-700 text-md lg:text-lg'>
                                {snippet.title}
                            </h3>
                            <p className='text-sm text-gray-600 dark:text-gray-400'>
                                {snippet.description}
                            </p>
                        </a>
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
    const snippets = await getClient()
        .fetch(
            groq`
    *[_type == "codeSnippet"]{
        _id,
        title,
        slug,
        description,
        "tags": tags[]->{title, "color": color.hex, _id},
    }`
        )
        .catch((error) => {
            console.log(error);
        });

    return {
        props: {
            snippets,
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 10 seconds
        revalidate: 10, // In seconds
    };
}
