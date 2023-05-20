import React, { useEffect, useState } from "react";
import service from "../../assets/images/services.png";
import right from "../../assets/images/hero-btn.png";
import "./Services.css";
import { useNavigate } from "react-router-dom";

const Services = (props) => {
  const { selectLan } = props;
  const [dataService, setDataService] = useState([]);
  const navigate = useNavigate();

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
    <section className="services">
      <div className="container">
        <h2 className="services-heading">Xizmatlar</h2>

        <ul className="list-unstyled m-0 services-list">
          {dataService.map((item, index) => {
            return (
              <li className="services-item" key={index}>
                <img
                  className="services-img"
                  src={item.img}
                  alt="service"
                  width="300"
                  height="220"
                />
                <p className="services-desc m-0">{item.title}</p>
              </li>
            );
          })}
        </ul>

        <button
          className="employees-btn "
          onClick={() => navigate("/service/about")}
        >
          <img src={right} alt="right" width="20" height="16" />
          <span className="employees-btn-span">Barcha xizmatlar</span>
        </button>
      </div>
    </section>
  );
};

export default Services;
