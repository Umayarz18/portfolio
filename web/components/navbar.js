import { FiMenu } from "react-icons/fi";
import Link from "next/dist/client/link";
import { useState } from "react";

export default function NavBar() {
  const [active, setActive] = useState(false);

  //Use to toggle the menue
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className="flex items-center flex-wrap justify-between p-3 bg-vibrant-blue">
        <a href="/" className=" inline-flex items-center p-2  ml-5 mr-4">
          <span className="font-bold text-xl text-txt-white">Roewyn Umayam</span>
        </a>
        <div className=" ">
          <button
            className="inline-flex p-3 hover:bg-vibrant-purple rounded lg:hidden text-txt-white ml-auto hover:text-txt-white outline-none"
            aria-controls="mobile-menu"
            aria-expanded="false"
            onClick={handleClick}
          >
            <span className="sr-only">Open main menu</span>
            {/** When Closed */}
            <FiMenu className="text-3xl  m-2 " />

            {/** When Opened */}
          </button>
        </div>

        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? "" : "hidden"
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto' mr-5">
            <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
              <Link href="/about">
                <a className="ml-5 lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-txt-white font-bold items-center justify-center hover:bg-vibrant-purple hover:text-txt-white">
                  About Me
                </a>
              </Link>
              <Link href="/projects">
                <a className="ml-5 lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-txt-white font-bold items-center justify-center hover:bg-vibrant-purple hover:text-txt-white">
                  My Projects
                </a>
              </Link>
              <Link href="/contact">
                <a className="ml-5 lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-txt-white font-bold items-center justify-center hover:bg-vibrant-purple hover:text-txt-white">
                  Say Hey
                </a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
