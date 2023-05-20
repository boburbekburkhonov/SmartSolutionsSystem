/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "./ProductsAbout.css";
import { useNavigate, useParams } from "react-router-dom";

const ProductsAbout = (props) => {
  const handleDragStart = (e) => e.preventDefault();
  const { id } = useParams();
  const { selectLan } = props;
  const [dataProduct, setDataProduct] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5656/users/products")
      .then((res) => res.json())
      .then((data) => {
        setDataProduct([]);
        const arr = data.filter((e) => e.len == selectLan && e.id == id);
        setDataProduct(arr);
      });
  }, [selectLan]);

  const items = [
    <>
      {dataProduct.map((item, index) => {
        return (
          <>
            <img
              key={index}
              className="a_products__img"
              src={item.pImages.map((e) => e.link)}
              onDragStart={handleDragStart}
              role="presentation"
            />
            ,
          </>
        );
      })}
    </>,
  ];

  return (
    <>
      <main className="main">
        <h2 className="a_products__header">Smart water</h2>
        <section className="products__about">
          <div className="container products__about__container">
            <ul className="a_products__left">
              <AliceCarousel
                autoPlay={true}
                infinite={true}
                animationDuration="2000"
                disableButtonsControls={true}
                mouseTracking
                items={items}
              />
            </ul>

            {dataProduct.map((item, index) => {
              return (
                <div className="a_products__right" key={index}>
                  <p className="a_products__desc">
                    {" "}
                    <strong>{item.name}</strong>
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
};

export default ProductsAbout;
