import React from "react";
import { team } from "../constants";

const AboutUs = () => {
  return (
    <div className="flex flex-col justify-center items-center ">
      {/* Headers */}
      <div className="pt-16 flex flex-col items-center w-5/6">
        <h1 className="text-pond lg:text-7xl sm:text-5xl text-3xl font-jeko pb-5 text-center flex flex-col justify-center items-center">
          We welcome you to
          <span className="text-abyss font-mhoko lg:text-9xl text-6xl">
            {" "}
            Compagnon
          </span>
          <img
            src="/images/broche.png"
            alt="logo"
            className="lg:my-6 lg:w-[7rem] lg:h-[7rem] lg:inline-block object-cover w-[3rem] h-[3rem]"
          />
        </h1>

        <p className="md:w-1/2 w-full text-center mb-14 md:text-2xl text-lg text-abyss font-jekom">
          Discover the team that will help you find a guide for your visit to
          Paris.
        </p>
      </div>

      {/* Team */}
      <div
        className="px-5
      md:px-20
      lg:px-32 bg-abyss w-full"
      >
        <div className="grid md:grid-cols-3 grid-cols-2 gap-10 py-20 my-10 rounded-xl bg-white p-10">
          {team.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={
                  member.image
                    ? member.image
                    : "https://lledogrupo.com/wp-content/uploads/2018/04/white-img.jpg"
                }
                alt={member.name}
                className="
                w-32 h-32
                md:w-36 md:h-36
                lg:w-48 lg:h-48
                xl:w-52 xl:h-52
                object-scale-down md:rounded-full"
              />
              <div className="w-5/6 text-center flex flex-col justify-center items-center">
                <h4 className="text-pond xl:text-3xl lg:text-xl sm:text-sm font-jeko lg:pt-8 pt-2">
                  {member.name}
                </h4>
                <p className="text-abyss xl:text-2xl lg:text-lg sm:text-xs text-center font-jeko">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* horizontal line separator */}
      <div className="w-full h-[4px] bg-abyss"></div>
    </div>
  );
};

export default AboutUs;
