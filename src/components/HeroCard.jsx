import React from "react";

const HeroCard = () => {
  return (
    <div className="rounded-3xl bg-white p-20 flex justify-between items-center gap-11">
      <div className="w-7/12">
        {/* Text */}
        <div className="flex flex-col font-jeko gap-5 text-pond">
          <h2 className="text-7xl">
            Book now your
            <br />
            <h1 className="font-mhoko text-9xl text-abyss py-3"> Compagnon </h1>
            to visit Paris <span className="font-bold">!</span>
          </h2>
          <p className="font-jekom text-xl text-abyss">
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
      <div className="w-5/12 rounded-lg">
        <img src="/images/tourist.png" alt="tourist" />
      </div>
    </div>
  );
};

export default HeroCard;
