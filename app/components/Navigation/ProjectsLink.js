import { useState } from "react";
import ProjectDropDown from "./ProjectDropDown";
import Link from "next/link";
function ProjectsLink() {
  const [dropDown, setDropDown] = useState(false);
  return (
    <li>
      <div className="flex items-center gap-1">
        <Link className="hover:text-light transition-all" href={"/projects"}>Projects</Link>
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

      {dropDown && <ProjectDropDown />}
    </li>
  );
}

export default ProjectsLink;
