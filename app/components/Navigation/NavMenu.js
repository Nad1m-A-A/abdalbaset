import Link from "next/link";
import ResponsiveProjectsLink from "./ResponsiveProjectsLinks";

function NavMenu({ navVisibility, onItemClick }) {
  const pages = [
    { text: "Journey", url: "/journey" },
    { text: "Services", url: "/services" },
    { text: "Contact", url: "/contact" },
  ];
  return (
    <ul
      className={`fade_in flex justify-around items-center rounded-sm shadow-sm absolute top-0 left-0 bottom-0 right-0 bg-main border-gray-900 border-2 md:text-base responsive_text`}
    >
      <ResponsiveProjectsLink onItemClick={onItemClick}/>
      {pages.map((page, i) => {
        return (
          <li key={i} onClick={() => onItemClick()}>
            <Link href={page.url}>{page.text}</Link>
          </li>
        );
      })}
      <li onClick={() => onItemClick()}>
        <svg
          className="responsive_icon fill-main"
          xmlns="http://www.w3.org/2000/svg"
          height="32"
          viewBox="0 -960 960 960"
          width="32"
        >
          <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
        </svg>
      </li>
    </ul>
  );
}

export default NavMenu;
