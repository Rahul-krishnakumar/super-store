import React from "react";

import { NavLink } from "react-router-dom";

const SideBar = ({ links, open }) => {
  return (
    <div>
      <nav
        className="md:hidden w-2/3 h-full left-0 top-16 fixed z-30 bg-gray-900 text-gray-200 px-1 translate-x-1"
        onClick={open}
      >
        <ul className="flex flex-col mt-5">
          {links.map((link) => {
            return (
              <li
                key={Object.entries(link)[1][1]}
                className="px-4 mb-3 text-xl"
              >
                <NavLink
                  exact
                  to={`/${Object.entries(link)[0][0].toString().toLowerCase()}`}
                  activeClassName="font-bold text-white border-2 rounded-sm p-1 -ml-1 border-white"
                >
                  {Object.entries(link)[0][0]}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
      <div
        className="md:hidden fixed top-0 left-0 z-10 w-full h-full bg-black opacity-50"
        onClick={open}
      />
    </div>
  );
};

export default SideBar;
