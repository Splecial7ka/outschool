import React from "react";

export const ServicesSection = () => {
  const serviceBlocks = [
    {
      imgPath: "src/assets/serviceIcons/lifeTime.svg",
      alt: "lifeTime.svg",
      titile: "Life Time Access",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet in porttitor in sit sem eu, nunc diam. Quis nisi, ",
    },
    {
      imgPath: "src/assets/serviceIcons/onlineClasses.svg",
      alt: "onlineClasses.svg",
      titile: "Online Classes",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet in porttitor in sit sem eu, nunc diam. Quis nisi, ",
    },
    {
      imgPath: "src/assets/serviceIcons/certificate.svg",
      alt: "certificate.svg",
      titile: "Get Certificate",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet in porttitor in sit sem eu, nunc diam. Quis nisi, ",
    },
    {
      imgPath: "src/assets/serviceIcons/trainers.svg",
      alt: "trainers.svg",
      titile: "Expert Trainers",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet in porttitor in sit sem eu, nunc diam. Quis nisi, ",
    },
    {
      imgPath: "src/assets/serviceIcons/result.svg",
      alt: "result.svg",
      titile: "Great Result",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet in porttitor in sit sem eu, nunc diam. Quis nisi, ",
    },
    {
      imgPath: "src/assets/serviceIcons/price.svg",
      alt: "price.svg",
      titile: "Best Price",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet in porttitor in sit sem eu, nunc diam. Quis nisi, ",
    },
  ];
  return (
    <section className="mt-30 flex flex-col items-center ">
      <h1
        className="
        text-black text-3xl font-semibold px-5 
        md:text-5xl
        "
      >
        Our Features and Services
      </h1>
      <p
        className="
        text-neutral-500 text-base font-normal max-w-[673px] mt-[10px] text- px-5
        "
      >
        Lorem ipsum dolor sit amet consectetur. Euismod diam phasellus quis
        aliquet purus sem ornare mollis vulputate. Sapien purus faucibus massa
        pharetra.{" "}
      </p>
      <div
        className="
        grid grid-cols-1 mt-[60px]
        md:grid-cols-2
        lg:grid-cols-3
        "
      >
        {serviceBlocks.map((block, index) => (
          <div
            key={index}
            className="
              h-[243px] w-[340px] flex flex-col p-[25px] pr-[48px] 
              
              "
          >
            <img className="w-8 h-8" src={block.imgPath} alt={block.alt} />
            <h1
              className="
              text-black text-3xl font-medium mt-[8px]
              lg:text-xl
              "
            >
              {block.titile}
            </h1>
            <p className="text-justify justify-start text-neutral-500 text-base font-normal mt-[15px]">
              {block.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
