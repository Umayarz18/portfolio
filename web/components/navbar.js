import { FiMenu } from "react-icons/fi";
import Link from "next/dist/client/link";
import { useState } from "react";
import Icon from "../public/Icon";

const links = [
  { link: "/about", title: "About" },
  { link: "/projects", title: "Projects" },
  { link: "/blog", title: "Blog" },
  {
    link: "mailto:roewyn.e.umayam@gmail.com?subject=Contact%20From%20Website",
    title: "Contact"
  }
];
const NavItem = ({ link, title }) => (
  <Link href={link} key={`${title}-link`}>
    <a
      key={`${title}-link`}
      className=" lg:inline-flex lg:w-auto w-full px-3 py-1 rounded 
      hover:text-primary
    text-gray-700 dark:text-gray-200 dark:hover:text-primary 
      dark:hover:bg-opacity-90 font-bold items-center justify-center
    hover:bg-purple-200 "
    >
      {title}
    </a>
  </Link>
);

export default function NavBar() {
  return (
    <nav
      className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full 
    lg:items-center items-start  flex flex-col lg:h-auto"
    >
      {links.map(item => (
        <NavItem link={item.link} title={item.title} />
      ))}
    </nav>
  );
}
