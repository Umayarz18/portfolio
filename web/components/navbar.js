import { FiMenu } from "react-icons/fi";
import Link from "next/dist/client/link";
import { useState } from "react";
import Icon from "../public/Icon";

const links = [
  { link: "/about", title: "About" },
  { link: "/projects", title: "Projects" },
  { link: "/code-snippets", title: "Code" },
  { link: "/resources", title: "Resources" },
  { link: "/contact", title: "Contact" }
];
const NavItem = ({ link, title, id }) => (
  <a
    href={link}
    className=" md:inline-flex md:w-auto w-full px-3 py-1 rounded 
      hover:text-primary
    text-gray-700 dark:text-gray-200 dark:hover:text-primary 
      dark:hover:bg-opacity-90 font-bold items-center justify-center
    hover:bg-purple-200 "
  >
    {title}
  </a>
);

export default function NavBar() {
  return (
    <nav
      className="md:inline-flex mx-auto flex-wrap md:flex-row md:ml-auto md:w-auto w-full 
      md:items-center items-start  flex flex-col md:h-auto"
    >
      {links.map((item, index) => (
        <NavItem
          link={item.link}
          title={item.title}
          key={`${item.title}-navlink`}
        />
      ))}
    </nav>
  );
}
