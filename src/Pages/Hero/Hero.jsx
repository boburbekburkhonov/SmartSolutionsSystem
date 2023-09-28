import React from "react";
import "./Hero.css";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import weatherVideo from "../../assets/images/water-video.mp4";

const Hero = (props) => {
  const navigate = useNavigate();
  const { selectLan } = props;

  return (
    <>
      <section id="hero" className="hero">
        <div className="hero_container">
          <div className="video-wrapper">
            <video autoPlay loop muted>
              <source src={weatherVideo} type="video/mp4" />
            </video>
            <div className="hero-wrapper">
              <h1 className="hero-heading m-0">
                {selectLan == "uz"
                  ? "Innovatsiya, sifat va ishonchlilik kelajakni belgilaydi!"
                  : selectLan == "eng"
                  ? "Innovation, quality and reliability define the future!"
                  : null}
              </h1>
              <p className="hero-desc m-0">
                {selectLan == "uz"
                  ? "«Smart Solutions System» aqlli texnologiyalarni joriy qilishda O'zbekistondagi yetakchi kompaniyalardan biri hisoblanadi. Suv inshootlari, nasos stansiyalari, gidro uzellar va suv omborlarini avtomatlashtirish va monitoring qilish kompaniyaning asosiy yo’nalishlaridan biri."
                  : selectLan == "eng"
                  ? "«Smart Solutions System» is one of the leading companies in Uzbekistan in introducing smart technologies. Automation and monitoring of water structures, pumping stations, hydro nodes and reservoirs is one of the main directions of the company."
                  : null}
              </p>
              <span onClick={() => navigate("/hero/about")}>
                <Button selectLan={selectLan} />
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
