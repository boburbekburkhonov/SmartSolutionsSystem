/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import React from "react";
import "./Partners.css";
import partner1 from "../../assets/images/client-5.svg";
import partner2 from "../../assets/images/client-1.svg";
import partner3 from "../../assets/images/client-2.svg";
import partner4 from "../../assets/images/client-4.svg";
import partner5 from "../../assets/images/client-6.svg";


const Partners = (props) => {
  const { selectLan } = props;

  return (
    <>
      <section className="partners">
        <h2 className="partners__header">
          {selectLan == "uz"
            ? "Hamkorlar"
            : selectLan == "eng"
            ? "Partners"
            : null}
        </h2>

        <div className="container partners__container">
          <ul className="partners__list">
            <li className="partners__item ">
              <img
                src={partner2}
                alt=""
                className="partners__img partners__img1"
              />
            </li>

            <li className="partners__item">
              <img
                src={partner1}
                alt=""
                className="partners__img partners__img2"
              />
            </li>

            <li className="partners__item">
              <img
                src={partner3}
                alt=""
                className="partners__img partners__img3"
              />
            </li>

            <li className="partners__item">
              <img
                src={partner4}
                alt=""
                className="partners__img partners__img4"
              />
            </li>

            <li className="partners__item">
              <img
                src={partner5}
                alt=""
                className="partners__img partners__img5"
              />
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Partners;
