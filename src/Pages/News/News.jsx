/* eslint-disable react/prop-types */
// import React from "react";
// import React from 'react';
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./News.css";
// eslint-disable-next-line no-unused-vars
import right from "../../assets/images/hero-btn.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../Api/Api";

const News = (props) => {
  const navigate = useNavigate();

  const { selectLan } = props;
  const [dataNews, setDataNews] = useState([]);

  useEffect(() => {
    fetch(`${api}/users/news`)
      .then((res) => res.json())
      .then((data) => {
        setDataNews([]);
        const arr = data.filter((e) => e.len == selectLan);
        setDataNews(arr);
      });
  }, [selectLan]);

  const responsive = {
    0: { items: 1 },
    900: { items: 2 },
    1255: { items: 3 },
  };

  const items = dataNews?.map((item, index) => {
    return (
      <div key={index} className="news__item">
        <img
          src={item.img}
          width={336}
          height={270}
          alt=""
          className="news__img"
        />

        <div className="news__body">
          <h3 className="news__header">{item.title}</h3>
        </div>
      </div>
    );
  });

  return (
    <>
      <section id="news" className="news__section">
        <div className="container news__container">
          <div className="news__top">
            <h2 className="header__news mb-0 m-auto">
              {selectLan == "uz"
                ? "Yangiliklar"
                : selectLan == "eng"
                ? "News"
                : null}
            </h2>
          </div>

          <div className="mb-5">
            <button
              className="more-btn4 ms-auto"
              onClick={() => navigate("/news/about")}
            >
              <img src={right} alt="right" width="20" height="16" />
              <span className="more-btn-span">
                {selectLan == "uz"
                  ? "Barcha yangiliklar"
                  : selectLan == "eng"
                  ? "All News"
                  : null}
              </span>
            </button>
          </div>

          <div className="news__bottom">
            <ul className="news__list">
              <AliceCarousel
                autoPlay={true}
                infinite={true}
                autoPlayStrategy="all"
                responsive={responsive}
                animationDuration="2000"
                disableDotsControls={true}
                mouseTracking
                items={items}
              />
            </ul>

            <button
              className="more-btn2"
              onClick={() => navigate("/news/about")}
            >
              <img src={right} alt="right" width="20" height="16" />
              <span className="more-btn-span">
                {selectLan == "uz"
                  ? "Barcha yangiliklar"
                  : selectLan == "eng"
                  ? "All News"
                  : null}
              </span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default News;