import React from "react";
import service from "../../assets/images/services.png";
import "./Services.css";

const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <h2 className="services-heading">Xizmatlar</h2>

        <ul className="list-unstyled m-0 services-list">
          <li className="services-item">
            <img
              className="services-img"
              src={service}
              alt="service"
              width="300"
              height="220"
            />
            <p className="services-desc m-0">Quyosh panellari</p>
          </li>

          <li className="services-item">
            <img
              className="services-img"
              src={service}
              alt="service"
              width="300"
              height="220"
            />
            <p className="services-desc m-0">Quyosh panellari</p>
          </li>
          <li className="services-item">
            <img
              className="services-img"
              src={service}
              alt="service"
              width="300"
              height="220"
            />
            <p className="services-desc m-0">Quyosh panellari</p>
          </li>

          <li className="services-item">
            <img
              className="services-img"
              src={service}
              alt="service"
              width="300"
              height="220"
            />
            <p className="services-desc m-0">Quyosh panellari</p>
          </li>
          <li className="services-item">
            <img
              className="services-img"
              src={service}
              alt="service"
              width="300"
              height="220"
            />
            <p className="services-desc m-0">Quyosh panellari</p>
          </li>

          <li className="services-item">
            <img
              className="services-img"
              src={service}
              alt="service"
              width="300"
              height="220"
            />
            <p className="services-desc m-0">Quyosh panellari</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Services;
