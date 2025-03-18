import React from "react";

export const GirlsSection = () => {
  return (
    <section
      className="
      grid 
      grid-cols-1 mt-[40px] max-w-[1440px] items-center mx-auto gap-y-[80px] place-items-center h-auto w-full px-5
      md:grid-cols-2 md:gap-x-[113px] md:gap-y-[120px] md:mt-[120px]
      "
    >
      <div className="flex  justify-end items-center order-1 md:order-1">
        <img src="/outschool/assets/girls/girlOne.svg" alt="girlOne.svg" />
      </div>
      <div className="flex flex-col gap-[20px]  justify-start order-2 md:order-2">
        <h1
          className="
          text-black text-4xl font-semibold
          md:text-5xl
          "
        >
          Best Platform to grow
        </h1>
        <p className="text-justify justify-start text-neutral-500 text-xl font-normal max-w-[555px]">
          Lorem ipsum dolor sit amet consectetur. Maecenas ac elementum lacus
          vel vitae sed nisi aliquam aliquet. Vel adipiscing placerat tellus
          faucibus diam mauris ipsum vitae. Justo adipiscing integer dictum
          tortor viverra vel .
        </p>
        <button
          className="
          justify-center text-white text-lg font-medium w-44 h-12 bg-violet-400 rounded-xl
          hover:bg-white hover:text-violet-400 hover:border-violet-400 hover:border-3
          "
        >
          Learn more
        </button>
      </div>
      <div
        className="
        flex flex-col gap-[20px] items-end order-4
        md:order-3
        "
      >
        <h1 className="text-black text-5xl font-semibold">
          24/7 Students Support
        </h1>
        <p className="text-justify justify-start text-neutral-500 text-xl font-normal max-w-[555px]">
          Lorem ipsum dolor sit amet consectetur. Maecenas ac elementum lacus
          vel vitae sed nisi aliquam aliquet. Vel adipiscing placerat tellus
          faucibus diam mauris ipsum vitae. Justo adipiscing integer dictum
          tortor viverra vel .
        </p>
        <button
          className="
          justify-center text-white text-lg font-medium w-44 h-12 bg-violet-400 rounded-xl
          hover:bg-white hover:text-violet-400 hover:border-violet-400 hover:border-3
          "
        >
          Learn more
        </button>
      </div>
      <div
        className="
        flex  justify-end items-center order-3
        md:order-4
        "
      >
        <img src="/outschool/assets/girls/girlTwo.svg" alt="girlOne.svg" />
      </div>
    </section>
  );
};
