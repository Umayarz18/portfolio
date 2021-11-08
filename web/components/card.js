import { useEffect, useState } from "react";
import { GoNote } from "react-icons/go";
import { VscTools } from "react-icons/vsc";

export default function Card({ title, color, description, link, logo, type }) {
  return (
    <>
      {type === "vertical" ? (
        <VerticalCard
          title={title}
          description={description}
          color={color}
          logo={logo}
          logoStyles="w-3/6  mt-2"
          link={link ? link : null}
        />
      ) : (
        <HorizontalCard
          title={title}
          description={description}
          color={color}
          logo={logo}
          logoStyles="w-3/6  mt-2"
          link={link ? link : null}
        />
      )}
    </>
  );
}

function VerticalCard({ title, color, description, link, logo, logoStyles }) {
  const [opened, isOpened] = useState(false);

  return (
    <div className="overflow-hidden rounded  max-w-sm my-3 md:m-5 justify-center flex flex-row items-center   ">
      <div className={opened ? "hidden" : "block"}>
        <div className=" flex justify-center items-center h-56 w-56 ">
          <img
            src={logo}
            className={` ${logoStyles} hover:transform hover:scale-50 `}
            alt={`Logo for ${title}`}
            style={{ maxHeight: "200px", maxWidth: "200px" }}
          />
        </div>
      </div>
      <div
        className={[
          "hidden px-6  font-bold text-gray-700 text-lg md:text-xl lg:text-2xl mt-3  row-span-1 col-span-3",
          opened ? "block" : "",
        ].join("")}
        style={{ color: color }}
      >
        <h3 className="my-3 text-2xl">{title}</h3>
        {/** Display only on hover, takes up the whole container */}
        <p className=" clamp-6 font-normal text-gray-600 text-base  ">
          {description}
        </p>
        <div className=" pl-6  pt-3 pb-3 flex flex-row self-start justify-start h items-center row-auto col-span-3">
          {/*justify-start*/}
          {link ? (
            <>
              <span className=" text-sm lg:text-md font-semibold text-gray-500 mr-2 mb-2 hover:text-gray-700 ">
                <a
                  href={link}
                  target="_blank"
                  className="inline-block"
                  rel="noopener"
                >
                  Website
                </a>
              </span>
              <span className=" text-sm lg:text-md font-semibold text-gray-500 mr-2 mb-2 hover:text-gray-700 ">
                <a href={`/projects/${title.toLowerCase()}`}>
                  Project Details
                  <GoNote className="inline-block ml-1" />
                </a>
              </span>
            </>
          ) : (
            <span className=" text-sm lg:text-md font-semibold text-gray-600 mr-2 mb-2">
              In Development
              <VscTools className="inline-block mr-1" />
              <a href={`/projects/${title.toLowerCase()}`}>
                Project Details
                <GoNote className="inline-block ml-1" />
              </a>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

function HorizontalCard({ title, color, description, link, logo, logoStyles }) {
  return (
    <a
      href={`/projects/${title.toLowerCase()}`}
      className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-6xl m-5 hover:shadow-lg"
    >
      <div className="md:flex">
        <div className="md:flex-shrink-0 grid items-center justify-center md:p-3 md:m-2 ">
          <img
            className={`self-center ${logoStyles} md:max-width-full w-9/12  hidden md:block scale-150 md:scale-100  md:h-48   md:w-48`}
            src={logo}
            alt={`Logo for ${title}`}
          />
        </div>
        <div className="p-8">
          {/**<div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            Cat News
          </div> */}
          <h2
            style={{ color: color }}
            className="block mt-1 text-lg leading-tight font-medium font-bold"
          >
            {title}
          </h2>
          <p className="mt-2 text-gray-500">{description}</p>

          <div className="  pt-3 pb-3 flex flex-row self-start justify-start h items-center row-auto col-span-3">
            {/*justify-start*/}
            {link ? (
              <>
                <span className=" text-sm lg:text-md font-semibold text-gray-500 mr-2 mb-2 hover:text-gray-700 ">
                  <a
                    href={link ? link : "#"}
                    target="_blank"
                    className="inline-block"
                    rel="noopener"
                  >
                    Website
                  </a>
                </span>
                <span className=" text-sm lg:text-md font-semibold text-gray-500 mr-2 mb-2 hover:text-gray-700 ">
                  <a href={`/projects/${title.toLowerCase()}`}>
                    Project Details
                    <GoNote className="inline-block ml-1" />
                  </a>
                </span>
              </>
            ) : (
              <span className=" text-sm lg:text-md font-semibold text-gray-600 mr-2 mb-2">
                In Development
                <VscTools className="inline-block ml-1" />
              </span>
            )}
          </div>
        </div>
      </div>
    </a>
  );
}
