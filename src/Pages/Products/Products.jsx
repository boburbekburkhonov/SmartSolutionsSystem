/* eslint-disable no-unused-vars */
// import React from "react";
import "./Products.css";
import Button from "../Button/Button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../Api/Api";

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

  console.log(
    dataProduct[1]?.desc.split("!@#")[0],
    dataProduct[1]?.desc.split("!@#")[1]
  );
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
                    src={item.pImages.map((e) => e.link)}
                    width={494}
                    height={266}
                    alt=""
                  />
                  <div className="item__body">
                    <h4 className="item__header">{item.name}</h4>
                    <p className="item__desc">{item.desc.split("!@#")[0]}</p>
                    <span onClick={() => navigate(`/product/about/${item.id}`)}>
                      <Button selectLan={selectLan} />
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
