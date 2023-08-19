import React, { useEffect, useState } from "react";
import "./NewsAbout.css";
import { api, apiImage } from "../../Api/Api";
import { useParams } from "react-router-dom";

const NewsAbout = (props) => {
  const { selectLan } = props;
  const [dataNews, setDataNews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`${api}/users/news/addition/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setDataNews(data);
      });
  }, [selectLan]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [props.location]);

  dataNews.sort((a, b) => {
    if (new Date(a.createAt).getTime() > new Date(b.createAt).getTime()) {
      return -1;
    }
  });

  return (
    <>
      <main className="main">
        <h2 className="a_news__header">
          {window.localStorage.getItem("title")}
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
                          src={`${apiImage}/${item?.link}`}
                          alt=""
                          className="a_news__img m-auto"
                        />

                        <div className="a_news__body text-center">
                          <h3 className="a_news__title">{item?.title}</h3>
                          {item?.desc.split("!@#").map((e) => {
                            return (
                              <>
                                <span className="a_news__desc text-start d-inline-block">
                                  {e}
                                </span>
                              </>
                            );
                          })}
                          <p className="a_news_location">{item?.location}</p>
                          <strong className="a_news__date d-none">
                            {item?.createAt}
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
