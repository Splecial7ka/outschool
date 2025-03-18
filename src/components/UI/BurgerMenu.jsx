import React from "react";

export const BurgerMenu = ({ navLinks, isOpen }) => {
  return (
    <nav
      className={`
        fixed inset-0 z-40 flex items-center justify-center 
        bg-gradient-to-r from-violet-800 to-pink-400 
        transition-all duration-200 ease-in-out 
        ${
          isOpen
            ? "opacity-100 scale-100"
            : "opacity-0 scale-90 pointer-events-none"
        }
      `}
    >
      <ul className=" flex flex-col items-center gap-4 font-medium text-2xl">
        {navLinks.map((link, index) => (
          <li key={index}>{link}</li>
        ))}
      </ul>
    </nav>
  );
};
