/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import AliceCarousel from "react-alice-carousel";
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './ProductsAbout.css'


const handleDragStart = (e) => e.preventDefault();

// const responsive = {
//    1255: { items: 1 },
// };


const items = [
  <img className="a_products__img" src='https://images.pexels.com/photos/16783095/pexels-photo-16783095.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' onDragStart={handleDragStart} role="presentation" />,
  <img className="a_products__img" src='https://images.pexels.com/photos/15254467/pexels-photo-15254467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' onDragStart={handleDragStart} role="presentation" />,
  <img className="a_products__img" src='https://images.pexels.com/photos/788855/pexels-photo-788855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' onDragStart={handleDragStart} role="presentation" />,
  <img className="a_products__img" src='https://images.pexels.com/photos/16776399/pexels-photo-16776399.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load' onDragStart={handleDragStart} role="presentation" />,
]

const ProductsAbout = () => {
  return (<>
    <Header />
    <main className="main">
      
    <h2 className="a_products__header">Smart water</h2>
      <section className="products__about">
        <div className="container products__about__container">

      
          <ul className="a_products__left">
            <AliceCarousel
              autoPlay={true}
              infinite={true}        
              // responsive={responsive}
              // autoPlayStrategy='action'
              animationDuration="2000"
              disableButtonsControls={true}
              mouseTracking
              items={items}
            />
          </ul>
         

          <div className="a_products__right">

            <p className="a_products__desc"> <strong>«Smart Solution System»</strong> kompaniyasi 2019-yilda tashkil topgan. Bugungi kunda kompaniya O’zbekistonda aqlli texnologiyalarni joriy qilishda ko’plab yutuqlarga erishib kelmoqda. "Smart Water", "Smart Well" aqlli qurilmalari aynan«Smart Solution System» kompaniyasi tomonidan ishlab chiqilgan. Bundan tashqari suv inshootlarini, nasos stansiyalarini, gidro uzellarni va suv omborlarini avtomatlashtirish va monitoring qilish ham kompaniyaning asosiy yo’nalishlaridan biri. Yurtimizda energetika soxasida olib borilayotgan islohotlarda jumladan quyosh panellari va mini GESlar soxasida ham ishlar olib borilmoqda. Ayni vaqtda kompaniyada doimiy asosda 30 dan ortiq xodim ishlamoqda.
            </p>

          </div>

        </div>
      </section>

    </main>
    <Footer />
  </>);
};

export default ProductsAbout;
