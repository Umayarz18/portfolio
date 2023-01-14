/* eslint-disable jsx-a11y/anchor-has-content */
import Image from "next/image";
import React from "react";

type ProjectCardProps = {
  key?: string;
  link: string;
  color: string;
  title: string;
  description: string;
  logo: string;
  code?: string;
};

export const ProjectCard = ({
  key,
  link,
  color,
  title,
  logo,
  description,
  code,
}: ProjectCardProps) => {
  return (
    <article
      key={key}
      style={{ borderColor: color }}
      className={`bg-gray-200 dark:bg-transparent  
      border-gray-400 border-2  rounded p-6
      m-5 md:m-0
      flex flex-col justify-center`}
    >
      <div className="w-32 h-32 self-center relative">
        <Image
          src={logo}
          className="w-full h-full"
          layout="fill"
          alt={`Project logo for ${title}`}
        />
      </div>
      <h3 className="text-lg font-bold mt-2">{title}</h3>
      <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 truncate">
        {description}
      </p>
      <div className="flex flex-row justify-between mt-2">
        <a
          target="_blank"
          href={link}
          rel="noopener noreferrer"
          className="text-gray-800 dark:text-gray-100 font-medium "
        >
          View Project
        </a>
        {code && <a>View Code</a>}
      </div>
    </article>
  );
};
