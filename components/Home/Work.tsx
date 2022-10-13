import React, { useState, useEffect, useRef } from "react";
import useObserver from "../../hooks/useObserver";
import useScroll from "../../hooks/useScroll";

const compData = [
  {
    id: 1,
    compName: "Bsheer Group",
    job: "Mobile developer",
    description:
      "Worked at BSHEER advertising in a position of Mobile Developer, responsible of building mobile apps for both IOS and Android devices using React Native fream work",
    dateStart: "june 2021",
    dateEnd: "september 2022",
  },
  {
    id: 2,
    compName: "Alpha Tech",
    job: "Front-end developer",
    description:
      "Worked on Alpha Tech in a position of Front-end developer , responsible of making responsive and scaleable user interfaces using react and next js freamwork",
    dateStart: "july 2021",
    dateEnd: "july 2022",
  },
];
export default function Work() {
  const timePoint = useRef();
  const scrollY = useScroll();
  const isTimePointVisible = useObserver(timePoint);

  return (
    <section className="section" id="work">
      <div className="work container">
        <div className="section__title-container">
          <span className="section__title">1. Work Experience</span>
          <span className="section__line" />
        </div>
        <div className="work__time-line">
          {compData.map((item: any, index: number) => (
            <div
              ref={timePoint}
              key={index}
              className={`work__line-point ${
                isTimePointVisible ? "show" : ""
              } `}
            >
              <h3 className="work__job">{item.job}</h3>
              <h3 className="work__comp">At {item.compName}</h3>
              <p className="work__description">{item.description}</p>
              <span className="work__year">2022</span>
            </div>
          ))}
        </div>
      </div>
      <div
        className="bg-text-r"
        style={{ transform: `translateX(calc(100vh - ${scrollY}px))` }}
      >
        WORK
      </div>
    </section>
  );
}
