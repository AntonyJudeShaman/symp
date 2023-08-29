import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import logo from ".//licet-logo-60b9776a.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faBars } from "@fortawesome/free-solid-svg-icons";

interface NavbarProps {
  links: { href: string; label: string }[];
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className="flex border-b-2 border-sky-400   flex-wrap p-2 navbar bg-gradient-to-r from-zinc-900 via-indigo-950 to-zinc-900"
      style={{ maxWidth: "100%" }}
    >
      <div className="  w-full  mx-auto  d-block">
        <div className="flex items-center  mx-auto d-block">
          <div className="flex-shrink-0   mx-auto d-block">
            <Link href="">
              <Image
                src={logo}
                alt="Logo"
                className="logo-image mx-auto d-block"
                style={{ maxWidth: "80%" }}
              />
            </Link>
            
          </div>
          {/* <div className="hidden md:block  mx-auto d-block">
            <div className="text-end text-right flex float-end">
              {links.map((link) => (
                <Link key={link.href} href={link.href}>
                  <p className="hov under tiltneon size text-end float-end">{link.label}</p>
                </Link>
              ))}
            </div>
          </div> */}

          <div className="-mr-2 flex md:hidden">
            <button
              className="hamburger-icon -mt-4 mr-3 text-end float-end"
              onClick={toggleMobileMenu}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </div>
      </div>
      <div className={`${isMobileMenuOpen ? "block" : "hidden"} md:hidden`}>
        <div className="pt-2 pb-3">
          <div className="flex flex-col">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                <p className="text-green-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium">
                  {link.label}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
