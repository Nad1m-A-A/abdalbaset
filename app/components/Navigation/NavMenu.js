import Link from "next/link";
import ResponsiveProjectsLink from "./ResponsiveProjectsLinks";

function NavMenu({ onItemClick }) {
  const pages = [
    { text: "Home", url: "/" },
    { text: "About", url: "/about" },
    { text: "Journey", url: "/journey" },
    { text: "Services", url: "/services" },
    { text: "Contact", url: "/contact" },
  ];
  return (
    <ul
      className={`fade_in flex flex-col justify-center  gap-8 rounded-sm shadow-sm fixed top-0 left-0 bottom-0 right-0 bg-main border-gray-900 border-2 md:text-base responsive_text z-50 `}
    >
      <svg
        onClick={() => onItemClick()}
        className="responsive_icon fill-main absolute top-16 right-5"
        xmlns="http://www.w3.org/2000/svg"
        height="32"
        viewBox="0 -960 960 960"
        width="32"
      >
        <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
      </svg>
      <div className="space-y-10 w-fit mx-auto">
        <ResponsiveProjectsLink onItemClick={onItemClick} />
        {pages.map((page, i) => {
          return (
            <li className="text-2xl font-bold" key={i} onClick={() => onItemClick()}>
              <Link href={page.url}>{page.text}</Link>
            </li>
          );
        })}
      </div>
    </ul>
  );
}

export default NavMenu;
