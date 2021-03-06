import React from "react";
import { NavLink } from "react-router-dom";
import "./NavTab.css";

function NavTab({ closeMenu }) {
  return (
    <nav>
      <ul className="header__nav">
        <li className="header__nav-item">
          <NavLink
            exact
            to="/"
            className="project__link"
            activeClassName="project__link_active"
            onClick={closeMenu}
          >
            Главная
          </NavLink>
        </li>
        <li className="header__nav-item">
          <NavLink
            to="/movies"
            className="project__link-border"
            activeClassName="project__link_active"
            onClick={closeMenu}
          >
            Фильмы
          </NavLink>
        </li>
        <li className="header__nav-item">
          <NavLink
            to="/saved-movies"
            className="project__link-border"
            activeClassName="project__link_active"
            onClick={closeMenu}
          >
            Сохранённые фильмы
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;
