import React from "react";

export const NavComponent = ({ links = [] }) => {
  return (
    <nav>
      <ul className="font-medium items-center gap-x-[30px] hidden md:flex">
        {links.map((link, index) => (
          <li key={index} className=" link-underline menu-link ">
            {link}
          </li>
        ))}
      </ul>
    </nav>
  );
};
