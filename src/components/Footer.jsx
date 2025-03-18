import React from "react";

export const Footer = () => {
  return (
    <footer
      className="
       bg-zinc-900 mt-[90px] flex justify-center flex-col items-center
      sm:items-end
      lg:h-96
      "
    >
      <div
        className="
        grid  grid-cols-1 justify-center h-full pt-[65px] max-w-[1440px] w-[50%] gap-8 
        sm:grid-cols-2 sm:w-[80%]
        lg:grid-cols-[3.3fr_0.7fr_1.3fr_2fr] lg:w-full


        "
      >
        <div
          className="
          flex flex-col order-1 
          sm:items-start
          "
        >
          <div className="gap-[15px] flex flex-col">
            <img className="w-48" src="src/assets/logo.svg" alt="logoImg" />
            <p className="max-w-59 text-white text-sm font-normal">
              Lorem ipsum dolor sit amet consectetur. Magna integer enim vitae
              vulputate eu vitae tristique.
            </p>
          </div>
        </div>
        <div
          className="
          flex flex-col order-2 
          sm:items-start
          lg:order-2
          "
        >
          <h1 className="text-white text-xl font-medium">General</h1>
          <ul className="text-white text-base font-normal mt-[15px] space-y-[5px]">
            <li>About Us</li>
            <li>Pricing</li>
            <li>Contact Us</li>
            <li>Courses</li>
          </ul>
        </div>
        <div
          className="
          flex flex-col  order-3 
          sm:items-start sm:text-start
          "
        >
          <h1 className="text-white text-xl font-medium">Policies</h1>
          <ul className="text-white text-base font-normal mt-[15px] space-y-[5px]">
            <li>Security safeguards</li>
            <li>Terms of service</li>
            <li>Privacy</li>
            <li>Accessibility</li>
          </ul>
        </div>
        <div
          className="
          flex flex-col order-4
          sm:items-start sm:text-start sm:order-1
          lg:order-4
          "
        >
          <h1 className="text-white text-xl font-medium">Get in touch</h1>
          <p className="mt-[15px]  text-white text-sm max-w-[233px]">
            Follow us on social media and stay updated with the latest
            information about our services
          </p>
          <div className="flex gap-4 items-center mt-[19px]">
            <div className="w-8 h-8 bg-zinc-300 rounded-full flex items-center justify-center">
              <img
                className="w-8 h-8"
                src="src\assets\footer\facebook.svg"
                alt="facebook"
              />
            </div>
            <div className="w-8 h-8 bg-zinc-300 rounded-full flex items-center justify-center">
              <img
                className="w-6 h-6"
                src=" src\assets\footer\twitter.svg "
                alt="twitter"
              />
            </div>
            <div className="w-8 h-8 bg-zinc-300 rounded-full flex items-center justify-center">
              <img
                className="w-6 h-6"
                src="src\assets\footer\instagramm.svg"
                alt="instagramm"
              />
            </div>
            <div className="w-8 h-8 bg-zinc-300 rounded-full flex items-center justify-center">
              <img
                className="w-8 h-8"
                src="src\assets\footer\youtube.svg"
                alt="youtube"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex mb-[50px] mt-[70px] gap-[2px] self-center ">
        <img src="src\assets\footer\mark.svg" alt="mark.svg" />
        <p className="text-zinc-400 text-xs font-normal">
          2022 - @OUTSCHOOL all right deserved
        </p>
      </div>
    </footer>
  );
};
