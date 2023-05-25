/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
// import React from "react";
import "./Videos.css";
import right from "../../assets/images/hero-btn.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../Api/Api";

const Videos = (props) => {
  const { selectLan } = props;
  const [dataVideos, setDataVideos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${api}/users/casesThree`)
      .then((res) => res.json())
      .then((data) => {
        setDataVideos([]);
        const arr = data.filter((e) => e.len == selectLan);
        setDataVideos(arr);
      });
  }, [selectLan]);

  return (
    <>
      <section id="videos" className="videos">
        <h2 className="videos__header">
          {selectLan == "uz"
            ? "Videolar"
            : selectLan == "eng"
            ? "Videos"
            : null}
        </h2>

        <div className="container videos__constainer">
          <ul className="videos__list d-flex align-items-center justify-content-between flex-wrap">
            {dataVideos.map((item, index) => {
              return (
                <li className="videos__item mb-3" key={index}>
                  <iframe
                    className="videos__you"
                    width="400"
                    height="224"
                    src={item.link}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </li>
              );
            })}
          </ul>

          <a
            href="#"
            className="more-btn3 text-decoration-none"
            onClick={() => navigate("/video/about")}
          >
            <img src={right} alt="right" width="20" height="16" />
            <span className="more-btn-span">
              {selectLan == "uz"
                ? "Barcha videolar"
                : selectLan == "eng"
                ? "All Videos"
                : null}
            </span>
          </a>
        </div>
      </section>
    </>
  );
};

export default Videos;
