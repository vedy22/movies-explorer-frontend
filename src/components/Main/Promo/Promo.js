import React from "react";
import "./Promo.css";

function Promo() {
  return (
    <section className="promo project__wrapper">
      <div className="promo__block">
        <h1 className="promo__title">
          Учебный проект студента факультета Веб-разработки.
        </h1>
        <ul className="promo__list">
          <li className="promo__item">
            <a
              href="#О проекте"
              target="_self"
              rel="noopener noreferrer"
              className="promo__link project__link"
            >
              О проекте
            </a>
          </li>
          <li className="promo__item">
            <a
              href="#Технологии"
              target="_self"
              rel="noopener noreferrer"
              className="promo__link project__link"
            >
              Технологии
            </a>
          </li>
          <li className="promo__item">
            <a
              href="#Студент"
              target="_self"
              rel="noopener noreferrer"
              className="promo__link project__link"
            >
              Студент
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Promo;
