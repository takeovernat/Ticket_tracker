"use client";
import React from "react";
import Link from "next/link";
import { FaTicketAlt } from "react-icons/fa";
import { usePathname } from "next/navigation";
import classnames from "classnames";

const NavBar = () => {
  const links = [
    { label: "Dashbaord", href: "/" },
    { label: "Issues", href: "/issues" },
  ];
  const currentPath = usePathname();
  //console.log(currentPath);

  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <FaTicketAlt />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            className={classnames({
              "text-zinc-900": link.href === currentPath,
              "text-zinc-500": link.href !== currentPath,
              "hover:text-zinc-800 transition-colors": true,
            })}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
