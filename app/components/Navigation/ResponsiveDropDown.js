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
    { text: "jewellery store", url: "/projects/jewellery_store" },
  ];
  return (
    <ul
      onClick={() => onItemClick()}
      className="w-[50vw] p-10 text-xl space-y-6 fade_in absolute top-full left-1/2 mt-4 -translate-x-1/2 bg-[#303636] text-white rounded-sm shadow-lg">
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
