/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./NewsAbout.css";
import { api } from "../../Api/Api";

const NewsAbout = (props) => {
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

  return (
    <>
      <main className="main">
        <h2 className="a_news__header">
          {selectLan == "uz"
            ? "Barcha Yangiliklar"
            : selectLan == "eng"
            ? "All News"
            : null}
        </h2>

        <section className="a_news__about">
          <div className="container news__about__container">
            <ul className="a_news__list">
              {dataNews.length == 0 ? (
                <span className="loader"></span>
              ) : (
                <>
                  {dataNews?.map((item, index) => {
                    return (
                      <li
                        key={index}
                        role="presentation"
                        className="a_news__item"
                      >
                        <img
                          src={item.img}
                          width={336}
                          height={270}
                          alt=""
                          className="a_news__img"
                        />

                        <div className="a_news__body">
                          <h3 className="a_news__title">{item.title}</h3>
                          <p className="a_news__desc">{item.desc}</p>
                          <p className="a_news_location">{item.location}</p>
                          <strong className="a_news__date">
                            {item.createAt}
                          </strong>
                        </div>
                      </li>
                    );
                  })}
                </>
              )}
            </ul>
          </div>
        </section>
      </main>
    </>
  );
};

export default NewsAbout;
