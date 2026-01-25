"use client";
import Image from "next/image";
import Link from "next/link";
import PagesLinks from "./PagesLinks";
import ResponsivePagesLinks from "./ResponsivePagesLinks";
function Navigation() {
  return (
    <div className="min-w-fit border-b-2 pb-5 lg:border-r-2 lg:pr-10 lg:border-b-0 border-dark">
      <div className="sticky top-14 z-20 flex justify-between items-end lg:flex-col lg:gap-10 lg:items-baseline">
        <Link href={"/"}>
          {/* Visible on small screens */}
          <Image
            priority
            className="block lg:hidden"
            src={"/images/logo.png"}
            alt="AB-Designer"
            width={150} // Smaller width for mobile
            height={132} // Adjust height to maintain aspect ratio
          />
          {/* Visible on large screens */}
          <Image
            priority
            className="hidden lg:block hover:grayscale hover:scale-[.99] duration-300 transition-all"
            src={"/images/logo.png"}
            alt="AB-Designer"
            width={250} // Original width for desktop
            height={220} // Original height
          />
        </Link>

        <div className="lg:hidden">
          <ResponsivePagesLinks />
        </div>

        <div className="hidden lg:block">
          <PagesLinks />
        </div>
      </div>
    </div>
  );
}

export default Navigation;
