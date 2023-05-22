/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./ServiceAbout.css";

const ServiceAbout = (props) => {
  const { selectLan } = props;
  const [dataService, setDataService] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5656/users/services")
      .then((res) => res.json())
      .then((data) => {
        setDataService([]);
        const arr = data.filter((e) => e.len == selectLan);
        setDataService(arr);
      });
  }, [selectLan]);

  return (
    <>
      <main className="main">
        <h2 className="a_service__header">
          {" "}
          {selectLan == "uz"
            ? "Xizmatlar haqida"
            : selectLan == "eng"
            ? "About services"
            : null}
        </h2>

        <section className="a_service__about">
          <div className="container service__about__container">
            <ul className="list-unstyled m-0 a_services-list">
              {dataService.map((item, index) => {
                return (
                  <li className="a_services-item" key={index}>
                    <img
                      className="a_services-img"
                      src={item.img}
                      alt="service"
                      width="300"
                      height="220"
                    />
                    <p className="a_services-title m-0">{item.title}</p>
                    <p className="a_service-desc m-0">{item.desc}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </main>
    </>
  );
};

export default ServiceAbout;
