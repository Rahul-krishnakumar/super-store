import React from "react";

import { NavLink } from "react-router-dom";

import Logo from "../Logo/Logo";

const Navbar = ({ links }) => {
  return (
    <nav className="flex justify-between items-center px-5 h-16 bg-blue-900 text-blue-200">
      <Logo />
      <ul className="flex items-center">
        {links.map((link) => {
          return (
            <li key={Math.random()} className="px-4 m-0">
              <NavLink
                exact
                to={Object.values(link).toString()}
                activeClassName="font-bold text-white"
              >
                {Object.keys(link)}
              </NavLink>
            </li>
          );
        })}
        {/* <li className="px-4 m-0 ">
          <NavLink exact to="/" activeClassName="font-bold text-white">
            Home
          </NavLink>
        </li>
        <li className="px-4 h-full flex items-center">
          <NavLink
            to="/deals"
            className="block w-full"
            activeClassName="h-full"
          >
            Deals
          </NavLink>
        </li>
        <li className="px-4 h-full flex items-center">
          <NavLink to="/cart" className="block w-full" activeClassName="h-full">
            Cart
          </NavLink>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
