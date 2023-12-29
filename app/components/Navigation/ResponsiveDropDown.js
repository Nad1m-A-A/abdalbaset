import Link from "next/link";
import React from "react";

function ResponsiveDropDown({hideDropDown}) {
  const projects = [
    { text: "villa", url: "/projects/villa" },
    { text: "resort", url: "/projects/resort" },
    { text: "saloon", url: "/projects/saloon" },
    { text: "terrace", url: "/projects/terrace" },
    { text: "hospital", url: "/projects/hospital" },
    { text: "apartment", url: "/projects/apartment" },
    { text: "plant store", url: "/projects/plant_store" },
    { text: "watch store", url: "/projects/watch_store" },
  ];
  return (
    <ul className="responsive_dropdown absolute top-8 bg-slate-200 grid grid-cols-4 gap-3 px-5 py-3 rounded-sm shadow-lg">
      {projects.map((project, i) => {
        return (
          <li key={i} onClick={hideDropDown}>
            <Link href={project.url}>{project.text}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export default ResponsiveDropDown;
