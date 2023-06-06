/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import React from "react";
import "./Products.css";
import Button from "../Button/Button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api, apiImage } from "../../Api/Api";

const Products = (props) => {
  const { selectLan } = props;
  const [dataProduct, setDataProduct] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${api}/users/products`)
      .then((res) => res.json())
      .then((data) => {
        setDataProduct([]);
        const arr = data.filter((e) => e.len == selectLan);
        setDataProduct(arr);
      });
  }, [selectLan]);

  return (
    <>
      <section id="products" className="products">
        <div className="products__container container">
          <h2 className="products__header">
            {selectLan == "uz"
              ? "Mahsulotlar"
              : selectLan == "eng"
              ? "Products"
              : null}
          </h2>

          <ul className="products__list">
            {dataProduct?.map((item, index) => {
              return (
                <li className="products__item" key={index}>
                  <img
                    className="item__img"
                    src={`${apiImage}/${item.pImages[0]?.link}`}
                    width={494}
                    height={266}
                    alt=""
                  />
                  <div className="item__body">
                    <h4 className="item__header">{item.name}</h4>
                    <p className="item__desc"> {item.desc.split("!@#")[0]}</p>
                    <span
                      className="text-decoration-none"
                      onClick={() => navigate(`/product/about/${item.id}`)}
                    >
                      <div className="d-flex justify-content-between align-items-end flex-wrap">
                        <Button selectLan={selectLan} />
                        <span className="product__made m-0">{ item.status == 'true' ? 'Made in @SmartSolutionsSystem' :''}</span>
                      </div>
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Products;
