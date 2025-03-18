import React from "react";

export const ActionList = ({ actions }) => {
  return (
    <div className=" justify-center gap-[30px] align-bottom sm:flex hidden">
      {actions.map((act, index) => (
        <a key={index} href={act.link} className="flex gap-[4px] align-center ">
          <img src={act.imgPath} alt={act.alt} />
          <span className=""> {act.text}</span>
        </a>
      ))}
    </div>
  );
};
