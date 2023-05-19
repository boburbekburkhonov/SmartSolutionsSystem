/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './HeroAbout.css'

const HeroAbout = () => {
  return (<>
  
    <Header />

      <main className="main">
        <h2 className="a_hero__header">Kompaniya haqida</h2>
        <section className="hero__about">
          <div className="container hero__about__container">

            <ul className="a_hero__left">
              <li>Kompaniya haqida</li>
              <li>Hamkorlar</li>
              <li>Bizning mijozlarimiz</li>
            </ul>

            <div className="a_hero__right">
              <h3 className="a_hero__title">Kompaniya haqida</h3>
              <p className="a_hero__desc"> <strong>«Smart Solution System»</strong> kompaniyasi 2019-yilda tashkil topgan. Bugungi kunda kompaniya O’zbekistonda aqlli texnologiyalarni joriy qilishda ko’plab yutuqlarga erishib kelmoqda. "Smart Water", "Smart Well" aqlli qurilmalari aynan«Smart Solution System» kompaniyasi tomonidan ishlab chiqilgan. Bundan tashqari suv inshootlarini, nasos stansiyalarini, gidro uzellarni va suv omborlarini avtomatlashtirish va monitoring qilish ham kompaniyaning asosiy yo’nalishlaridan biri. Yurtimizda energetika soxasida olib borilayotgan islohotlarda jumladan quyosh panellari va mini GESlar soxasida ham ishlar olib borilmoqda. Ayni vaqtda kompaniyada doimiy asosda 30 dan ortiq xodim ishlamoqda.
              </p>

              <h3 className="a_hero__title">Hamkorlar</h3>
              <p className="a_hero__desc"> Kompaniya  <strong>"RFbeam Microwave GmbH", "MaxBotix Inc", "Xylem (Hong Kong) Limited", "NEW DAXIN TECHNOLOGY CO. LIMITED", "DianYingPu (HK) Technology Co Ltd" </strong>kabi kompaniyalarning hamkori hisoblanadi.
              </p>
              
              <h3 className="a_hero__title">Bizning mijozlarimiz </h3>

              <ul className="a_hero__list">

                <li>
                  <p className="a_hero__desc">O’zbekiston Respublikasi suv xo’jaligi vazirligi</p>                  
                </li>

                <li>
                  <p className="a_hero__desc">O’zbekiston Respublikasi suv xo’jaligi vazirligi huzuridagi Amu-Buxoro ITHB</p>                  
                </li>

                <li>
                  <p className="a_hero__desc">”Qurilish Qurilish Ta’mirlash” MChJ</p>                  
                </li>
                

                <li>
                  <p className="a_hero__desc">Amu Buxoro ITHB</p>                  
                </li>
                

                <li>
                  <p className="a_hero__desc">Janubiy Mirzacho’l magistral kanalidan foydalanish boshqarmasi</p>                  
                </li>
                

                <li>
                  <p className="a_hero__desc">Katta Farg’ona magistral kanali boshqarmasi</p>                  
                </li>
                

                <li>
                  <p className="a_hero__desc">TIIIMSX</p>                  
                </li>
                
              </ul>

            </div>

          </div>
        </section>
      </main>

    <Footer />

  </>);
};

export default HeroAbout;
