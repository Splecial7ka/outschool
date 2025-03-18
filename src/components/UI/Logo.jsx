import React from "react";

export const Logo = ({ link = "#", styles = "", imgPath = "" }) => {
  return (
    <a href={link} className={styles}>
      <img src={imgPath} alt="Logo" />
    </a>
  );
};
