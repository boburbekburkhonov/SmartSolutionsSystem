import React from "react";
import right from "../../assets/images/hero-btn.png";
import "./Button.css";

const Button = () => {
  return (
    <button className="more-btn">
      <img src={right} alt="right" width="20" height="16" />
      <span className="more-btn-span">Batafsil</span>
    </button>
  );
};

export default Button;
