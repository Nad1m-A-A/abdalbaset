import Link from "next/link";
import { useState } from "react";
import NavMenu from "./NavMenu";

function ResponsivePagesLinks() {
  const [navVisibility, setNavVisibility] = useState("hidden");
  const menuItemClick = (newClassName) => {
    setNavVisibility(newClassName);
  };

  return (
    <>
      <svg
        onClick={() => setNavVisibility("block")}
        className="responsive_icon"
        xmlns="http://www.w3.org/2000/svg"
        height="37"
        viewBox="0 -960 960 960"
        width="37"
      >
        <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
      </svg>
      <NavMenu navVisibility={navVisibility} onItemClick={menuItemClick} />
    </>
  );
}

export default ResponsivePagesLinks;
