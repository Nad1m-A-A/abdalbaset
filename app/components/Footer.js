import Link from "next/link";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div
      className={`text-xs text-center p-5 lg:text-sm lg:text-left lg:pl-20`}
    >
      <p>
        &copy; {currentYear}
        <Link target="_blank" href="https://nadimweb.com/" className="hover:text-main">
          {" "} NADIMweb
        </Link>
      </p>
    </div>
  );
}

export default Footer;
