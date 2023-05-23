/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./VideoAbout.css";
import { useNavigate } from "react-router-dom";
import { api } from "../../Api/Api";

const VideoAbout = (props) => {
  const { selectLan } = props;
  const [dataVideos, setDataVideos] = useState([]);

  useEffect(() => {
    fetch(`${api}/users/cases`)
      .then((res) => res.json())
      .then((data) => {
        setDataVideos([]);
        const arr = data.filter((e) => e.len == selectLan);
        setDataVideos(arr);
      });
  }, [selectLan]);

  return (
    <>
      <main className="main">
        <h2 className="a_video__header">
          {selectLan == "uz"
            ? "Barcha Videolar"
            : selectLan == "eng"
            ? "All Videos"
            : null}
        </h2>

        <section className="a_video__about">
          <div className="container video__about__container">
            {!dataVideos.length ? (
              <span className="loader"></span>
            ) : (
              <ul className="a_videos__list">
                {dataVideos.map((item, index) => {
                  return (
                    <li className="videos__item" key={index}>
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
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default VideoAbout;
