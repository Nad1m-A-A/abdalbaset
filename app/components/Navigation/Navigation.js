"use client";
import Image from "next/image";
import Link from "next/link";
import PagesLinks from "./PagesLinks";
import ResponsivePagesLinks from "./ResponsivePagesLinks";
function Navigation() {
  return (
    <div className="min-w-fit border-b-2 pb-5 lg:border-r-2 lg:pr-10 lg:border-b-0 border-dark">
      <div className="sticky top-14 flex justify-between items-end gap-10 px-2 lg:px-0 lg:flex-col lg:gap-20 lg:items-baseline">
        <div className="w-1/3 lg:w-auto">
          <Link href={"/"}>
            <Image
              priority
              src={"/images/2.png"}
              placeholder="blur"
              blurDataURL="/images/low_logo.webp"
              alt="Abd-Albaset Architect"
              width={250}
              height={220}
            />
          </Link>
        </div>

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
