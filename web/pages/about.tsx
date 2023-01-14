import Layout from "../components/Layout";
import React from "react";
import { getClient } from "../lib/sanity.server";
import groq from "groq";
import BlockContent from "../components/BlockContent";

export default function About({ content }: any) {
  return (
    <Layout
      title={content.seoContent.title}
      description={content.seoContent.description}
    >
      <section className="mt-10 flex flex-col m-5 justify-center max-w-2xl prose prose-lg  md:prose-xl  dark:prose-dark">
        <BlockContent body={content.pageContent} />
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const content = await getClient()
    .fetch(
      groq`
            *[_type=="page" && seoContent.title == "A Bit About Me - Roewyn Umayam"][0]{
                seoContent,
                pageContent
              }`
    )
    .catch((error) => {
      console.log(error);
    });

  return {
    props: { content },
    revalidate: 10,
  };
}
