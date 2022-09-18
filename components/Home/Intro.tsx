import React from "react";

export default function Intro() {
  return (
    <div className="intro container">
      <div>
        <div className="intro__sentance">
          <span className="intro__static-text">Experienced</span>
          <ul className="intro__text-list">
            <li>
              <span className="intro__dynamic-text">Front-End</span>
            </li>
            <li>
              <span className="intro__dynamic-text">Back-End</span>
            </li>
            <li>
              <span className="intro__dynamic-text">Mobile</span>
            </li>
          </ul>
        </div>
        <h1 className="intro__static-text">
          Developer
          {/* That Will Bring Your Ideas to Life */}
        </h1>
        <p className="intro__paragraph">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta quia
          harum nisi voluptates nulla obcaecati, a excepturi fugiat earum
          impedit ipsam hic eveniet optio amet. Distinctio quas
        </p>
        <div className="intro__button-container">
          <button className="btn btn__outline">
            <span>Contact Me</span>
          </button>
          <button className="btn btn__solid">
            <span>Contact Me</span>
          </button>
        </div>
      </div>
      <h1 className="intro__a">A</h1>
    </div>
  );
}
