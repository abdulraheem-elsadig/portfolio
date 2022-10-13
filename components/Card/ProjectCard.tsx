import Image from "next/image";
import React, { useRef } from "react";
import useObserver from "../../hooks/useObserver";

interface propsType {
  data: {
    image: string;
    title: string;
    discription: string;
  };
}

export default function ProjectCard({ data }: propsType) {
  const cardRef = useRef();
  const imageRef = useRef();
  const textRef = useRef();
  const titleRef = useRef();

  const isCardVisible = useObserver(cardRef);
  const isImageVisible = useObserver(imageRef);
  const isTextVisible = useObserver(textRef);
  const isTitleVisible = useObserver(titleRef);

  return (
    <div
      ref={cardRef}
      className={`project-card ${isCardVisible ? "show" : "hide"}`}
    >
      <div className="project-card__text-container">
        <h3
          ref={titleRef}
          className={`project-card__title ${isTitleVisible ? "show" : ""}`}
        >
          {data.title}
        </h3>
        <p
          ref={textRef}
          className={`project-card__description ${
            isTitleVisible ? "show" : ""
          }`}
        >
          {data.discription}
        </p>
        <ul className="project-card__tags-list">
          <li className="project-card__tag">react native</li>
          <li className="project-card__tag">react queary</li>
          <li className="project-card__tag">redux</li>
        </ul>
      </div>
      <img
        ref={imageRef}
        src={data.image}
        alt="Project Image"
        className="project-card__image"
      />
    </div>
  );
}
