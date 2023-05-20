import HeroAbout from "./Pages/HeroAbout/HeroAbout";
import ServiceAbout from "./Pages/ServiceAbout/ServiceAbout";
import NewsAbout from "./Pages/NewsAbout/NewsAbout";
import VideoAbout from "./Pages/VideoAbout/VideoAbout";
import EmployeeAbout from "./Pages/EmployeeAbout/EmployeeAbout";
import ProductsAbout from "./Pages/ProductAbout/ProductsAbout";
import { Route, Routes } from "react-router-dom";
import logo from "./assets/images/logo1.svg";
import { useState } from "react";
import Main from "./Pages/Main/Main";

function App() {
  const [selectLan, setSelectLan] = useState("uz");

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
              src={
                selectLan == "uz"
                  ? "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Flag_of_Uzbekistan.png/1200px-Flag_of_Uzbekistan.png"
                  : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1200px-Flag_of_the_United_Kingdom_%281-2%29.svg.png"
              }
              width="52"
              height="27"
              alt="Flag_of_Uzbekistan"
            />

            <select
              onChange={(e) => setSelectLan(e.target.value)}
              className="form-select header-nav-select ms-3"
            >
              <option value="uz" className="header-nav-option">
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

      <Routes>
        <Route path="/" element={<Main selectLan={selectLan} />} />
        <Route
          path="/hero/about"
          element={<HeroAbout selectLan={selectLan} />}
        />
        <Route
          path="/product/about/:id"
          element={<ProductsAbout selectLan={selectLan} />}
        />
        <Route
          path="/service/about"
          element={<ServiceAbout selectLan={selectLan} />}
        />
        <Route
          path="/news/about"
          element={<NewsAbout selectLan={selectLan} />}
        />
        <Route
          path="/video/about"
          element={<VideoAbout selectLan={selectLan} />}
        />
        <Route
          path="/employee/about"
          element={<EmployeeAbout selectLan={selectLan} />}
        />
      </Routes>

      <footer className="footer">
        <div className="footer__top">
          <img
            className="footer_logo"
            src={logo}
            width={55}
            height={55}
            alt="logo"
          />
          <h2 className="footer__header">Smart solution System</h2>
        </div>

        <div className="container footer__container">
          <div className="footer__middle">
            <nav className="footer-nav">
              <ul className="list-unstyled d-flex align-items-center m-0 ">
                <li className="footer-nav-item">
                  <a href="#" className="footer-nav-link">
                    Kompaniya haqida
                  </a>
                </li>

                <li className="footer-nav-item">
                  <a href="#" className="footer-nav-link">
                    Mahsulotlar
                  </a>
                </li>

                <li className="footer-nav-item">
                  <a href="#" className="footer-nav-link">
                    Xizmatlar
                  </a>
                </li>

                <li className="footer-nav-item">
                  <a href="#" className="footer-nav-link">
                    Yangiliklar
                  </a>
                </li>

                <li className="footer-nav-item">
                  <a href="#" className="footer-nav-link">
                    Jamoa
                  </a>
                </li>

                <li className="footer-nav-item">
                  <a href="#" className="footer-nav-link">
                    Aloqa
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="foooter__txt">© 2023 Smart Solutions System</p>
        </div>
      </footer>
    </>
  );
}

export default App;
