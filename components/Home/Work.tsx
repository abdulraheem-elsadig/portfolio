import React, { useState } from "react";

const compData = [
  {
    id: 1,
    compName: "Alpha Tech",
    job: "Front-end developer",
    description:
      "         ipsum dolor sit, amet consectetur adipisicing elit. A optio minima voluptatibus laborum exercitationem voluptatem nesciunt, tempore illum? Fuga, rem.",
    dateStart: "july 2021",
    dateEnd: "july 2022",
  },
  {
    id: 2,
    compName: "Bsheer Group",
    job: "Mobile developer",
    description:
      "        Lorem ipsum dolor sit, amet consectetur adipisicing elit. A optio minima voluptatibus laborum exercitationem voluptatem nesciunt, tempore illum? Fuga, rem.",
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
