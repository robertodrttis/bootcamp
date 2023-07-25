import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Jornada</h2>
      <span className="section__subtitle">Sua jornada até o full stack</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Front End</h3>
                <span className="qualification__subtitle">
                  Html + css + Js
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2 meses
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Back end</h3>
                <span className="qualification__subtitle">
                  Nodejs , SQL
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2 meses
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Aplicações e projetos</h3>
                <span className="qualification__subtitle">
                  Git e Repositorio
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2 Meses
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
              </div>

              <div>
                <h3 className="qualification__title">Estagio</h3>
                <span className="qualification__subtitle">
                  Trabalhando comigo
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 3 meses
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Dev full stack</h3>
                <span className="qualification__subtitle">
                  Certificação
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> Salario alto
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Bora lá?</h3>
                <span className="qualification__subtitle">
                  Code and Code
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> Até aonde sua mente pode te levar?
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
