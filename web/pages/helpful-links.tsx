import Layout from '../components/Layout';
import { Tag } from '../components/Tag';
import React from 'react';
import { getClient } from '../lib/sanity.server';
import { groq } from 'next-sanity';
export default function Resources({ notes }: any) {
    return (
        <Layout
            title='Resources - Roewyn Umayam'
            description="I've found a lot of nice resources or tools that might have you out."
        >
            <div className='max-w-2xl text-gray-600 dark:text-gray-300 m-5'>
                <section className='text-gray-600 dark:text-gray-300 font-normal text-lg md:text-xl my-5'>
                    <h1 className='text-3xl font-bold dark:text-gray-100 text-gray-900'>
                        Rad Resources and Helpful Links{' '}
                        <span role='img' aria-label='Emoji with Sunglasses'>
                            😎
                        </span>
                    </h1>
                    <p className='my-5'>
                        There are lots of awesome tools and learning resources
                        out there that I&apos;ve come across that might be
                        helpful for you too. If there are any other cool tools
                        you&apos;ve come across, please let me know by
                        contacting me and I can add them in.
                    </p>
                </section>

                <section className='grid grid-cols-1  gap-2 lg:gap-x-4 m-5 md:m-0'>
                    {notes.map(({ title, description, link, tags, _id }) => (
                        <a
                            href={link}
                            key={_id}
                            className='text-gray-600 dark:text-gray-300 font-normal text-lg md:text-xl my-5'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <div className='overflow-hidden  rounded-xl h-90 md:w-full cursor-pointer md:m-auto group '>
                                <div className=' w-full text-lg'>
                                    <h3 className=' text-2xl font-semibold mb-2 ease-in-out group-hover:underline text-gray-700 dark:text-gray-200'>
                                        {title}
                                    </h3>
                                    <div className='flex my-1 '>
                                        {tags &&
                                            tags.map(({ title, color }) => (
                                                <Tag
                                                    title={title}
                                                    color={color}
                                                    key={`${title}-tag-helpful-link`}
                                                />
                                            ))}
                                    </div>
                                    <p className='text-gray-600 dark:text-gray-400 text-md mb-2'>
                                        {description}
                                    </p>
                                </div>
                            </div>
                        </a>
                    ))}
                </section>
            </div>
        </Layout>
    );
}

export async function getStaticProps() {
    const notes = await getClient()
        .fetch(
            groq`
      *[_type=="resourceLink"] | order(_createdAt desc){
        _id,
        link,
        title,
        description,
      }`
        )
        .catch((error) => {
            console.log(error);
        });

    return {
        props: { notes },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 10 seconds
        revalidate: 10, // In seconds
    };
}
