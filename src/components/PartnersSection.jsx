import React from "react";

export const PartnersSection = () => {
  const logoListSng = [
    {
      imgPath: "/outschool/assets/partnersLogo/microsoft.svg",
      alt: "MicrosoftLogo.svg",
    },
    {
      imgPath: "/outschool/assets/partnersLogo/threehouse.svg",
      alt: "ThreehouseLogo.svg",
    },
    {
      imgPath: "/outschool/assets/partnersLogo/amazon.svg",
      alt: "AmazonLogo.svg",
    },
    {
      imgPath: "/outschool/assets/partnersLogo/slack.svg",
      alt: "SlackLogo.svg",
    },
    {
      imgPath: "/outschool/assets/partnersLogo/Google.svg",
      alt: "GoogleLogo.svg",
    },
  ];
  return (
    <section
      className="
    flex flex-col items-center justify-center mt-16  w-full
    text-4xl text-zinc-700  font-semibold 
    
    "
    >
      <h1
        className="
      text-[#464747] text-3xl
        text-center 
        md:text-4xl
      "
      >
        Our Company and Partners{" "}
      </h1>
      <div className="flex w-full justify-evenly  gap-[30px] mt-[40px] flex-wrap max-w-[1093px]">
        {logoListSng.map((logo, index) => (
          <img
            key={index}
            src={logo.imgPath}
            alt={logo.alt}
            className="
          w-30 mx-5
          md:w-37
          "
          />
        ))}
      </div>
    </section>
  );
};
