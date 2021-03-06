import React, { useState } from "react";

import { NavLink } from "react-router-dom";

import Logo from "../Logo/Logo";
import SideBar from "./SideBar";

const Navbar = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openSideBar = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div>
      <nav className="fixed top-0 left-0 z-20 w-full flex justify-between items-center px-5 h-16 bg-gray-900 text-gray-200">
        <NavLink to="/home">
          <Logo />
        </NavLink>
        <div className="order-first md:order-1 ml-1">
          <button className="md:hidden" onClick={openSideBar}>
            <svg
              className="fill-current text-gray-200 cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <title>menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
          <ul className="hidden md:flex md:items-center">
            {links.map((link) => {
              return (
                <li key={Object.entries(link)[1][1]} className="px-4 m-0">
                  <NavLink
                    exact
                    to={`/${Object.entries(link)[0][0]
                      .toString()
                      .toLowerCase()}`}
                    activeClassName="font-bold text-white border-b-2 pb-1.5 border-white"
                  >
                    {Object.entries(link)[0][0]}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
      {isOpen ? <SideBar links={links} open={openSideBar} /> : null}
    </div>
  );
};

export default Navbar;
