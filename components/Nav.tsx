"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdWbSunny } from "react-icons/md";


const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
          key={index}
            href={link.path}
            className={`${
              link.path === pathname && "text-acent border-b-2 border-acent"
            }
                    capitalize font-medium hover:text-acent transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
      <button><MdWbSunny/></button>
    </nav>
  );
};

export default Nav;
