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

        <p className="w-1/2 text-center mb-14 text-2xl text-abyss font-jekom">
          Discover the team that will help you find a guide for your visit to
          Paris.
        </p>
      </div>

      {/* Team */}
      <div className="px-32 bg-abyss w-full">
        <div className="grid grid-cols-3 gap-20 py-20 mx-32 my-10 rounded-xl bg-white">
          {team.map((member, index) => (
            <div key={index} className="flex flex-col items-center gap-3">
              <img
                src={
                  member.image
                    ? member.image
                    : "https://lledogrupo.com/wp-content/uploads/2018/04/white-img.jpg"
                }
                alt={member.name}
                className="w-32 h-32 object-scale-down rounded-full"
              />
              <div className="w-5/6 text-center flex flex-col justify-center items-center">
                <h2 className="text-pond text-2xl font-jeko">{member.name}</h2>
                <p className="text-abyss text-xl text-center font-jeko">
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
