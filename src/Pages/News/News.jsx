// import React from "react";
// import React from 'react';
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./News.css";
// eslint-disable-next-line no-unused-vars
import right from "../../assets/images/hero-btn.png";
import { useEffect, useState } from "react";

const News = (props) => {
  const handleDragStart = (e) => e.preventDefault();

  const { selectLan } = props;
  const [dataNews, setDataNews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5656/users/news")
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

  const items = [
    <>
      <ul key={9}>
        {dataNews?.map((item, index) => {
          return (
            <>
              <li
                key={index}
                onDragStart={handleDragStart}
                role="presentation"
                className="news__item"
              >
                <img
                  src={item.img}
                  width={336}
                  height={270}
                  alt=""
                  className="news__img"
                />

                <div className="news__body">
                  <h3 className="news__header">{item.title}</h3>
                  <p className="news__desc">{item.desc}</p>
                  <p className="news_location">{item.location}</p>
                  <strong className="news__date">{item.createAt}</strong>
                </div>
              </li>
              ,
            </>
          );
        })}
      </ul>
    </>,
  ];

  return (
    <>
      <section className="news__section">
        <div className="container news__container">
          <div className="news__top">
            <div></div>
            <span></span>
            <h2 className="header__news">Yangiliklar</h2>

            <div>
              <button className="more-btn4">
                <img src={right} alt="right" width="20" height="16" />
                <span className="more-btn-span">Bacha yangiliklar</span>
              </button>
            </div>
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

            <button className="more-btn2">
              <img src={right} alt="right" width="20" height="16" />
              <span className="more-btn-span">Bacha yangiliklar</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default News;