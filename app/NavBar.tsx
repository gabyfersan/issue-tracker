import Link from "next/link";
import React from "react";
import { AiFillBug } from "react-icons/ai";
const NavBar = () => {
  const links = [
    { label: "Dasboard", href: "/" },
    { label: "Issues", href: "/issue" },
  ];
  return (
    <nav className="flex space-x-5 border-b mb-5 px-5 h-14 items-center">
      <Link href="/" className="">
        <AiFillBug />
      </Link>
      <ul className="flex space-x-5 ">
        {links.map((link) => (
          <li>
            <Link key={link.href}  href={link.href} className="text-zinc-500 hover:text-zinc-800 transistion-colors">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
