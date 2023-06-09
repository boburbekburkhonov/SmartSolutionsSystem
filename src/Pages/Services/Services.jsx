/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import service from "../../assets/images/services.png";
import right from "../../assets/images/hero-btn.png";
import "./Services.css";
import { useNavigate } from "react-router-dom";
import { api, apiImage } from "../../Api/Api";

const Services = (props) => {
  const { selectLan } = props;
  const [dataService, setDataService] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${api}/users/servicesThree/${selectLan}`)
      .then((res) => res.json())
      .then((data) => {
        setDataService(data);
      });
  }, [selectLan]);
  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="services-heading">
          {selectLan == "uz"
            ? "Xizmatlar"
            : selectLan == "eng"
            ? "Services"
            : null}
        </h2>

        <ul className="list-unstyled m-0 services-list">
          {dataService.map((item, index) => {
            return (
              <li className="services-item" key={index}>
                <img
                  className="services-img"
                  src={`${apiImage}/${item?.img}`}
                  alt="service"
                  width="300"
                  height="220"
                />
                <p className="services-desc m-0">{item?.title}</p>
              </li>
            );
          })}
        </ul>

        <span
          className="employees-btn text-decoration-none"
          onClick={() => navigate("/service/about")}
        >
          <img src={right} alt="right" width="20" height="16" />
          <span className="employees-btn-span cursor-pointer">
            {selectLan == "uz"
              ? "Barcha xizmatlar"
              : selectLan == "eng"
              ? "All services"
              : null}
          </span>
        </span>
      </div>
    </section>
  );
};

export default Services;
