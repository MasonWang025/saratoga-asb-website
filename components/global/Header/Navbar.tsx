import React, { useRef, useState, useEffect } from "react";
import routes from "../../../data/routes";
import { useRouter } from "next/router";
import NavItem from "./NavItem";
import MobileNavItem from "./MobileNavItem";

import { faPlus, faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Link from "next/link";

export default function Navbar() {
  const mobileMenu = useRef(null);
  const [navOpen, setNavOpen] = useState(false); // for mobile

  const handleClick = (e) => {
    if (e.target.classList.contains("toggle")) return;
    if (!mobileMenu.current.contains(e.target)) {
      setNavOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const currPath = useRouter().pathname;

  return (
    <nav className="z-40 w-screen bg-white shadow fixed">
      <div className="container">
        <div className="flex justify-between h-16">
          <Link href="/">
            <a className="flex-shrink-0 flex items-center">
              <img
                className="block h-9 w-auto"
                src="/img/logos/logo.png"
                alt="toga logo"
              />
              <span className="font-bold text-xl pl-1">Saratoga ASB</span>
            </a>
          </Link>
          <div className="flex">
            <div className="-ml-2 mr-2 flex items-center lg:hidden">
              {/* Mobile menu button */}
              <button
                className="toggle inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 "
                aria-expanded="false"
                onClick={() => setNavOpen(!navOpen)}
              >
                <span className="sr-only">Open main menu</span>
                <FontAwesomeIcon
                  icon={faBars}
                  className={`${navOpen ? "hidden" : "block"} toggle h-6 w-6`}
                />
                <FontAwesomeIcon
                  icon={faTimes}
                  className={`${navOpen ? "block" : "hidden"} toggle h-6 w-6`}
                />
              </button>
            </div>

            <div className="hidden lg:ml-6 lg:flex lg:space-x-6 xl:space-x-8">
              {routes.map((r) => (
                <NavItem
                  key={r.name}
                  name={r.name}
                  href={r.href}
                  currPath={currPath}
                  dropRoutes={r.dropRoutes}
                  active={
                    r.dropRoutes
                      ? currPath.startsWith(r.href)
                      : r.href == currPath
                  }
                />
              ))}
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Link href="/clubs/register">
                    <a
                      href="https://docs.google.com/document/d/1g5c-Fni-kuEM12B4XbCuNENkY_Hlt5B6QWauKkmOGHY/edit"
                      target="_blank"
                      rel="noreferrer"
                      type="button"
                      className="trans-300 relative inline-flex items-center px-4 py-2 border border-transparent text-md font-medium rounded-md text-white bg-toga-secondary-bright shadow-sm hover:bg-toga-secondary-main"
                    >
                      <FontAwesomeIcon
                        icon={faPlus}
                        className="-ml-1 mr-2 h-3 w-3"
                      />
                      <span>Club Application</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${navOpen ? "block" : "hidden"} lg:hidden`}>
        <div ref={mobileMenu} className="pt-2 pb-3 space-y-1 shadow-lg">
          {routes.map((r) => (
            <MobileNavItem
              key={r.name}
              name={r.name}
              href={r.href}
              dropRoutes={r.dropRoutes}
              currPath={currPath}
              active={
                r.dropRoutes ? currPath.startsWith(r.href) : r.href == currPath
              }
            />
          ))}
          <div className="flex items-center mx-4 py-1">
            <Link href="/clubs/register">
              <a className="justify-center w-full inline-flex items-center px-4 py-2 border border-transparent text-md font-medium rounded-md text-white bg-toga-primary-main shadow-sm hover:bg-toga-primary-darker">
                <FontAwesomeIcon icon={faPlus} className="-ml-1 mr-2 h-3 w-3" />
                <span>Register a Club</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
