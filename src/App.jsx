/* eslint-disable no-unused-vars */
import HeroAbout from "./Pages/HeroAbout/HeroAbout";
import ServiceAbout from "./Pages/ServiceAbout/ServiceAbout";
import NewsAbout from "./Pages/NewsAbout/NewsAbout";
import VideoAbout from "./Pages/VideoAbout/VideoAbout";
import EmployeeAbout from "./Pages/EmployeeAbout/EmployeeAbout";
import ProductsAbout from "./Pages/ProductAbout/ProductsAbout";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "./assets/images/logo1.svg";
import { useState, useEffect } from "react";
import Main from "./Pages/Main/Main";
import { api } from "./Api/Api";

function App() {
  const [selectLan, setSelectLan] = useState("uz");
  const location = useLocation();
  const navigate = useNavigate();

  const [dataProduct, setDataProduct] = useState([]);

  useEffect(() => {
    fetch(`${api}/users/products`)
      .then((res) => res.json())
      .then((data) => {
        setDataProduct([]);
        const arr = data.filter((e) => e.len == selectLan);
        setDataProduct(arr);
      });
  }, [selectLan]);

  return (
    <>
      <header className="header">
        <div className="container d-flex align-items-center justify-content-between">
          <div>
            <HashLink
              to="/#"
              className="d-flex align-items-center header-logo-link"
            >
              <img
                src="https://smart-solution.uz/assets/img/apple-touch-icon.png"
                alt="logo"
                width="55"
                height="55"
              />
              <p className="header-desc m-0 ms-2">Smart Solutions System</p>
            </HashLink>
          </div>

          <span className="header-line"></span>

          <nav className="site-nav">
            <ul className="list-unstyled d-flex align-items-center m-0 site-nav-list">
              <li className="header-nav-item">
                <a
                  href="#"
                  onClick={() => navigate("/hero/about")}
                  className="header-nav-link"
                >
                  {selectLan == "uz"
                    ? "Kompaniya haqida"
                    : selectLan == "eng"
                    ? "About us"
                    : null}
                </a>
              </li>

              <li className="header-nav-item">
                <HashLink to="/#products" className="header-nav-link">
                  {selectLan == "uz"
                    ? "Mahsulotlar"
                    : selectLan == "eng"
                    ? "Products"
                    : null}
                </HashLink>
              </li>

              <li className="header-nav-item">
                <HashLink to="/#services" className="header-nav-link">
                  {selectLan == "uz"
                    ? "Xizmatlar"
                    : selectLan == "eng"
                    ? "Services"
                    : null}
                </HashLink>
              </li>

              <li className="header-nav-item">
                <HashLink to="/#news" className="header-nav-link">
                  {selectLan == "uz"
                    ? "Yangiliklar"
                    : selectLan == "eng"
                    ? "News"
                    : null}
                </HashLink>
              </li>

              <li className="header-nav-item">
                <HashLink to="/#employees" className="header-nav-link">
                  {selectLan == "uz"
                    ? "Jamoa"
                    : selectLan == "eng"
                    ? "Team"
                    : null}
                </HashLink>
              </li>

              <li className="header-nav-item">
                <HashLink to="/#message" className="header-nav-link">
                  {selectLan == "uz"
                    ? "Aloqa"
                    : selectLan == "eng"
                    ? "Contact us"
                    : null}
                </HashLink>
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
              className="language-img"
              alt="Flag_of_Uzbekistan"
            />

            <select
              onChange={(e) => setSelectLan(e.target.value)}
              className={
                location.pathname.split("/")[1] +
                  location.pathname.split("/")[2] ==
                "productabout"
                  ? "d-none"
                  : "form-select header-nav-select ms-3"
              }
            >
              <option value="uz" className="header-nav-option">
                Uz
              </option>
              <option value="eng" className="header-nav-select">
                Eng
              </option>
            </select>
          </div>

          <button className="header-hamburger"></button>
          <div className="header__bg"></div>
        </div>
      </header>

      {dataProduct.length == 0 ? (
        <div className="container d-flex align-items-center justify-content-center">
          <span className="loader "></span>
        </div>
      ) : (
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
      )}

      <footer
        className={
          location.pathname == "/" || location.pathname == "/hero/about"
            ? "footer"
            : "footer border-footer"
        }
      >
        <div
          className={
            location.pathname == "/hero/about"
              ? "footer__top_responsive d-none mt-0"
              : "footer__top_responsive d-none"
          }
        >
          <img
            className="footer_logo"
            src={logo}
            width={55}
            height={55}
            alt="logo"
          />
          <h2 className="footer__header">Smart solution System</h2>
        </div>

        <div
          className={
            location.pathname == "/hero/about"
              ? "container footer__container d-flex  align-items-start justify-content-between pt-0"
              : "container footer__container d-flex  align-items-start justify-content-between"
          }
        >
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

          <div className="w-100 footer-sites-middle">
            <h3 className="footer-sites-heading">
              {selectLan == "uz"
                ? "Bizning ijtimoiy tarmoqlarimiz"
                : selectLan == "eng"
                ? "Our social networks"
                : null}
            </h3>
            <ul className="footer-sites-list list-unstyled d-flex align-items-center justify-content-between flex-wrap">
              <li className="footer-sites">
                <a
                  className="footer-sites-link text-decoration-none"
                  href="https://instagram.com/smart_solutions_systemuz?igshid=MmJiY2I4NDBkZg=="
                  target="_blank"
                >
                  <i className="bx bxl-instagram"></i>
                </a>
              </li>

              <li className="footer-sites">
                <a
                  className="footer-sites-link text-decoration-none"
                  href="https://t.me/smartsolutions_system"
                  target="_blank"
                >
                  <i className="bx bxl-telegram"></i>
                </a>
              </li>

              <li className="footer-sites">
                <a
                  className="footer-sites-link text-decoration-none"
                  href="mailto:smartsolutionssystem@mail.ru"
                  target="_blank"
                >
                  <i className="bx bxl-gmail"></i>
                </a>
              </li>

              <li className="footer-sites">
                <a
                  className="footer-sites-link text-decoration-none"
                  href="tel:+998998341193"
                  target="_blank"
                >
                  <i className="bx bxl-whatsapp"></i>
                </a>
              </li>

              <li className="footer-sites">
                <a
                  className="footer-sites-link text-decoration-none"
                  href="https://youtube.com/@Smart_Solutions_System"
                  target="_blank"
                >
                  <i className="bx bxl-youtube"></i>
                </a>
              </li>

              <li className="footer-sites">
                <a
                  className="footer-sites-link text-decoration-none"
                  href="https://play.google.com/store/apps/details?id=uz.dilshodjon216.smart_water"
                  target="_blank"
                >
                  <i className="bx bxl-play-store"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <p className="foooter__txt py-4 ">© 2023 Smart Solutions System</p>
        </div>
      </footer>
    </>
  );
}

export default App;
