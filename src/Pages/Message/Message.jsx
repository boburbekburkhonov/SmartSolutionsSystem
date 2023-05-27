/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import location from "../../assets/images/location.png";
import email from "../../assets/images/email.png";
import phone from "../../assets/images/call.png";
import "./Message.css";

const Message = (props) => {
  const { selectLan } = props;

  const sendMessage = (e) => {
    e.preventDefault();

    const { name, email, topic, message } = e.target;

    fetch("http://localhost:5656/users/create", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name: name.value,
        mail: email.value,
        title: topic.value,
        desc: message.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

    name.value = "";
    email.value = "";
    topic.value = "";
    message.value = "";
  };

  return (
    <section id="message" className="message">
      <div className="container">
        <h2 className="message-heading">
          {selectLan == "uz"
            ? "Aloqa"
            : selectLan == "eng"
            ? "Contact us"
            : null}
        </h2>

        <div className="message-wrapper d-flex align-items-center justify-content-between flex-wrap">
          <div className="message-location-wrapper">
            <div>
              <div className="message-location-item d-flex align-items-center">
                <img
                  className="message-location-img"
                  src={location}
                  alt="location"
                  width={35}
                  height={52}
                />
                <div className="message-location-item-wrapper">
                  <h4 className="message-location-item-wrapper-header">
                    {selectLan == "uz"
                      ? "Joylashuv:"
                      : selectLan == "eng"
                      ? "Location:"
                      : null}
                  </h4>
                  <p className="message-location-item-wrapper-desc">
                    Mo'ynoq ko'chasi 249-uy
                  </p>
                </div>
              </div>

              <div className="message-location-item d-flex align-items-center">
                <img
                  className="message-email-img"
                  src={email}
                  alt="location"
                  width={40}
                  height={32}
                />
                <div className="message-location-item-wrapper">
                  <h4 className="message-location-item-wrapper-header">
                    Email:
                  </h4>
                  <p className="message-location-item-wrapper-desc">
                    smartsolutionssystem@mail.ru
                  </p>
                </div>
              </div>

              <div className="message-location-item d-flex align-items-center">
                <img
                  className="message-email-phone"
                  src={phone}
                  alt="location"
                  width={40}
                  height={40}
                />
                <div className="message-location-item-wrapper">
                  <h4 className="message-location-item-wrapper-header">
                    {selectLan == "uz"
                      ? "Telefon:"
                      : selectLan == "eng"
                      ? "Phone:"
                      : null}
                  </h4>
                  <p className="message-location-item-wrapper-desc">
                    +998 55 506-00-64
                  </p>
                </div>
              </div>
            </div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2999.0265968088493!2d69.3321567!3d41.2647568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae5fdd0efd714f%3A0xe9d97c22dd4cc803!2sSmart%20Solutions%20System!5e0!3m2!1sru!2s!4v1684385824548!5m2!1sru!2s"
              className="message-location"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="message-send-wrapper">
            <form className="message-send-form" onSubmit={sendMessage}>
              <div className="d-flex align-items-center justify-content-between flex-wrap">
                <div className="message-send-form-input-wrapper">
                  <label className="message-send-form-label" htmlFor="nameId">
                    {selectLan == "uz"
                      ? "Ism:"
                      : selectLan == "eng"
                      ? "Name:"
                      : null}
                  </label>
                  <input
                    className="message-send-form-input form-control mt-2"
                    type="text"
                    id="nameId"
                    name="name"
                    required
                  />
                </div>

                <div className="message-send-form-input-wrapper message-send-form-input-wrapper-email">
                  <label className="message-send-form-label" htmlFor="emailId">
                    Email:
                  </label>
                  <input
                    className="message-send-form-input form-control mt-2"
                    type="text"
                    id="emailId"
                    name="email"
                    required
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="message-send-form-label" htmlFor="topicId">
                  {selectLan == "uz"
                    ? "Mavzu:"
                    : selectLan == "eng"
                    ? "Subject:"
                    : null}
                </label>
                <input
                  className="message-send-form-input-topic form-control mt-2"
                  type="text"
                  id="topicId"
                  name="topic"
                  required
                />
              </div>

              <div className="mt-4">
                <label className="message-send-form-label" htmlFor="messageId">
                  {selectLan == "uz"
                    ? "Xabar:"
                    : selectLan == "eng"
                    ? "Message:"
                    : null}
                </label>
                <textarea
                  className="message-send-form-input-text-aria form-control mt-2"
                  name="message"
                  id="messageId"
                  required
                ></textarea>
              </div>

              <button className="message-send-form-btn">
                {selectLan == "uz"
                  ? "Xabarni yuborish"
                  : selectLan == "eng"
                  ? "Send message"
                  : null}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Message;
