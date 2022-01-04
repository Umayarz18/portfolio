import Layout from "../components/layout";
import Tag from "../components/tag";
import React from "react";
export default function Resources({ notes }) {
  return (
    <Layout title="Resources - Roewyn Umayam">
      <div className="max-w-2xl text-gray-600 dark:text-gray-300 m-5">
        <section className="text-gray-600 dark:text-gray-300 font-normal text-lg md:text-xl my-5">
          <h1 className="text-3xl font-bold dark:text-gray-100 text-gray-900">
            Rad Resources and Helpful Links{" "}
            <span role="img" aria-label="Emoji with Sunglasses">
              😎
            </span>
          </h1>
          <p className="my-5">
            There are lots of awesome tools and learning resources out there
            that I{`'`}ve come across that might be helpful for you too. If
            there are any other cool tools you{`'`}ve come across, please let me
            know by contacting me and I can add them in.
          </p>
        </section>

        <section
          section
          className="grid grid-cols-1  gap-2 lg:gap-x-4 m-5 md:m-0"
        >
          {notes.map(({ title, description, link, image, tags }) => (
            <section className="text-gray-600 dark:text-gray-300 font-normal text-lg md:text-xl my-5">
              <a
                href={link}
                target="_blank"
                className="flex flex-col lg:flex-row justify-start dark:bg-gray-900 
              bg-gray-200  py-4 px-2   rounded  border-gray-400 border-2 
              dark:border-gray-700 self-center lg:h-52 h-full"
              >
                <img
                  className=" h-44 w-full lg:w-56 bg-blue-400 rounded mb-2"
                  src={image}
                  alt={`Screenshot of the homepage of ${title}`}
                />
                <div className="flex lg:ml-4 flex-col justify-center">
                  <h3 className="dark:text-gray-200 font-bold text-gray-700 text-md lg:text-lg">
                    {title}
                  </h3>
                  <div className="flex my-1 ">
                    {tags.map(({ title, color }) => (
                      <Tag title={title} color={color} />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {description}
                  </p>
                </div>
              </a>
            </section>
          ))}
        </section>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const notes = [
    {
      title: "Wave",
      description: `Wave is a free and amazing accessibilty tool for your websites. Just drop in your link and find out what areas to improve on in your sites to make them more accessible.`,
      link: "https://wave.webaim.org/",
      image: "/images/wave.png",
      tags: [
        { title: "Accessibility", color: "#125E8A" },
        { title: "Websites", color: "#363457" },
      ],
    },
    {
      title: "Coolors",
      description: `Coolors.co is an awesome color generate to helps make choosing colors simple and a bit more fun :)`,
      link: "https://coolors.co/",
      image: "/images/coolors.png",
      tags: [
        { title: "Design", color: "#7D83FF" },
        { title: "Colors", color: "#426B69" },
      ],
    },
  ];
  return {
    props: {
      notes,
    },
    revalidate: 60,
  };
}
