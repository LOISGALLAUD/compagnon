import React from "react";
import { tabs } from "../constants";

const Nav = () => {
  return (
    <nav className="bg-cleandark z-30 shadow-md">
      {/* Content */}
      <div className="w-full z-30 py-5 px-10 flex flex-row md:justify-between justify-center bg-abyss">
        {/* Logo */}
        <div className="flex items-center gap-7 justify-center">
          <img src="/images/broche.png" alt="logo" width="60rem" />
          <p className="font-mhoko text-white text-6xl pt-3">Compagnon</p>
        </div>

        {/* Navigation */}
        <div className="2xl:w-1/3 md:w-1/2 hidden md:flex items-center">
          <ul className="text-white w-full flex justify-between font text-md">
            {tabs.map((tab, index) => (
              <li
                key={index}
                className="flex justify-center items-center gap-3"
              >
                <p className="text-cream font-jekom lg:text-2xl text-xl">
                  {tab}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
