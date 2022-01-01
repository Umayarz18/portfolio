import { FiMenu } from "react-icons/fi";
import Link from "next/dist/client/link";
import { useState } from "react";
import Icon from "../public/Icon";
import Dropdown from "./Dropdown";
import { ArchiveIcon, CodeIcon } from "@heroicons/react/outline";

const links = [
  { link: "/about", title: "About" },
  { link: "/projects", title: "Projects" },
  { link: "https://timeline.roewynumayam.com", title: "Timeline" },
  { link: "/contact", title: "Contact" }
];

const ResourceItems = [
  {
    link: "/code-snippets",
    title: "Code Snippets",
    icon: CodeIcon
  },
  {
    link: "/helpful-links",
    title: "Helpful Links",
    icon: ArchiveIcon
  }
];
const NavItem = ({ link, title, id }) => (
  <a href={link} className=" nav-link">
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
      <Dropdown label="Resources" items={ResourceItems} type={"nav-link"} />
    </nav>
  );
}
