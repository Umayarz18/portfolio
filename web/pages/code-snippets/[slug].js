/* eslint-disable react/prop-types */
import Layout from '../../components/Layout';
import { useRouter } from 'next/router';
import { groq } from 'next-sanity';
import { getClient } from '../../lib/sanity.server';
import { Tag } from '../../components/Tag';
import BlockContent from '../../components/BlockContent';
import React from 'react';
export default function Post(props) {
    const router = useRouter();
    let { slug } = router.query;
    const {
        body = 'Uh oh, not found?!',
        title = 'Unknown Title?',
        tags,
    } = props;

    return (
        <Layout
            title={`${title} - Code Snippets - Roewyn Umayam `}
            cannonical={`/code-snippets/${slug}`}
        >
            {/** Article Section */}
            <article className='lg:max-w-2xl m-5 md:mx-auto'>
                <div className='flex flex-row items-center justify-between'>
                    <h1 className='text-4xl font-bold dark:text-gray-100 text-gray-900 mt-3'>
                        {title}
                    </h1>
                </div>
                <div className='flex flex-wrap my-4'>
                    {tags.map((tag) => (
                        <Tag
                            key={tag._id}
                            color={tag.color}
                            title={tag.title}
                        />
                    ))}
                </div>
                <div className=' mx-auto '>
                    <BlockContent body={body} />
                </div>
            </article>
        </Layout>
    );
}

const query = groq`*[_type == "codeSnippet" && slug.current == $slug][0]{
    body,
    title,
    "tags": tags[]->{title, "color": color.hex, _id,},
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
    // Call an external API endpoint to get posts
    const snippets = await getClient().fetch(groq`*[_type=="codeSnippet"]{
    slug
  }`);

    // Get the paths we want to pre-render based on posts
    const paths = snippets.map((snippet) => ({
        params: { slug: snippet.slug.current },
    }));

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false };
}
