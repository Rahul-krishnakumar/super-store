import React from "react";

import { NavLink } from "react-router-dom";

import Logo from "../Logo/Logo";

const Navbar = ({ links }) => {
  return (
    <nav className="flex justify-between items-center px-5 h-16 bg-blue-900 text-blue-200">
      <NavLink to="/">
        <Logo />
      </NavLink>
      <ul className="flex items-center">
        {links.map((link) => {
          return (
            <li key={Object.entries(link)[1][1]} className="px-4 m-0">
              <NavLink
                exact
                to={Object.entries(link)[0][0].toString()}
                activeClassName="font-bold text-white"
              >
                {Object.entries(link)[0][0]}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
