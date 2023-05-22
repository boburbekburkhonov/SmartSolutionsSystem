import React, { useEffect, useState } from "react";
import right from "../../assets/images/hero-btn.png";
import "./Employees.css";
import { useNavigate } from "react-router-dom";

const Employees = (props) => {
  const { selectLan } = props;
  const [dataEmployees, setDataEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5656/users/employees")
      .then((res) => res.json())
      .then((data) => {
        setDataEmployees([]);
        const arr = data.filter((e) => e.len == selectLan);
        setDataEmployees(arr);
      });
  }, [selectLan]);

  return (
    <>
      <section className="employees">
        <div className="container employees_container">
          <h2 className="employees-heading">
            {" "}
            {selectLan == "uz" ? "Jamoa" : selectLan == "eng" ? "Team" : null}
          </h2>

          <ul className="employees-list m-0 list-unstyled">
            {dataEmployees.map((item, index) => {
              return (
                <li
                  className="employees-item d-flex align-items-center justify-content-between flex-wrap"
                  key={index}
                >
                  <img
                    className="employees-item-img"
                    src={item.img}
                    width="170"
                    height="170"
                  />
                  <div className="employees-item-right">
                    <h4 className="employees-item-right-heading">
                      {item.name}
                    </h4>
                    <p className="employees-item-right-desc">{item.job}</p>

                    <span className="employees-item-right-span"></span>

                    <ul className="employees-item-right-list m-0 mt-3 list-unstyled d-flex align-items-center justify-content-betweem">
                      <li>
                        <a
                          href={item.insta}
                          className="employees-item-right-link"
                        >
                          <i className="bx bxl-instagram"></i>
                        </a>
                      </li>

                      <li>
                        <a
                          href={item.telegram}
                          className="employees-item-right-link ms-2"
                        >
                          <i className="bx bxl-telegram"></i>
                        </a>
                      </li>

                      <li>
                        <a
                          href={item.mail}
                          className="employees-item-right-link ms-2"
                        >
                          <i className="bx bxl-gmail"></i>
                        </a>
                      </li>

                      <li>
                        <a
                          href={`tel:${item.phone}`}
                          className="employees-item-right-link ms-2"
                        >
                          <i className="bx bxl-whatsapp"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>

          <button
            className="employees-btn"
            onClick={() => navigate("/employee/about")}
          >
            <img src={right} alt="right" width="20" height="16" />
            <span className="employees-btn-span">
              {selectLan == "uz"
                ? "Barcha jamoa"
                : selectLan == "eng"
                ? "All Team"
                : null}
            </span>
          </button>
        </div>
      </section>
    </>
  );
};

export default Employees;
