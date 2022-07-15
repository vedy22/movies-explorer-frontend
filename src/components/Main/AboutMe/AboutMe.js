import React from "react";
import "./AboutMe.css";
import studentPhoto from "../../../images/student-photo.jpg";

function AboutMe() {
  return (
    <section className="student project__wrapper">
      <h2 className="main__title" id="Студент">
        Студент
      </h2>

      <div className="student__info">
        <div className="student__left-block">
          <h3 className="student__name">Виталий</h3>
          <p className="student__about">Фронтенд-разработчик, 30 лет</p>
          <p className="student__description">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <ul className="student__links">
            <li className="student__link">
              <a
                href="https://facebook.com/"
                target="_blank"
                className="project__link"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li className="student__link">
              <a
                href="https://github.com/vedy22"
                target="_blank"
                className="project__link"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
        <div className="student__photo">
          <img
            src={studentPhoto}
            alt="Виталий"
            className="student__photo-card"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
