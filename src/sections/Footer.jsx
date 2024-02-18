import React from "react";

const Footer = () => {
  return (
    <footer className="bg-abyss text-white font-jekom items-center justify-between">
      {/* Contacts */}
      <div className="flex flex-col justify-center items-center py-5">
        <h2 className="text-white text-lg text-center">
          Got questions ? We've got answers !
          <br />
          Drop us a line and we'll get back to you ASAP.
        </h2>
        <p className="text-white text-sm font-jekom pt-3">
          contact@compagnonparis.com
        </p>
      </div>

      {/* White line separator */}
      <div className="w-full h-[1px] bg-white" />

      {/* Footer content */}
      <div className="flex justify-center items-center py-1">
        <span className="text-center items-center font-thin font-jekom text-xs py-2">
          2024 Loïs Gallaud <br />
          Compagnon ® All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
