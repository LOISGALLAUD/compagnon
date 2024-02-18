import React from "react";
import { packs } from "../constants";

const Pricing = () => {
  return (
    <div>
      {/* headers */}
      <div className="xl:py-44 lg:py-32 py-14 flex flex-col items-center font-jeko bg-white relative">
        <h1 className="text-pond 2xl:text-7xl lg:text-5xl text-3xl pb-5 m-2">
          Ready to{" "}
          <span className="text-white font-mhoko 2xl:text-9xl lg:text-7xl text-6xl pl-4 lg:pr-8 pr-5 pt-4 bg-abyss">
            Dive in
          </span>
          <span className="font-bold"> ?</span>
        </h1>
        <p className="lg:text-3xl sm:text-xl text-md font-jekom text-pond text-center">
          We've got you covered. <br />
          Choose the plan that's right for you.
        </p>
        <img
          src="/images/couple.jpg"
          alt="couple"
          className="2xl:h-[300px] lg:h-[210px] md:h-[160px] md:block hidden object-cover rounded-3xl absolute left-0 top-1/2 transform -translate-y-1/2 mx-10"
        />
        <img
          src="/images/journey.jpg"
          alt="couple"
          className="2xl:h-[300px] lg:h-[210px] md:h-[160px] md:block hidden object-cover rounded-3xl absolute right-0 top-1/2 transform -translate-y-1/2 mx-10"
        />
      </div>

      <div className="relative">
        {/* Background image */}
        <img
          src="https://images.unsplash.com/photo-1583692329420-89b34d01b9ce?q=80&w=3873&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="object-cover w-full h-full absolute inset-0"
        />

        {/* Pricing */}
        <div className="z-10 flex flex-col justify-center items-center xl:py-40 md:py-24 py-6 relative">
          <div className="xl:flex xl:justify-between w-5/6 lg:grid-rows-3 grid grid-cols-1 gap-10 md:w-8/12">
            {packs.map((pack, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-between bg-white p-5 relative shadow-2xl xl:w-1/3"
              >
                {pack.title === "Deluxe" && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-fuchsia-400 flex justify-center items-center p-3">
                      <p className="text-white text-xl font-jeko">Popular</p>
                    </div>
                  </div>
                )}

                <div className="text-6xl flex flex-col justify-center items-center mt-5 md:mt-10">
                  <h3
                    className={`${pack.color} font-mhoko 2xl:text-8xl xl:text-7xl md:text-8xl text-6xl`}
                  >
                    {pack.title}
                  </h3>

                  <p className="text-abyss 2xl:text-4xl xl:text-3xl md:text-4xl text-2xl font-jekom italic">
                    {pack.title === "Signature"
                      ? pack.price
                      : `$ ${pack.price}`}
                  </p>
                </div>

                <div className="divide-y-2 divide-abyss text-center">
                  <ul className="text-abyss font-jekom mt-5 mx-4">
                    {pack.features.map((feature, index) => (
                      <li key={index}>
                        <p className="md:text-lg text-sm">• {feature}</p>
                      </li>
                    ))}
                  </ul>

                  <p className="text-abyss md:text-xl text-md font-jekom m-5 pt-5">
                    {pack.description}
                  </p>
                </div>

                <button
                  className={`bg-white border-2 lg:text-2xl text-lg border-abyss font-jekom lg:px-12 px-6 lg:py-5 py-2 ${pack.color}`}
                >
                  Choose plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
