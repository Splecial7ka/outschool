import React from "react";

export const NewsSection = () => {
  const newsCard = [
    {
      imgPath: "/outschool/assets/newsCards/web.svg",
      alt: "web.svg",
      title: "Web Development",
      content: "Lorem ipsum dolor sit amet consectetur. sit amet ",
      date: "20-12-2022",
      link: "#",
    },
    {
      imgPath: "/outschool/assets/newsCards/buisiness.svg",
      alt: "buisiness.svg",
      title: "Business",
      content: "Lorem ipsum dolor sit amet consectetur. sit amet ",
      date: "20-12-2022",
      link: "#",
    },
    {
      imgPath: "/outschool/assets/newsCards/Technology.svg",
      alt: "Technology.svg",
      title: "Technology",
      content: "Lorem ipsum dolor sit amet consectetur. sit amet ",
      date: "20-12-2022",
      link: "#",
    },
  ];
  return (
    <section className="mt-[120px] flex flex-col items-center pb-[-180px] ">
      <div className="bg-[url('/outschool/assets/newsBg.svg')]  h-[375px] bg-auto  w-full flex justify-center">
        <h1
          className="
        text-black text-4xl text-center font-semibold max-w-[400px]  leading-[35px] mt-[30px]
        md:5xl md:leading-[55px]
        "
        >
          Our Latest news & Article
        </h1>
      </div>
      <div
        className="
      flex justify-center gap-[25px] mt-[-180px] flex-wrap
      "
      >
        {newsCard.map((card, index) => (
          <div
            key={index}
            className="w-[313px]  bg-white rounded-xl shadow-[0px_0px_11px_0px_rgba(153,153,153,0.30)]"
          >
            <div>
              <img src={card.imgPath} alt={card.alt} />
              <div className="flex flex-col py-[16px] px-[20px]">
                <div className="flex gap-[5px]">
                  <img
                    src="/outschool/assets/newsCards/icon.svg"
                    alt="iconSvgImg"
                  />
                  <p className="text-neutral-500 text-sm font-medium">
                    {card.title}
                  </p>
                </div>
                <p className="text-black text-base font-semibold mt-[15px] max-w-[222px]">
                  {card.content}
                </p>
                <div className="flex justify-between mt-[20px] ">
                  <div className="flex gap-[5px]">
                    <img
                      src="/outschool/assets/newsCards/calendar.svg"
                      alt="calendarImg"
                    />
                    <p className=" text-zinc-500 text-sm font-medium font-['Montserrat']">
                      {card.date}
                    </p>
                  </div>

                  <a
                    href={card.link}
                    className="
                      flex gap-[5px]
                      text-violet-800 text-sm font-semibold font-['Montserrat'] relative
                      after:content-[''] after:absolute after:left-1/2
                      after:bottom-[-4px] after:bg-violet-800 after:h-[2px] after:w-0
                      after:transition-all after:duration-300 
                      hover:after:w-full hover:after:left-0
                      "
                  >
                    Read more
                    <img src="/outschool/assets/newsCards/arrow.svg" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
