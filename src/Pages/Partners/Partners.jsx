/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import React from "react";
import "./Partners.css";
import partner1 from "../../assets/images/client-5.svg";
import partner2 from "../../assets/images/client-1.svg";
import partner3 from "../../assets/images/client-2.svg";
import partner4 from "../../assets/images/client-4.svg";
import partner5 from "../../assets/images/client-6.svg";
import partner21 from "../../assets/images/tailhooo22.png";
import partner22 from "../../assets/images/pngwing.com.png";
import partner23 from "../../assets/images/wengsheng.png";
import sisgeo from "../../assets/images/sisgeo.png";

const Partners = (props) => {
  const { selectLan } = props;

  return (
    <>
      <section className="partners">
        <h2 className="partners__header">
          {selectLan == "uz"
            ? "Mahalliy Hamkorlar"
            : selectLan == "eng"
            ? "Local Partners"
            : null}
        </h2>

        <div className="container partners__container">
          <ul className="partners__list">
            <li className="partners__item ">
              <a href="#">
                <img
                  src={partner2}
                  alt=""
                  className="partners__img partners__img1"
                />
              </a>
            </li>

            <li className="partners__item">
              <a href="#">
                <img
                  src={partner1}
                  alt=""
                  className="partners__img partners__img1"
                />
              </a>
            </li>

            <li className="partners__item">
              <a href="https://iarc.uz/" target="_blank">
                <img
                  src={partner3}
                  alt=""
                  className="partners__img partners__img3"
                />
              </a>
            </li>

            <li className="partners__item">
              <a href="https://water.gov.uz/uz" target="_blank">
                <img
                  src={partner4}
                  alt=""
                  className="partners__img partners__img3"
                />
              </a>
            </li>

            <li className="partners__item">
              <a href="#" target="_blank">
                <img
                  src={partner5}
                  alt=""
                  className="partners__img partners__img3"
                />
              </a>
            </li>
          </ul>
        </div>

        <h2 className="partners__header">
          {selectLan == "uz"
            ? "Xorijiy Hamkorlar"
            : selectLan == "eng"
            ? "Foreign Partners"
            : null}
        </h2>

        <div className="container partners__container">
          <ul className="partners__list">
            <li className="partners__item ">
              <a href="https://www.sisgeo.com/" target="_blank">
                <img
                  src={sisgeo}
                  alt=""
                  className="partners__img partners__img20"
                />
              </a>
            </li>

            <li className="partners__item ">
              <a href="https://tailhoo.en.alibaba.com/" target="_blank">
                <img
                  src={partner21}
                  alt=""
                  className="partners__img partners__img20"
                />
              </a>
            </li>

            <li className="partners__item ">
              <a href="https://www.xylem.com/en-us/" target="_blank">
                <img
                  src={partner22}
                  alt=""
                  className="partners__img partners__img20"
                />
              </a>
            </li>

            <li className="partners__item ">
              <img
                src={partner23}
                alt=""
                className="partners__img partners__img20"
              />
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Partners;
