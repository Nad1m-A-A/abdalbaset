import Link from "next/link";

function ResponsiveDropDown({ onItemClick, hideDropDown }) {
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
    <ul
      onClick={() => onItemClick()}
      className="w-[50vw] p-10 space-y-6 fade_in absolute top-8 bg-gray-900 text-white gap-3 rounded-sm shadow-lg">
      {projects.map((project, i) => {
        return (
          <li key={i} onClick={() => onItemClick()}>
            <Link href={project.url}>{project.text}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export default ResponsiveDropDown;
