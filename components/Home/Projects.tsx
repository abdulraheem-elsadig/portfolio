import React from "react";
import useScroll from "../../hooks/useScroll";
import ProjectCard from "../Card/ProjectCard";

export default function Projects() {
  const scrollY = useScroll();

  const projectsList = [
    {
      id: 1,
      title: "Bsheer App",
      discription: "An Ecommerce application for sealing all car needs",
      image: "/assets/bsheer.png",
    },
    {
      id: 2,
      title: "Tekturk Website",
      discription: "A real state website for delivering content to costomers",
      image: "/assets/tekturk.jpg",
    },
  ];

  return (
    <section className="section">
      <div className="projects container ">
        <div className="section__title-container">
          <span className="section__title">2. Projects</span>
          <span className="section__line" />
        </div>

        <ul className="projects__list">
          {projectsList.map((itemData, index) => (
            <li key={index}>
              <ProjectCard data={itemData} />
            </li>
          ))}
        </ul>
      </div>
      <div
        className="bg-text-l"
        style={{ transform: `translateX( calc(-200vh + ${scrollY}px))` }}
      >
        PROJECTS
      </div>
    </section>
  );
}
