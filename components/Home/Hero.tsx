import React, { useState, useEffect } from "react";
import useTranslation from "next-translate/useTranslation";
import useScroll from "../../hooks/useScroll";

export default function Hero() {
  const { t, lang } = useTranslation("common");
  const scrollY = useScroll();
  useEffect(() => {
    const textDisplay: any = document.getElementById("text");
    const phrases: string[] = ["Fullstack Developer.", "Mobile Developer."];
    let i = 0;
    let j = 0;
    let currentPhrase: string[] = [];
    let isDeleting = false;
    let isEnd = false;
    let timer: any;
    function loop() {
      isEnd = false;
      textDisplay.innerHTML = currentPhrase.join("");

      if (i < phrases.length) {
        if (!isDeleting && j <= phrases[i].length) {
          currentPhrase.push(phrases[i][j]);
          j++;
          textDisplay.innerHTML = currentPhrase.join("");
        }

        if (isDeleting && j <= phrases[i].length) {
          currentPhrase.pop();
          j--;
          textDisplay.innerHTML = currentPhrase.join("");
        }

        if (j == phrases[i].length) {
          isEnd = true;
          isDeleting = true;
        }

        if (isDeleting && j === 0) {
          currentPhrase = [];
          isDeleting = false;
          i++;
          if (i === phrases.length) {
            i = 0;
          }
        }
      }
      const time = isEnd ? 2000 : isDeleting ? 100 : 200;
      timer = setTimeout(loop, time);
    }
    loop();
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="hero" id="home">
      <div className="container">
        <span className="hero__static-text">{`Hi, I'm ${t("devname")}`}</span>
        <br />
        <span className="hero__static-text">A</span>
        <span className="hero__dynamic-text" id="text"></span>
        <br />
        <span className="hero__paragraph">
          {`that's likes to use new technologies to build creative stuff and bring
          ideas to life.`}
        </span>
        <div className="hero__button-container">
          <button className="btn btn__outline">
            <span>Contact Me</span>
          </button>
          <button className="btn btn__solid">
            <span>Contact Me</span>
          </button>
        </div>
      </div>
      {/* <h1 className="hero__a">A</h1> */}
      <img
        src="/assets/hand.png"
        alt=""
        className="hero__image"
        style={{ transform: `translateX(${scrollY}px)` }}
      />
      <span
        className="bg-text-l"
        style={{ transform: `translateX(-${scrollY}px)` }}
      >{`</>`}</span>
    </div>
  );
}
