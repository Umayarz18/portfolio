import { GoNote } from "react-icons/go";
import { VscTools } from "react-icons/vsc";

export default function Card({title, color, description, link}){
    return(
        <div className="overflow-hidden rounded bg-txt-white shadow-md max-w-sm m-5">
            <div style={{backgroundColor: color}} className="p-5"></div>
            <div className="px-6 font-bold text-gray-700 text-xl md:text-2xl lg:text-3xl mt-3">
                {title}
                {/** Display only on hover, takes up the whole container */}
                <p className="my-3 clamp-1 font-normal text-gray-600 text-base overflow-hidden">{description}</p>
            </div>
            <div className="px-6 pt-4 flex flex-row pb-2">
                {link? 
                    (<><span className=" text-sm lg:text-md font-semibold text-gray-500 mr-2 mb-2 hover:text-gray-700 "><a href={link} target="_blank">Website</a></span>
                    <span className=" text-sm lg:text-md font-semibold text-gray-500 mr-2 mb-2 hover:text-gray-700 "><a href={`/projects/${title.toLowerCase()}`}>Project Details<GoNote className="inline-block ml-1" /></a></span>
                    </>):(
                    <span className=" text-sm lg:text-md font-semibold text-gray-600 mr-2 mb-2">In Development<VscTools className="inline-block ml-1"/></span>
                    )
                }
            </div>
        </div>
    )
}