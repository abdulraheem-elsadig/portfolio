import React, { useState } from "react";

const compData = [
  {
    id: 1,
    compName: "Alpha Tech",
    job: "Front-end developer",
    description:
      "Worked on Alpha Tech in a position of Front-end developer , responsible of making responsive and scaleable user interfaces using react and next js freamwork",
    dateStart: "july 2021",
    dateEnd: "july 2022",
  },
  {
    id: 2,
    compName: "Bsheer Group",
    job: "Mobile developer",
    description:
      "Worked at BSHEER advertising in a position of Mobile Developer, responsible of building mobile apps for both IOS and Android devices using React Native fream work",
    dateStart: "june 2021",
    dateEnd: "september 2022",
  },
];
export default function Work() {
  const [selectedJobIndex, setSelectedJobIndex] = useState(0);
  return (
    <div className="work container section">
      <div className="section__title-container">
        <span className="section__title">1. Work Experience</span>
        <span className="section__line" />
      </div>
      <div className="work__table">
        <ul className="work__table-select">
          {compData.map((item, index) => (
            <li
              className={`work__comp-name ${
                selectedJobIndex == index ? "work__comp-name--active" : ""
              }`}
              key={index}
              onClick={() => setSelectedJobIndex(index)}
            >
              <span>{item.compName}</span>
            </li>
          ))}
        </ul>

        <p className="work__table-description">
          {compData[selectedJobIndex].description}
        </p>
      </div>
    </div>
  );
}
