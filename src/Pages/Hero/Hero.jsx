import React from "react";
import "./Hero.css";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container hero_container">
          <div className="hero-wrapper">
            <h1 className="hero-heading m-0">
              Innovatsiya, sifat va ishonchlilik kelajakni belgilaydi!
            </h1>
            <p className="hero-desc m-0">
              «Smart Solution System» aqlli texnologiyalarni joriy qilishda
              O'zbekistondagi yetakchi kompaniyalardan biri hisoblanadi. Suv
              inshootlari, nasos stansiyalari, gidro uzellar va suv omborlarini
              avtomatlashtirish va monitoring qilish kompaniyaning asosiy
              yo’nalishlaridan biri.
            </p>
            <Button />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
