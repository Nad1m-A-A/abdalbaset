import { useState } from "react";
import NavMenu from "./NavMenu";

function ResponsivePagesLinks() {
  const [navVisible, setNavVisible] = useState(false);
  const menuItemClick = () => {
    setNavVisible(false);
  };

  return (
    <>
      <svg
        onClick={() => setNavVisible(true)}
        className="responsive_icon fill-main"
        xmlns="http://www.w3.org/2000/svg"
        height="37"
        viewBox="0 -960 960 960"
        width="37"
      >
        <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
      </svg>
      {navVisible && <NavMenu navVisibility={navVisible} onItemClick={menuItemClick} />}
    </>
  );
}

export default ResponsivePagesLinks;
