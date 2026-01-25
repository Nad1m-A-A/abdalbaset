"use client";
import Link from "next/link";
import Phone from "./contact/Phone";
import Email from "./contact/Email";
import Location from "./contact/Location";

function Footer() {
  const currentYear = new Date().getFullYear();
  const pages = [
    { text: "Home", url: "/" },
    { text: "Projects", url: "/projects" },
    { text: "Journey", url: "/journey" },
    { text: "Services", url: "/services" },
    { text: "Contact", url: "/contact" },
  ];

  const contactInfo = {
    location: "Dubai - Deira",
    phoneNumber: "+971-50-502-5334",
    email: "contact@designerab.com",
  };

  return (
    <div className="text-xs p-5 pt-20 lg:text-sm lg:pl-20 border-t-2 border-dark/20">
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-2xl gap-8 mb-6">
        {/* Pages Links Column */}
        <div>
          <h3 className="font-bold mb-3 text-dark">Pages</h3>
          <ul className="flex flex-col gap-2">
            {pages.map((page, i) => (
              <li key={i}>
                <Link
                  href={page.url}
                  className="hover:text-main transition-all duration-300"
                >
                  {page.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info Column */}
        <div>
          <h3 className="font-bold mb-3 text-dark">Contact</h3>
          <ul className="flex flex-col gap-2">
            <li>
              <Location location={contactInfo.location} />
            </li>
            <li>
              <Phone phoneNumber={contactInfo.phoneNumber} />
            </li>
            <li>
              <Email email={contactInfo.email} />
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center lg:text-left pt-4 border-t border-dark/20">
        <p>
          &copy; {currentYear}
          <Link
            target="_blank"
            href="https://nadimweb.com/"
            className="hover:text-main font-bold duration-300"
          >
            {" "} NADIMweb
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Footer;
