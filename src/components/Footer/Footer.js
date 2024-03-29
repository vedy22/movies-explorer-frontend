import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer project__wrapper">
            <p className="footer__text">
                Учебный проект Яндекс.Практикум х BeatFilm.
            </p>
            <div className="footer__bottom">
                <p className="footer__copyright">
                    &copy; {new Date().getFullYear()}
                </p>
                <ul className="footer__links">
                    <li className="footer__links-item">
                        <a
                            href="https://practicum.yandex.ru/"
                            target="_blank"
                            className="project__link-border"
                            rel="noopener noreferrer"
                        >
                            Яндекс.Практикум
                        </a>
                    </li>
                    <li className="footer__links-item">
                        <a
                            href="https://github.com/vedy22"
                            target="_blank"
                            className="project__link-border"
                            rel="noopener noreferrer"
                        >
                            Github
                        </a>
                    </li>
                    <li className="footer__links-item">
                        <a
                            href="https://wa.me/79035559470"
                            target="_blank"
                            className="project__link-border"
                            rel="noopener noreferrer"
                        >
                            WhatsApp
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
