import React from "react";
import { tabs } from "../constants";

const Nav = () => {
  return (
    <nav className="bg-cleandark z-30 shadow-md">
      {/* Content */}
      <div className="w-full z-30 md:py-5 py-2 md:px-10 px-2 flex justify-between bg-abyss">
        {/* Logo */}
        <div className="flex items-center lg:gap-7 gap-2 justify-center">
          <img
            src="/images/broche.png"
            alt="logo"
            className="w-8 h-8 md:w-16 md:h-16"
          />

          {/* Title */}
          <p className="font-mhoko text-white md:text-6xl text-3xl pt-2">
            Compagnon
          </p>
        </div>

        {/* Hamburger */}
        <div className="flex md:hidden items-center px-2">
          <img
            src="/images/hamburger.png"
            alt="hamburger"
            className="w-8 h-8"
          />
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
