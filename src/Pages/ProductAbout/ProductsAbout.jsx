/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "./ProductsAbout.css";
import { useNavigate, useParams } from "react-router-dom";
import { api, apiImage } from "../../Api/Api";

const ProductsAbout = (props) => {
  const handleDragStart = (e) => e.preventDefault();
  const { id } = useParams();
  const { selectLan } = props;
  const [dataProduct, setDataProduct] = useState({});

  useEffect(() => {
    fetch(`${api}/users/products`)
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
          src={`${apiImage}/${item.link}`}
          onDragStart={handleDragStart}
          role="presentation"
        />
      </>
    );
  });

  return (
    <>
      <main className="main">
        <h2 className="a_products__header">Smart water</h2>
        <section className="products__about">
          <div className="container products__about__container">
            {!dataProduct.name ? (
              <span className="loader"></span>
            ) : (
              <>
                <AliceCarousel
                  autoPlay={true}
                  infinite={true}
                  animationDuration="2500"
                  disableButtonsControls={true}
                  autoPlayInterval={2000}
                  mouseTracking
                  items={items}
                />

                <div className="a_products__right">
                  <h3 className="a_products__title">
                    <strong>{dataProduct.name}</strong>
                  </h3>
                  <p className="a_products__desc">
                    {" "}
                    {dataProduct.desc.split("!@#")[1]}
                  </p>
                </div>
              </>
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default ProductsAbout;
