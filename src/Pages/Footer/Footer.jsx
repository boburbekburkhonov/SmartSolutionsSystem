// import React from "react";
import "./Footer.css";
// eslint-disable-next-line no-unused-vars
import logo from "../../assets/images/logo1.svg"

const Footer = () => {
  return (<>
  
    <footer className="footer">
      <div className="container footer__container">

        <div className="footer__top">
          <img className="footer_logo" src={logo} width={55} height={55} alt="logo" />
          <h2 className="footer__header">Smart solution System</h2>

        </div>

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
    
  </>);
};

export default Footer;
