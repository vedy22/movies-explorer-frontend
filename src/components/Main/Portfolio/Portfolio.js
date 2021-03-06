import React from "react";
import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio project__wrapper">
      <h3 className="portfolio__title">Портфолио</h3>

      <ul className="portfolio__items">
        <li className="portfolio__item">
          <a
            href="https://github.com/vedy22/how-to-learn-main"
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio__link project__link"
          >
            Статичный сайт
          </a>
        </li>
        <li className="portfolio__item">
          <a
            href="https://github.com/vedy22/russian-travel23"
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio__link project__link"
          >
            Адаптивный сайт
          </a>
        </li>
        <li className="portfolio__item">
          <a
            href="https://github.com/vedy22/react-mesto-auth"
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio__link project__link"
          >
            Одностраничное приложение
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
