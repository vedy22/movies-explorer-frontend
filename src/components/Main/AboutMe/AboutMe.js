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
          <h3 className="student__name">Татьяна</h3>
          <p className="student__about">Front-end developer, 32 года</p>
          <p className="student__description">
            Я родилась в Чехове. Живу в Москве, закончила факультет финансы и кредит в РГСУ. Я люблю танцевать.
            Недавно начала кодить. После того, как пройду курс по веб-разработке, планирую
            заниматься фриланс-заказами и уйти с постоянной работы.
          </p>
          <ul className="student__links">
            <li className="student__link">
              <a
                href="https://wa.me/79035559470"
                target="_blank"
                className="project__link"
                rel="noopener noreferrer"
              >
                WhatsApp
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
