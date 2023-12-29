import Link from "next/link";

function ProjectsDropDown() {
  const projects = [
    { text: "villa", url: "/projects/villa" },
    { text: "resort", url: "/projects/resort" },
    { text: "saloon", url: "/projects/saloon" },
    { text: "terrace", url: "/projects/terrace" },
    { text: "hospital", url: "/projects/hospital" },
    { text: "apartment", url: "/projects/apartment" },
    { text: "plant store", url: "/projects/plant_store" },
    { text: "watch store", url: "/projects/watch_store" },
    { text: "jewellery store", url: "/projects/jewellery_store" },
  ];
  return (
    <ul>
      {projects.map((project, i) => {
        return (
          <li key={i} className="w-fit hover:text-main transition-all">-
            <Link className="border-b-2 pl-1 hover:border-b-0" href={project.url}>{project.text}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export default ProjectsDropDown;
