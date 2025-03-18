import React, { useState } from "react";
import { Card } from "./UI/Card";

export const CardsSection = () => {
  const [activeCategory, setActiveCategory] = useState("Top Rated");

  const categories = [
    "Top Rated",
    "Development",
    "Design",
    "Music",
    "Marketing",
    "Business",
    "Photography",
  ];
  const listOfCards = [
    {
      imgPath: "/outschool/assets/Cards/modernCard.svg",
      alt: "Artificial_Intelligence_img",
      btnName: "Artificial Intelligence",
      content: "Modern Artificial Intelligence with zero coding",
      auth: "Jhon David",
      rate: "4.9",
      price: "49.99",
    },
    {
      imgPath: "/outschool/assets/Cards/figma.svg",
      alt: "Figma_UX/UI_Design_img",
      btnName: "UX/UI Designing",
      content: "Figma UX/UI Design essentials",
      auth: "Daniel Walter Scott",
      rate: "4.9",
      price: "49.99",
    },
    {
      imgPath: "/outschool/assets/Cards/complete.svg",
      alt: "Complete_figma_mega_course:_img",
      btnName: "UX/UI Designing",
      content: "Complete figma mega course: UX/UI Design Beginner to Expert  ",
      auth: "Kaleb Kingston",
      rate: "4.9",
      price: "49.99",
    },
    {
      imgPath: "/outschool/assets/Cards/fullstack.svg",
      alt: "The_Complete_2022_Fullstack_Web_img",
      btnName: "Web Development",
      content: "The Complete 2022 Fullstack Web Developer course",
      auth: "Mark Lassoff",
      rate: "4.9",
      price: "49.99",
    },
    {
      imgPath: "/outschool/assets/Cards/javascript.svg",
      alt: "Javascript_for_beginners_img",
      btnName: "Web Development",
      content: "Javascript for beginners",
      auth: "Jhon David",
      rate: "4.9",
      price: "49.99",
    },
    {
      imgPath: "/outschool/assets/Cards/digital.svg",
      alt: "Digital_Advertising_and_Marketing_img",
      btnName: "Digital Marketing",
      content: "Digital Advertising and Marketing 101: The Complete...",
      auth: "Ben Silverstain",
      rate: "4.9",
      price: "49.99",
    },
    {
      imgPath: "/outschool/assets/Cards/mega.svg",
      alt: "Mega_Digital_Marketing_course_img",
      btnName: "Digital Marketing",
      content: "Mega Digital Marketing course: 12 Courses in 1",
      auth: "Phil Ebiner",
      rate: "4.9",
      price: "49.99",
    },
    {
      imgPath: "/outschool/assets/Cards/user.svg",
      alt: "User_Experience_Design_Essentialimg",
      btnName: "UX/UI Designing",
      content: "User Experience Design Essentials",
      auth: "Jacob Murphy",
      rate: "4.9",
      price: "49.99",
    },
  ];
  return (
    <section className="flex justify-center mt-[110px]">
      <div className="flex justify-start max-w-[1168px] w-full flex-col">
        <h1
          className="
        text-black text-4xl font-semibold leading-[62px] tracking-tight px-5
          md:px-0 md:text-5xl "
        >
          Our Courses
        </h1>
        <div className="flex text-neutral-500 mt-[30px] gap-[30px] flex-wrap px-5 justify-center md:justify-normal">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`
        text-xl font-semibold relative transition-all duration-300
        after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-full after:bg-violet-800
        after:transition-transform after:duration-300 after:origin-center after:scale-x-0
        hover:after:scale-x-100
        
        ${
          activeCategory === category
            ? "text-violet-800 after:scale-x-100"
            : "after:scale-x-0"
        }
      `}
            >
              {category}
            </button>
          ))}
        </div>

        <Card listOfCards={listOfCards}></Card>
        <div className="mt-[40px] flex justify-center">
          <p className="text-violet-800 text-base font-medium self-center">
            Show more
          </p>
          <img className="h-6 w-6" src="src\assets\arrow.svg" alt="arrow.svg" />
        </div>
      </div>
    </section>
  );
};
