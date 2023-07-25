import React from "react";
import "./about.css";
import AboutImg from "../../assets/eu.jpg";
import CV from "../../assets/Smith-Cv.pdf";
import Info from "./Info";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">José Roberto </h2>
      <span className="section__subtitle">Programador full stack</span>

      <div className="about__container container grid">
        <img src={AboutImg} alt="" className="about__img" />

        <div className="about__data">
          <Info />

          <p className="about__description">
              Desenvolvedor experiente em aplicações e conhecimento internacional, com grandes certificações em Hard Skills , React js, Angula, AngulaJs, Python, Nodejs, SQL.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
