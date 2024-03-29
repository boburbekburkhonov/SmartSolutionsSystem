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
import { api, apiImage } from "../../Api/Api";

const News = (props) => {
  const navigate = useNavigate();

  const { selectLan } = props;
  const [dataNews, setDataNews] = useState([]);

  useEffect(() => {
    fetch(`${api}/users/newsThree/${selectLan}`)
      .then((res) => res.json())
      .then((data) => {
        setDataNews(data);
      });
  }, [selectLan]);

  const responsive = {
    0: { items: 1 },
    650: { items: 2 },
    1255: { items: 3 },
  };

  const items = dataNews?.map((item, index) => {
    return (
      <div
        key={index}
        onClick={() => {
          window.localStorage.setItem("title", item?.title);
          navigate(`/news/about/${item.id}`);
        }}
        className="news__item"
      >
        <img src={`${apiImage}/${item?.img}`} alt="" className="news__img" />

        <div className="news__body">
          <h3 className="news__header">{item?.title}</h3>
          <p className="news_location">{item?.location}</p>
          <strong className="news__date d-none">{item?.createAt}</strong>
        </div>
      </div>
    );
  });

  return (
    <>
      <section id="news" className="news__section">
        <div className="container news__container">
          <div className="news__top">
            <h2 className="header__news mb-0 m-auto mb-5">
              {selectLan == "uz"
                ? "Yangiliklar"
                : selectLan == "eng"
                ? "News"
                : null}
            </h2>
          </div>

          <div className="news__bottom">
            <ul className="news__list">
              <AliceCarousel
                // autoPlay={true}
                autoPlayStrategy="all"
                responsive={responsive}
                animationDuration="900"
                disableDotsControls={true}
                // autoPlayInterval={2000}
                mouseTracking
                items={items}
              />
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default News;