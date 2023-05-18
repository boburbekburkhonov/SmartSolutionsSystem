// import React from "react";
// import React from 'react';
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./News.css";
// eslint-disable-next-line no-unused-vars
import right from "../../assets/images/hero-btn.png";

const handleDragStart = (e) => e.preventDefault();
const responsive = {
  0: { items: 1 },
  900: { items: 2 },
  1255: { items: 3 },
};

const items = [
  <ul key={9}>
    <li
      key={2}
      onDragStart={handleDragStart}
      role="presentation"
      className="news__item"
    >
      <img
        src="https://images.pexels.com/photos/15205276/pexels-photo-15205276.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
        width={336}
        height={270}
        alt=""
        className="news__img"
      />

      <div className="news__body">
        <h3 className="news__header">Lorem, ipsum dolor.</h3>
        <p className="news__desc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
          suscipit, tenetur quibusdam, numquam velit eligendi quas ad laborum
          vel dolor non necessitatibus repudiandae dolore quisquam sapiente
          voluptatum a! Cupiditate praesentium ut odit ipsa veritatis incidunt
          nihil dicta quae error? Atque architecto ipsum, nam doloremque qui
          reiciendis quidem nisi repellat dolor?
        </p>
        <p className="news_location">Lorem, ipsum.</p>
        <strong className="news__date">Lorem, ipsum dolor.</strong>
      </div>
    </li>
  </ul>,
  <ul key={9}>
    <li
      key={2}
      onDragStart={handleDragStart}
      role="presentation"
      className="news__item"
    >
      <img
        src="https://images.pexels.com/photos/15205276/pexels-photo-15205276.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
        width={336}
        height={270}
        alt=""
        className="news__img"
      />

      <div className="news__body">
        <h3 className="news__header">Lorem, ipsum dolor.</h3>
        <p className="news__desc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
          suscipit, tenetur quibusdam, numquam velit eligendi quas ad laborum
          vel dolor non necessitatibus repudiandae dolore quisquam sapiente
          voluptatum a! Cupiditate praesentium ut odit ipsa veritatis incidunt
          nihil dicta quae error? Atque architecto ipsum, nam doloremque qui
          reiciendis quidem nisi repellat dolor?
        </p>
        <p className="news_location">Lorem, ipsum.</p>
        <strong className="news__date">Lorem, ipsum dolor.</strong>
      </div>
    </li>
  </ul>,
  <ul key={9}>
    <li
      key={2}
      onDragStart={handleDragStart}
      role="presentation"
      className="news__item"
    >
      <img
        src="https://images.pexels.com/photos/15205276/pexels-photo-15205276.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
        width={336}
        height={270}
        alt=""
        className="news__img"
      />

      <div className="news__body">
        <h3 className="news__header">Lorem, ipsum dolor.</h3>
        <p className="news__desc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
          suscipit, tenetur quibusdam, numquam velit eligendi quas ad laborum
          vel dolor non necessitatibus repudiandae dolore quisquam sapiente
          voluptatum a! Cupiditate praesentium ut odit ipsa veritatis incidunt
          nihil dicta quae error? Atque architecto ipsum, nam doloremque qui
          reiciendis quidem nisi repellat dolor?
        </p>
        <p className="news_location">Lorem, ipsum.</p>
        <strong className="news__date">Lorem, ipsum dolor.</strong>
      </div>
    </li>
  </ul>,
  <ul className="list-unstyled m-0" key={9}>
    <li
      key={2}
      onDragStart={handleDragStart}
      role="presentation"
      className="news__item"
    >
      <img
        src="https://images.pexels.com/photos/15205276/pexels-photo-15205276.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
        width={336}
        height={270}
        alt=""
        className="news__img"
      />

      <div className="news__body">
        <h3 className="news__header">Lorem, ipsum dolor.</h3>
        <p className="news__desc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
          suscipit, tenetur quibusdam, numquam velit eligendi quas ad laborum
          vel dolor non necessitatibus repudiandae dolore quisquam sapiente
          voluptatum a! Cupiditate praesentium ut odit ipsa veritatis incidunt
          nihil dicta quae error? Atque architecto ipsum, nam doloremque qui
          reiciendis quidem nisi repellat dolor?
        </p>
        <p className="news_location">Lorem, ipsum.</p>
        <strong className="news__date">Lorem, ipsum dolor.</strong>
      </div>
    </li>
  </ul>,
];

const News = () => {
  return (
    <>
      <section className="news__section">
        <div className="container news__container">
          <div className="news__top">
            <div></div>
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