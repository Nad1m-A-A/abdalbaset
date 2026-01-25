"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ProjectDropDown from "./ProjectDropDown";

function PagesLinks() {
  const pathname = usePathname();
  const [dropDown, setDropDown] = useState(false);
  const pages = [
    { text: "Home", url: "/" },
    { text: "Projects", url: "/projects" },
    { text: "Journey", url: "/journey" },
    { text: "Services", url: "/services" },
    { text: "Contact", url: "/contact" },
  ];
  return (
    <ul className="font-light flex flex-col gap-3 text-lg x">
      {pages.map((page, i) => {
        const isActive = pathname === page.url || (page.url === "/projects" && pathname.startsWith("/projects/"));

        if (page.text === "Projects") {
          return (
            <li key={i}>
              <div className="flex items-end gap-1">
                <Link
                  className={`hover:text-main transition-all ${isActive ? "border-b-2 border-[#d6b210]" : ""}`}
                  href={page.url}
                >
                  {page.text}
                </Link>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="20"
                  onClick={() => setDropDown((prev) => !prev)}
                  className={`${dropDown ? "rotate-90" : ""} cursor-pointer transition-all fill-main`}
                >
                  <path d="M400-280v-400l200 200-200 200Z" />
                </svg>
              </div>
              {dropDown && <ProjectDropDown />}
            </li>
          );
        }

        return (
          <li key={i} className="hover:text-main transition-all">
            <Link
              href={page.url}
              className={isActive ? "border-b-2 border-[#d6b210]" : ""}
            >
              {page.text}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default PagesLinks;
