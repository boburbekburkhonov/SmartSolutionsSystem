import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container d-flex align-items-center justify-content-between">
          <div>
            <a href="#" className="d-flex align-items-center header-logo-link">
              <img
                src="https://smart-solution.uz/assets/img/apple-touch-icon.png"
                alt="logo"
                width="55"
                height="55"
              />
              <p className="header-desc m-0 ms-2">Smart Solutions System</p>
            </a>
          </div>

          <span className="header-line"></span>

          <nav className="site-nav">
            <ul className="list-unstyled d-flex align-items-center m-0 site-nav-list">
              <li className="header-nav-item">
                <a href="#" className="header-nav-link">
                  Kompaniya haqida
                </a>
              </li>

              <li className="header-nav-item">
                <a href="#" className="header-nav-link">
                  Mahsulotlar
                </a>
              </li>

              <li className="header-nav-item">
                <a href="#" className="header-nav-link">
                  Xizmatlar
                </a>
              </li>

              <li className="header-nav-item">
                <a href="#" className="header-nav-link">
                  Yangiliklar
                </a>
              </li>

              <li className="header-nav-item">
                <a href="#" className="header-nav-link">
                  Jamoa
                </a>
              </li>

              <li className="header-nav-item">
                <a href="#" className="header-nav-link">
                  Aloqa
                </a>
              </li>
            </ul>
          </nav>

          <div className="header-select-wrapper d-flex align-items-center justify-content-between">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Flag_of_Uzbekistan.png/1200px-Flag_of_Uzbekistan.png"
              width="52"
              height="27"
              alt="Flag_of_Uzbekistan"
            />

            <select className="form-select header-nav-select ms-3">
              <option value="uzb" className="header-nav-option">
                O'zb
              </option>
              <option value="eng" className="header-nav-select">
                English
              </option>
            </select>
          </div>

          <button className="header-hamburger"></button>
          <div className="header__bg"></div>
        </div>
      </header>
    </>
  );
};

export default Header;
