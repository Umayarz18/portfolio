import groq from "groq";
import { getClient } from "../lib/sanity.server";
import React from "react";
export default function SiteMap() {
  return <div>loading</div>;
}

export async function getServerSideProps({ res }) {
  const baseUrl = `https://www.roewynumayam.com`;
  const baseLinks = [
    "about",
    "contact",
    "projects",
    "blog",
    "helpful-links",
    "code-snippets",
  ];
  const query = groq`{
      "codeSnippets": *[_type == 'codeSnippet']{slug},
      "projects": *[_type =='project']{slug}
    }`;
  const urls = await getClient().fetch(query);
  const codeSnippets = urls.codeSnippets.map((page) => {
    const slug = page.slug.current === "/" ? "/" : `/${page.slug.current}`;
    return `
      <loc>${baseUrl}/code-snippets${slug}</loc>
    `;
  });

  const projectsList = urls.projects.map((page) => {
    const slug = page.slug.current === "/" ? "/" : `/${page.slug.current}`;
    return `
      <loc>${baseUrl}/projects${slug}</loc>
    `;
  });

  const locations = [...codeSnippets];
  const projects = [...projectsList];

  const createSitemap = () => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${locations
          .map((location) => {
            return `<url>
                      ${location}
                    </url>
                  `;
          })
          .join("")}

        ${projects
          .map((project) => {
            return `<url>
                      ${project}
                    </url>
                  `;
          })
          .join("")}}
        
         ${baseLinks.map((link) => {
           return `<url> 
           <loc>${baseUrl}/${link}</loc> 
           <changefreq>daily</changefreq>
           <priority>0.7</priority>
           </url>`;
         })} 
    </urlset>
    `;
  res.setHeader("Content-Type", "text/xml");
  res.write(createSitemap());
  res.end();
  return {
    props: {},
  };
}
