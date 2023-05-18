/* eslint-disable react/no-unknown-property */
// import React from "react";
import "./Videos.css";
import right from "../../assets/images/hero-btn.png";


const Videos = () => {
  return (<>
  
    <section className="videos">

      <h2 className="videos__header">Videolar</h2>

      <div className="container videos__constainer">
        <ul className="videos__list">

          <li className="videos__item">       
            <iframe  className="videos__you" width="400" height="224" src="https://www.youtube.com/embed/FUg2JMqQdMo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </li>

          <li className="videos__item">       
            <iframe  className="videos__you" width="400" height="224" src="https://www.youtube.com/embed/FUg2JMqQdMo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </li>

          <li className="videos__item">       
            <iframe  className="videos__you" width="400" height="224" src="https://www.youtube.com/embed/FUg2JMqQdMo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </li>

        </ul>

        <button className="more-btn">
          <img src={right} alt="right" width="20" height="16" />
          <span className="more-btn-span">Bacha videolar</span>
        </button>

      </div>
    </section>

  </>);
};

export default Videos;
