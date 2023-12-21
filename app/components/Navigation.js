"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
function Navigation() {
  const [listClass, setListClass] = useState("hidden");

  return (
    <div className="min-w-fit border-b-2 pb-5 lg:border-r-2 lg:pr-10 lg:border-b-0">
      <div className="sticky top-14 flex justify-between items-end gap-10 px-2 lg:px-0 lg:flex-col lg:gap-20 lg:items-baseline">
        <div className="w-1/3 lg:w-auto">
          <Link href={"/"}>
            <Image
              priority
              src={"/images/logo1-nobg.png"}
              alt="Abd-Albaset Architect"
              width={250}
              height={220}
              sizes="(max-width: 600px) 50vw, (max-width: 1200px) 30vw, 30vw"
            />
          </Link>
        </div>

        <div className="lg:hidden" onClick={() => setListClass("block")}>
          <svg
            className="responsive_icon"
            xmlns="http://www.w3.org/2000/svg"
            height="37"
            viewBox="0 -960 960 960"
            width="37"
          >
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        </div>

        <div className={`${listClass} lg:hidden`}>
          <ul className="flex justify-around rounded-sm shadow-md absolute top-0 left-0 bottom-0 right-0 bg-gray-200 font-light md:text-base responsive_text">
            <li className="nav_li_style" onClick={() => setListClass("hidden")}>
              <Link href={"/projects"}>Projects</Link>
            </li>
            <li className="nav_li_style" onClick={() => setListClass("hidden")}>
              <Link href={"/journey"}>Journey</Link>
            </li>
            <li className="nav_li_style" onClick={() => setListClass("hidden")}>
              <Link href={"/services"}>Services</Link>
            </li>
            <li className="nav_li_style" onClick={() => setListClass("hidden")}>
              <Link href={"/contact"}>Contact</Link>
            </li>
            <li className="nav_li_style" onClick={() => setListClass("hidden")}>
              <svg
                className="responsive_icon"
                xmlns="http://www.w3.org/2000/svg"
                height="32"
                viewBox="0 -960 960 960"
                width="32"
              >
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
            </li>
          </ul>
        </div>

        <div className="hidden lg:block">
          <ul className="inline-block pl-2 text-lg font-light">
            <li className="nav_li_style ">
              <div className="w-7 li_line bg-black"></div>
              <Link href={"/projects"}>Projects</Link>
            </li>
            <li className="nav_li_style ">
              <div className="w-10 li_line bg-blue-500"></div>
              <Link href={"/journey"}>Journey</Link>
            </li>
            <li className="nav_li_style ">
              <div className="w-7 li_line bg-red-500"></div>
              <Link href={"/services"}>Services</Link>
            </li>
            <li className="nav_li_style ">
              <div className="w-10 li_line bg-green-500"></div>
              <Link href={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
