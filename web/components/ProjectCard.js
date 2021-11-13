export const ProjectCard = (props) => {
  return (
    <a
      key={props.key}
      href={props.link}
      target="_blank"
      style={{ borderColor: props.color }}
      className={`dark:bg-gray-900 bg-gray-200  
      border-gray-400 border-2  rounded p-6
      m-5 md:m-0
      flex flex-col justify-center`}
    >
      <img src={props.logo} className="w-32 h-32 self-center" />
      <h3 className="text-lg font-bold mt-2">{props.title}</h3>
      <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 truncate">
        {props.description}
      </p>
      <div className="flex flex-row justify-between mt-2">
        <a
          href={props.link}
          target="_blank"
          className="text-gray-800 dark:text-gray-100 font-medium "
        >
          View Project
        </a>
        {props.code && <a>View Code</a>}
      </div>
    </a>
  );
};
