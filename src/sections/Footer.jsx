import React from "react";

const Footer = () => {
  return (
    <footer className="bg-abyss text-white font-jekom items-center justify-between">
      {/* Contacts */}
      <div className="flex flex-col justify-center items-center py-5">
        <h2 className="text-white text-4xl font-jeko text-center">
          Got questions <span className="font-bold">?</span> We've got answers
          <span className="font-bold"> !</span> <br />
          Drop us a line and we'll get back to you ASAP.
        </h2>
        <p className="text-white text-xl font-jekom pt-5">
          contact@compagnonparis.com
        </p>
      </div>

      {/* White line separator */}
      <div className="w-full h-[1px] bg-white" />

      {/* Footer content */}
      <div className="flex justify-center gap-2 items-center py-5">
        <span className="text-center items-center gap-3 font-thin font-jekom">
          2024 Loïs Gallaud <br />
          Compagnon ® All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
