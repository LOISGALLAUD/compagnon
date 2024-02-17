import React from "react";

const HeroCard = () => {
  return (
    <div className="rounded-3xl bg-white lg:p-20 p-10 flex justify-between items-center gap-11 h-5/6">
      <div className="2xl:w-7/12 w-full">
        {/* Text */}
        <div className="flex flex-col font-jeko gap-5 text-pond lg:text-start text-center">
          <h2 className="lg:text-7xl text-3xl">
            Book now your
            <br />
            <h1 className="font-mhoko lg:text-9xl md:text-6xl text-4xl text-abyss py-3">
              {" "}
              Compagnon{" "}
            </h1>
            to visit Paris <span className="font-bold">!</span>
          </h2>
          <p className="font-jekom text-xl text-abyss xl:block hidden">
            Discover Paris with a local guide, passionate about his city and
            willing to share his knowledge and love for "The City of Light."
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-row gap-5 pt-12">
          <button className="bg-pond text-white font-jeko text-2xl py-3 rounded-lg p-3">
            Book a visit
          </button>
          <button className="bg-abyss text-white font-jeko text-2xl py-3 rounded-lg p-3">
            Learn more about us
            <img
              src="/images/broche.png"
              alt="logo"
              className="w-[3rem] h-[3rem] inline-block object-cover ml-3"
            />
          </button>
        </div>
      </div>

      {/* Illustration */}
      <div className="w-5/12 rounded-lg hidden 2xl:block">
        <img src="/images/tourist.png" alt="tourist" />
      </div>
    </div>
  );
};

export default HeroCard;
