import Dropdown from "./Dropdown";
import { ArchiveIcon, ClockIcon, CodeIcon } from "@heroicons/react/outline";
import React from "react";
const links = [
  { link: "/about", title: "About" },
  { link: "/projects", title: "Projects" },
  { link: "/blog", title: "Blog" },
  {
    link: "/contact",
    title: "Contact"
  }
];

const ResourceItems = [
  {
    link: "https://timeline.roewynumayam.com",
    title: "Timeline",
    icon: ClockIcon
  },
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
  <a href={link} className=" nav-link" key={`${title}-top-nav-link`}>
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
      <Dropdown label="Extras" items={ResourceItems} type={"nav-link"} />
    </nav>
  );
}
