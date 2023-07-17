/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./EmployeeAbout.css";
import { api, apiImage } from "../../Api/Api";

const EmployeeAbout = (props) => {
  const { selectLan } = props;
  const [dataEmployees, setDataEmployees] = useState([]);

  useEffect(() => {
    fetch(`${api}/users/employees/${selectLan}/all`)
      .then((res) => res.json())
      .then((data) => {
        setDataEmployees(data);
      });
  }, [selectLan]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [props.location]);

  dataEmployees.sort((a, b) => {
    if (new Date(a.createAt).getTime() < new Date(b.createAt).getTime()) {
      return -1;
    }
  });

  return (
    <>
      <main className="main">
        <h2 className="a_employee__header">
          {selectLan == "uz"
            ? "Jamoa a'zolari"
            : selectLan == "eng"
            ? "Team members"
            : null}
        </h2>

        <section className="a_employee__about">
          <div className="container employee__about__container">
            {!dataEmployees.length ? (
              <span className="loader"></span>
            ) : (
              <ul className="a_employees-list m-0 list-unstyled">
                {dataEmployees.map((item, index) => {
                  return (
                    <li
                      className="a_employees-item d-flex align-items-center justify-content-between flex-wrap"
                      key={index}
                    >
                      <img
                        className="a_employees-item-img"
                        src={`${apiImage}/${item.img}`}
                        width="170"
                        height="170"
                        alt="employee"
                      />
                      <div className="a_employees-item-right">
                        <h4 className="a_employees-item-right-heading">
                          {item.name}
                        </h4>
                        <p className="a_employees-item-right-desc">
                          {item.job}
                        </p>

                        <p className="a_employees-item-right-job-desc">
                          {item.desc}
                        </p>

                        <span className="a_employees-item-right-span"></span>

                        <ul className="a_employees-item-right-list m-0 mt-3 list-unstyled d-flex align-items-center justify-content-betweem">
                          <li>
                            <a
                              href={item.insta}
                              className="a_employees-item-right-link"
                            >
                              <i className="bx bxl-instagram"></i>
                            </a>
                          </li>

                          <li>
                            <a
                              href={item.telegram}
                              className="a_employees-item-right-link ms-2"
                            >
                              <i className="bx bxl-telegram"></i>
                            </a>
                          </li>

                          <li>
                            <a
                              href={item.mail}
                              className="a_employees-item-right-link ms-2"
                            >
                              <i className="bx bxl-gmail"></i>
                            </a>
                          </li>

                          <li>
                            <a
                              href={`tel:${item.phone}`}
                              className="a_employees-item-right-link ms-2"
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
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default EmployeeAbout;
