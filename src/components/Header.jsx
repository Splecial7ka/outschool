import React, { useEffect, useState } from "react";
import { ToggleMenuBtn } from "./UI/ToggleMenuBtn";
import { Logo } from "./UI/Logo";
import { ActionList } from "./UI/ActionList";
import { NavComponent } from "./NavComponent";
import { BurgerMenu } from "./UI/BurgerMenu";

export const Header = () => {
  const navLinks = ["Course", "Pricing", "About Us", "Contact Us"];
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isMenuOpen);
  }, [isMenuOpen]);

  const actionsList = [
    {
      link: "#",
      imgPath: "/outschool/assets/account.svg",
      alt: "accountImg",
      text: "Account",
    },
    {
      link: "#",
      imgPath: "/outschool/assets/card.svg",
      alt: "cardImg",
      text: "Card",
    },
  ];

  return (
    <header className="mx-auto max-w-[1440px] flex justify-between pt-[35px] px-10 md:px-5">
      <Logo link={"#"} imgPath="/outschool/assets/logo.svg" />
      <NavComponent links={navLinks} />
      <ActionList actions={actionsList} />
      <ToggleMenuBtn styles="z-50" visibleMenu={setMenuOpen} />
      <BurgerMenu navLinks={navLinks} isOpen={isMenuOpen} />
    </header>
  );
};
