import React from "react";

export const EmailSection = () => {
  return (
    <section
      className=" 
      grid grid-cols-1 place-items-center mt-[40px] gap-x-[96px] 
      lg:grid-cols-2 lg:mt-[121px]
      px-5
      "
    >
      <img
        className=" 
          lg:place-self-end
          
          "
        src="/outschool/assets/EmailImg.svg "
        alt=""
      />
      <div>
        <div className="gap-[5px]">
          <h1
            className=" 
            text-violet-800 text-3xl font-medium h-[62px]
            sm:text-4xl
            lg:text-3xl
            xl:text-4xl
            "
          >
            Subscribe to our newsletter
          </h1>
          <p className=" text-neutral-500 text-base font-normal max-w-[471px]">
            Lorem ipsum dolor sit amet consectetur. Velit enim est urna est
            massa cras. Sed varius convallis netus aliquet duis ut.
          </p>
        </div>
        <div className="relative max-w-[500px] mt-[60px]">
          <input
            className="h-12 w-full bg-white rounded-xl shadow-[0px_1px_15px_0px_rgba(0,0,0,0.15)] 
               text-violet-800 text-xs font-medium pr-40 px-4 outline-none
               focus:ring-2 focus:ring-violet-800 transition duration-300
               "
            type="text"
            placeholder="Enter your mail"
          />
          <button
            className="
            absolute right-0 top-1/2 transform -translate-y-1/2 w-[160px] h-[50px]
            bg-violet-800 text-white rounded-xl
            hover:text-violet-800 hover:bg-white hover:border-2 hover:border-violet-800 transition duration-300  
               "
          >
            Join Now
          </button>
        </div>
      </div>
    </section>
  );
};
