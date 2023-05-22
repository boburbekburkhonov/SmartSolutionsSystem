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
  const [dataProduct, setDataProduct] = useState({});

  useEffect(() => {
    fetch("http://localhost:5656/users/products")
      .then((res) => res.json())
      .then((data) => {
        setDataProduct({});
        const foundData = data.find((e) => e.len == selectLan && e.id == id);
        setDataProduct(foundData);
      });
  }, [selectLan]);

  const items = dataProduct.pImages?.map((item, index) => {
    return (
      <>
        <img
          key={index}
          className="a_products__img"
          src={item.link}
          onDragStart={handleDragStart}
          role="presentation"
        />
        ,
      </>
    );
  });

  return (
    <>
      <main className="main">
        <h2 className="a_products__header">Smart water</h2>
        <section className="products__about">
          <div className="container products__about__container">
            <AliceCarousel
              autoPlay={true}
              infinite={true}
              animationDuration="2000"
              disableButtonsControls={true}
              mouseTracking
              items={items}
            />

            <div className="a_products__right">
              <p className="a_products__desc">
                {" "}
                <strong>{dataProduct.name}</strong>
                {dataProduct.desc}
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ProductsAbout;
