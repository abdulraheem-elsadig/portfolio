import Image from "next/image";
import React from "react";

interface propsType {
  data: {
    image: string;
    title: string;
    discription: string;
  };
}

export default function ProjectCard({ data }: propsType) {
  return (
    <div className="">
      <div className="project-card__before"></div>
      <div className="project-card">
        <div className="project-card__text-container">
          <h3 className="project-card__title">{data.title}</h3>
          <p className="project-card__description">{data.discription}</p>
          <ul className="project-card__tags-list">
            <li className="project-card__tag">react native</li>
            <li className="project-card__tag">react queary</li>
            <li className="project-card__tag">redux</li>
          </ul>
        </div>
        <img
          src={data.image}
          alt="Project Image"
          className="project-card__image"
        />
      </div>
    </div>
  );
}
