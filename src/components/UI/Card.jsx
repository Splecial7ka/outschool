import React from "react";

export const Card = ({ listOfCards = [] }) => {
  return (
    <div
      className="
      mt-[61px] grid-cols-1 grid gap-y-[50px] gap-x-5 self-center
      md:grid-cols-2
      lg:grid-cols-3
      xl:grid-cols-4
     "
    >
      {listOfCards.map((card, index) => (
        <div
          key={index}
          className=" flex flex-col justify-between w-[277px] h-[415px] bg-white rounded-xl shadow-[0px_0px_9px_0px_rgba(153,153,151,0.25)]"
        >
          <img src={card.imgPath} alt={card.alt} />
          <div className="m-[18px] flex flex-col h-full  ">
            <button
              className=" 
                text-neutral-500 text-xs font-medium
                  w-40 h-8 bg-gray-200 rounded-md
                  hover:text-gray-200 hover:bg-neutral-500
                  transition-colors duration-200
                  "
            >
              {card.btnName}
            </button>
            <p className="text-black font-semibold mt-[13px] line-clamp-2">
              {card.content}
            </p>
            <p className=" text-black text-xs mt-[5px]">{card.auth}</p>
            <div className="flex  mt-auto">
              <img src="/outschool/assets/star.svg" alt="star" />
              <img src="/outschool/assets/star.svg" alt="star" />
              <img src="/outschool/assets/star.svg" alt="star" />
              <img src="/outschool/assets/star.svg" alt="star" />
              <img src="/outschool/assets/star.svg" alt="star" />
              <span className="text-black text-xs font-semibold ">
                {card.rate}
              </span>
            </div>
            <div className="flex justify-between mt-[6px]">
              <span className="text-violet-800 text-xl font-bold ">
                ${card.price}
              </span>
              <button
                className="
                  text-violet-800 text-xs font-semibold w-20 h-7 rounded-md border border-violet-800
                    hover:bg-violet-800 hover:text-white transition-colors duration-200

                  "
              >
                Buy now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
