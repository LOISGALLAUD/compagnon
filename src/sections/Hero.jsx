import React from "react";
import HeroCard from "../components/HeroCard";

const Hero = () => {
  return (
    <div className="min-h-screen bg-sand flex flex-col items-center justify-center relative">
      {/* Background */}
      <img
        // src="https://images.unsplash.com/photo-1680995853565-f1921cda46e2?q=80&w=3515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        src="https://images.unsplash.com/photo-1604231520931-ae41b3161595?q=80&w=2812&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        // src="https://images.unsplash.com/photo-1661999147461-b9cd9851743c?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        // src="https://images.unsplash.com/photo-1560425946-7d5830202765?q=80&w=3571&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        // src="https://images.unsplash.com/photo-1601988628551-6fd46e168930?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="triomphe"
        className="absolute inset-0 object-cover lg:w-full lg:h-full w-full h-full z-0"
      />

      {/* Content */}
      <div className="z-10 sm:p-5 sm:w-4/6 w-11/12 h-4/6">
        <HeroCard />
      </div>
    </div>
  );
};

export default Hero;
