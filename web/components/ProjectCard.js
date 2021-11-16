import Image from "next/image";
export const ProjectCard = ({ key, link, color, title, logo, description, code }) => {
  return (
    <a
      key={key}
      href={link}
      target="_blank"
      rel="noopener"
      style={{ borderColor: color }}
      className={`dark:bg-gray-900 bg-gray-200  
      border-gray-400 border-2  rounded p-6
      m-5 md:m-0
      flex flex-col justify-center`}
    >
      <div className="w-32 h-32 self-center relative">
        <Image
          src={logo}
          className="w-full h-full"
          layout="fill"
          alt={`Project logo for ${title}`} />
      </div>
      <h3 className="text-lg font-bold mt-2">{title}</h3>
      <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 truncate">
        {description}
      </p>
      <div className="flex flex-row justify-between mt-2">
        <p
          target="_blank"

          className="text-gray-800 dark:text-gray-100 font-medium "
        >
          View Project
        </p>
        {code && <a>View Code</a>}
      </div>
    </a>
  );
};
