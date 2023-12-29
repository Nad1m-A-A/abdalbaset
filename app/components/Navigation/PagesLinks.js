import Link from "next/link";
import ProjectsLink from "./ProjectsLink";

function PagesLinks() {
  const pages = [
    { text: "Projects", url: "/projects" },
    { text: "Journey", url: "/journey" },
    { text: "Services", url: "/services" },
    { text: "Contact", url: "/contact" },
  ];
  return (
    <ul className="font-light flex flex-col gap-3 text-lg x">
      {pages.map((page, i) => {
        if (i === 0) return <ProjectsLink key={i}/>;
        return (
          <li key={i} className="hover:text-light transition-all">
            <Link href={page.url}>{page.text}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export default PagesLinks;
