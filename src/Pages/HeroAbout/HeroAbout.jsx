/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from "react";
import "./HeroAbout.css";

const HeroAbout = (props) => {
  const { selectLan } = props;

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [props.location]);

  return (
    <>
      <main className="main">
        <h2 className="a_hero__header">
          {" "}
          {selectLan == "uz"
            ? "Kompaniya haqida"
            : selectLan == "eng"
            ? "About the company"
            : null}
        </h2>
        <section className="hero__about">
          <div className="container hero__about__container">
            <ul className="a_hero__left">
              <li>
                <a className="a_hero_link" href="#">
                  {selectLan == "uz"
                    ? "Kompaniya haqida"
                    : selectLan == "eng"
                    ? "About the company"
                    : null}
                </a>
              </li>
              <li>
                <a className="a_hero_link" href="#hamkorlar">
                  {selectLan == "uz"
                    ? "Hamkorlar"
                    : selectLan == "eng"
                    ? "Partners"
                    : null}
                </a>
              </li>
              <li>
                <a className="a_hero_link" href="#mijozlarimiz">
                  {selectLan == "uz"
                    ? "Bizning mijozlarimiz"
                    : selectLan == "eng"
                    ? "Our customers"
                    : null}
                </a>
              </li>
            </ul>

            <div className="a_hero__right">
              <h3 id="kompaniya" className="a_hero__title">
                {selectLan == "uz"
                  ? "Kompaniya haqida"
                  : selectLan == "eng"
                  ? "About the company"
                  : null}
              </h3>
              <p className="a_hero__desc">
                {" "}
                <strong>«Smart Solutions System»</strong>{" "}
                {selectLan == "uz"
                  ? "kompaniyasi 2019-yilda tashkil topgan. Bugungi kunda kompaniya O’zbekistonda aqlli texnologiyalarni joriy qilishda ko’plab yutuqlarga erishib kelmoqda. Smart Water, Smart Well aqlli qurilmalari aynan«Smart Solutions System» kompaniyasi tomonidan ishlab chiqilgan. Bundan tashqari suv inshootlarini, nasos stansiyalarini, gidro uzellarni va suv omborlarini avtomatlashtirish va monitoring qilish ham kompaniyaning asosiy yo’nalishlaridan biri. Yurtimizda energetika soxasida olib borilayotgan islohotlarda jumladan quyosh panellari va mini GESlar soxasida ham ishlar olib borilmoqda. Ayni vaqtda kompaniyada doimiy asosda 30 dan ortiq xodim ishlamoqda."
                  : selectLan == "eng"
                  ? "Smart Solutions System company was founded in 2019. Today, the company is making many achievements in introducing smart technologies in Uzbekistan. Smart Water, Smart Well smart devices were developed by the company Smart Solutions System. In addition, automation and monitoring of water facilities, pumping stations, hydro nodes and reservoirs is one of the main directions of the company. In the energy sector reforms in our country, work is also being carried out in the field of solar panels and mini hydroelectric power plants. Currently, more than 30 employees are working in the company on a permanent basis."
                  : null}
              </p>

              <h3 id="hamkorlar" className="a_hero__title">
                {selectLan == "uz"
                  ? "Hamkorlar"
                  : selectLan == "eng"
                  ? "Partners"
                  : null}
              </h3>
              <p className="a_hero__desc">
                {selectLan == "uz"
                  ? "Kompaniya RFbeam Microwave GmbH, MaxBotix Inc, Xylem (Hong Kong) Limited, NEW DAXIN TECHNOLOGY CO. LIMITED, DianYingPu (HK) Technology Co Ltd kabi kompaniyalarning hamkori hisoblanadi."
                  : selectLan == "eng"
                  ? "The company RFbeam Microwave GmbH, MaxBotix Inc, Xylem (Hong Kong) Limited, NEW DAXIN TECHNOLOGY CO. LIMITED is a partner of companies such as DianYingPu (HK) Technology Co Ltd."
                  : null}
              </p>

              <h3 id="mijozlarimiz" className="a_hero__title">
                {selectLan == "uz"
                  ? "Bizning mijozlarimiz"
                  : selectLan == "eng"
                  ? "Our customers"
                  : null}
              </h3>

              <ul className="a_hero__list">
                <li>
                  <p className="a_hero__desc">
                    {selectLan == "uz"
                      ? "O’zbekiston Respublikasi suv xo’jaligi vazirligi"
                      : selectLan == "eng"
                      ? "Ministry of water management of the Republic of Uzbekistan"
                      : null}
                  </p>
                </li>

                <li>
                  <p className="a_hero__desc">
                    {selectLan == "uz"
                      ? "O’zbekiston Respublikasi suv xo’jaligi vazirligi huzuridagi Amu-Buxoro ITHB"
                      : selectLan == "eng"
                      ? "Amu-Bukhara ITHB under the Ministry of Water Management of the Republic of Uzbekistan"
                      : null}
                  </p>
                </li>

                <li>
                  <p className="a_hero__desc">
                    {selectLan == "uz"
                      ? "Qurilish Ta’mirlash MChJ"
                      : selectLan == "eng"
                      ? "Construction Repair LLC"
                      : null}
                  </p>
                </li>

                <li>
                  <p className="a_hero__desc">
                    {selectLan == "uz"
                      ? "Amu Buxoro ITHB"
                      : selectLan == "eng"
                      ? "Amu Bukhara ITHB"
                      : null}
                  </p>
                </li>

                <li>
                  <p className="a_hero__desc">
                    {selectLan == "uz"
                      ? "Janubiy Mirzacho’l magistral kanalidan foydalanish boshqarmasi"
                      : selectLan == "eng"
                      ? "Southern Mirzachol Main Canal Utilization Department"
                      : null}
                  </p>
                </li>

                <li>
                  <p className="a_hero__desc">
                    {selectLan == "uz"
                      ? "Katta Farg’ona magistral kanali boshqarmasi"
                      : selectLan == "eng"
                      ? "Department of the Big Fergana Main Canal"
                      : null}
                  </p>
                </li>

                <li>
                  <p className="a_hero__desc">TIIIMSX</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default HeroAbout;
