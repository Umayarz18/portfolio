/* eslint-disable react/prop-types */
import Layout from '../../components/Layout';
import { Tag } from '../../components/Tag';
import { groq } from 'next-sanity';
import { getClient } from '../../lib/sanity.server';
import { urlFor } from '../../lib/sanity';
import BlockContent from '../../components/BlockContent';
import React from 'react';
export default function Post({ page, preview }) {
    const { body, seo, stack } = page;

    return (
        <Layout
            title={`${seo.title}`}
            image={urlFor(seo.ogImage).url()}
            description={seo.description}
        >
            {/** Article Section */}
            <article className='max-w-2xl m-5'>
                <div className='flex flex-row items-center justify-between leading-10'>
                    <h1 className='text-4xl lg:text-6xl font-bold dark:text-gray-100 text-gray-900 my-4  h-full'>
                        {seo.title}
                    </h1>
                </div>
                <div className='prose prose-lg  md:prose-xl dark:prose-dark'>
                    <div className=' flex flex-wrap  '>
                        {stack &&
                            stack.map(({ color, title, _id }) => (
                                <Tag key={_id} color={color} title={title} />
                            ))}
                    </div>

                    <div className='mx-auto'>
                        <BlockContent body={body} />
                    </div>
                </div>
            </article>
        </Layout>
    );
}

const query = groq`*[_type == "post" && seoContent.slug.current == $slug][0]{
    "seo":seoContent,
    "stack": stack_composition[]-> {
        title, "color": color.hex, _id,
    },
    body
  }`;

export async function getStaticProps({ params, preview = false }) {
    const queryParams = { slug: params.slug };
    const data = await getClient(preview).fetch(query, queryParams);

    // Escape hatch, if our query failed to return data
    if (!data) return { notFound: true };

    // Helper function to reduce all returned documents down to just one
    const page = filterDataToSingleItem(data, preview);

    return {
        // Pass down the "preview mode" boolean to the client-side
        props: { page },
    };
}

export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const posts = await getClient().fetch(groq`*[_type=="post"]{
       "slug": seoContent.slug 
  }`);

    // Get the paths we want to pre-render based on posts
    const paths = posts.map((post) => ({
        params: { slug: post.slug.current },
    }));

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false };
}

/**
 * Helper function to return the correct version of the document
 * If we're in "preview mode" and have multiple documents, return the draft
 */
function filterDataToSingleItem(data, preview) {
    if (!Array.isArray(data)) {
        return data;
    }

    if (data.length === 1) {
        return data[0];
    }

    if (preview) {
        return data.find((item) => item._id.startsWith('drafts.')) || data[0];
    }

    return data[0];
}
