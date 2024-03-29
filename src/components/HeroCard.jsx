import React from "react";

const HeroCard = () => {
  return (
    <div className="rounded-3xl bg-white lg:p-20 p-10 flex justify-between items-center gap-11 h-5/6">
      <div className="2xl:w-7/12 w-full flex flex-col justify-center items-center">
        {/* Text */}
        <div className="flex flex-col font-jeko text-pond sm:text-center text-start gap-10">
          <h2 className="lg:text-7xl sm:text-5xl text-4xl">
            Book now your
            <br />
            <h1 className="font-mhoko lg:text-9xl text-7xl text-abyss py-3">
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
        <div className="flex flex-row justify-center lg:gap-5 gap-2 lg:pt-12 pt-6">
          <button className="bg-pond text-white text-center font-jekom lg:text-2xl sm:text-lg text-xs lg:py-3 py-1 rounded-lg p-3">
            Book a visit
          </button>
          <button className="bg-abyss text-white text-center font-jekom lg:text-2xl sm:text-lg text-xs lg:py-3 py-1 rounded-lg p-3">
            Learn more about us
            <img
              src="/images/broche.png"
              alt="logo"
              className="lg:w-[3rem] lg:h-[3rem] w-[2rem] h-[2rem] lg:inline-block object-cover ml-3 hidden"
            />
          </button>
        </div>
      </div>

      {/* Illustration */}
      <div className="w-1/2 rounded-lg hidden 2xl:block ">
        <img src="/images/tourist.png" alt="tourist" />
      </div>
    </div>
  );
};

export default HeroCard;
