import groq from "groq";
import { getClient } from "../lib/sanity.server";
export default function SiteMap() {
  return <div>loading</div>;
}

export async function getServerSideProps({ res }) {
  const baseUrl = `https://${process.env.DOMAIN}`;
  const baseLinks = ["about", "contact", "projects", "blog", "helpful-links"];
  const query = groq`{
      "countries": *[_type == 'codeSnippet']{slug},
    }`;
  const urls = await getClient().fetch(query);
  const countries = urls.countries.map((page) => {
    const slug = page.slug.current === "/" ? "/" : `/${page.slug.current}`;
    return `
      <loc>${baseUrl}${slug}</loc>
      <changefreq>daily</changefreq>
      <priority>0.7</priority>
    `;
  });

  const locations = [...countries];
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

         ${baseLinks.map((link) => {
           return `<url> <loc>${baseUrl}/${link}</loc> </url>`;
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
