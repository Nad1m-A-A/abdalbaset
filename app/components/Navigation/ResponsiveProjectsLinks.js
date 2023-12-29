import { useState } from "react";
import Link from "next/link";
import ResponsiveDropDown from "./ResponsiveDropDown";
function ResponsiveProjectsLink({ onItemClick }) {
  const [dropDown, setDropDown] = useState(false);
  const hideDropDown = () => {
    setDropDown(false);
  };
  return (
    <li className="relative">
      <div className=" flex items-center gap-1">
        <Link href={"/projects"} onClick={() => onItemClick()}>Projects</Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="20"
          onClick={() => setDropDown((prev) => !prev)}
          className={`${dropDown ? "rotate-90" : ""} cursor-pointer fill-main`}
        >
          <path d="M400-280v-400l200 200-200 200Z" />
        </svg>
      </div>

      {dropDown && <ResponsiveDropDown hideDropDown={hideDropDown} />}
    </li>
  );
}

export default ResponsiveProjectsLink;
