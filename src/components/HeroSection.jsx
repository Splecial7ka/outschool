import React from "react";

export const HeroSection = ({ children }) => {
  return (
    <section className="bg-gradient-to-r from-violet-800 to-pink-400 rounded-br-[200px] pb-[112px]">
      {children}
      <section
        className="
        grid max-w-[1250px] pt-36 px-5 mx-auto  grid-cols-1 gap-[50px]
        md:grid-cols-2 md:gap-0
        "
      >
        <div>
          <h1
            className=" 
            font-bold leading-[50px] text-4xl  
            md:text-5xl md:leading-[80px] 
            lg:text-7xl
            "
          >
            Upgrade YOUR skills for better future
          </h1>
          <p
            className="
            font-medium 
            md:text-xl md:w-[300px]
            lg:text-xl lg:w-[527px]
            "
          >
            Lorem ipsum dolor sit amet consectetur. Erat in commodo in a. Sit
            interdum mi felis laoreet
            <br /> sagittis.
          </p>
          <div
            className="
            grid grid-cols-2 mt-[20px] gap-[10px]
            md:flex md:mt-[31px] md:gap-[20px]
            
            "
          >
            <button
              className="
              w-full font-semibold  h-11 bg-[#FF00C7] rounded-xl hover:bg-white hover:text-black transition-colors 
              md:w-44
              "
            >
              Check Courses
            </button>
            <button
              className="
              w-full font-medium h-11 rounded-xl borde hover:bg-white hover:text-black transition-colors
              md:w-34
              "
            >
              Learn more
            </button>
          </div>
        </div>
        <div>
          <img
            className="relative top-[-40px]"
            src="/outschool/assets/sally_small.webp"
            alt="sally"
            loading="eager"
          />
        </div>
      </section>
    </section>
  );
};
