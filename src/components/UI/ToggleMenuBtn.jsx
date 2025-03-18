import React, { useState } from "react";

export const ToggleMenuBtn = ({ visibleMenu, styles }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive((prev) => !prev);
    visibleMenu((prev) => !prev);
  };
  return (
    <button
      className={`group relative h-5 w-[30px] ${styles} ${
        isActive ? "active" : ""
      } flex flex-col justify-between md:hidden`}
      onClick={toggleMenu}
    >
      <span className=" bg-white h-[2px] w-full top-0 group-[.active]:translate-y-2 group-[.active]:rotate-45 transition-transform duration-200 left-0"></span>
      <span className=" bg-white h-[2px] w-full  group-[.active]:opacity-0 transition-opacity left-0"></span>
      <span className=" bg-white h-[2px] w-full bottom-0 group-[.active]:-translate-y-[10px] group-[.active]:-rotate-45 transition-transform duration-200 left-0"></span>
    </button>
  );
};
