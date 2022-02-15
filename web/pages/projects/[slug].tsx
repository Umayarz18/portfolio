/* eslint-disable react/prop-types */
import Layout from '../../components/Layout';
import { Tag } from '../../components/Tag';
import { groq } from 'next-sanity';
import { getClient } from '../../lib/sanity.server';
import { urlFor } from '../../lib/sanity';
import BlockContent from '../../components/BlockContent';
import React from 'react';

export default function Post(props) {
    const {
        projectBreakdown = 'Uh oh, not found?!',
        technologies = [],
        seo,
        links,
    } = props;

    return (
        <Layout
            title={`${seo.title}: Project Overview - Roewyn Umayam`}
            description={seo.description}
            image={urlFor(seo.ogImage).url()}
        >
            {/** Article Section */}
            <article className='max-w-2xl m-5'>
                <div className='flex flex-row items-center justify-between'>
                    <h1 className='text-4xl lg:text-6xl font-semibold dark:text-gray-100 text-gray-900 mb-4'>
                        {seo.title}: Project Overview
                    </h1>
                </div>
                <div className='prose prose-lg  md:prose-xl dark:prose-dark'>
                    <div className=' flex flex-wrap  mt-2'>
                        {technologies.map(({ color, title, _id }) => (
                            <Tag key={_id} color={color} title={title} />
                        ))}
                    </div>
                    <div className=' flex flex-wrap gap-4 mt-2'>
                        {links.map(({ label, source, _id }) => (
                            <a
                                className='link  lg:text-2xl hover:underline font-extrabold'
                                key={_id}
                                href={source}
                            >
                                {label}
                            </a>
                        ))}
                    </div>
                    <div className=''>
                        <BlockContent body={projectBreakdown} />
                    </div>
                </div>
            </article>
        </Layout>
    );
}

const query = groq`*[_type == "project" && seoContent.slug.current == $slug][0]{
    ...,
    "seo":seoContent,
    "technologies": technologies[]->{title, "color": color.hex, _id},
    links,
  }`;

export async function getStaticProps({ params, preview = false }) {
    const slug = await getClient().fetch(query, {
        slug: params.slug,
    });

    return {
        props: slug,
        revalidate: 60,
    };
}

export async function getStaticPaths() {
    // Call an external API endpoint to get projects
    const projects = await getClient().fetch(groq`*[_type=="project"]{
        "slug": seoContent.slug   
  }`);
    // Get the paths we want to pre-render based on projects
    const paths = projects.map((project) => ({
        params: { slug: `${project.slug.current}` },
    }));

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false };
}
