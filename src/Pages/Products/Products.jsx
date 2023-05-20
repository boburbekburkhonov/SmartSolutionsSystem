/* eslint-disable no-unused-vars */
// import React from "react";
import "./Products.css";
import Button from "../Button/Button";
import { useEffect, useState } from "react";

const Products = (props) => {
  const { selectLan } = props;
  const [dataProduct, setDataProduct] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5656/users/products")
      .then((res) => res.json())
      .then((data) => {
        setDataProduct([]);
        const arr = data.filter((e) => e.len == selectLan);
        setDataProduct(arr);
      });
  }, [selectLan]);

  return (
    <>
      <section className="products">
        <div className="products__container container">
          <h2 className="products__header">Mahsulotlar</h2>

          <ul className="products__list">
            {dataProduct?.map((item, index) => {
              return (
                <li className="products__item" key={index}>
                  <img
                    className="item__img"
                    src={item.pImages.map((e) => e.link)}
                    width={494}
                    height={266}
                    alt=""
                  />
                  <div className="item__body">
                    <h4 className="item__header">{item.name}</h4>
                    <p className="item__desc">{item.desc}</p>
                    <a className="products__link" href="#">
                      <Button />
                    </a>
                  </div>
                </li>
              );
            })}
            {/* <li className="products__item">
              <img
                className="item__img"
                src="https://images.pexels.com/photos/16359537/pexels-photo-16359537.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
                width={494}
                height={266}
                alt=""
              />

              <div className="item__body">
                <h4 className="item__header">Smart Water</h4>
                <p className="item__desc">
                  Lorem ipsum dolor sit amet consectetur adipisdicing elit. ci!
                </p>
                <a className="products__link" href="#">
                  <Button />
                </a>
              </div>
            </li>
            <li className="products__item">
              <img
                className="item__img"
                src="https://images.pexels.com/photos/16359537/pexels-photo-16359537.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
                width={494}
                height={266}
                alt=""
              />

              <div className="item__body">
                <h4 className="item__header">Smart Water</h4>
                <p className="item__desc">
                  Lorem ipsum dolor sit amet consectetur adipisdicing elit. ci!
                </p>
                <a className="products__link" href="#">
                  <Button />
                </a>
              </div>
            </li>
            <li className="products__item">
              <img
                className="item__img"
                src="https://images.pexels.com/photos/16359537/pexels-photo-16359537.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
                width={494}
                height={266}
                alt=""
              />

              <div className="item__body">
                <h4 className="item__header">Smart Water</h4>
                <p className="item__desc">
                  Lorem ipsum dolor sit amet consectetur adipisdicing elit. ci!
                </p>
                <a className="products__link" href="#">
                  <Button />
                </a>
              </div>
            </li> */}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Products;
