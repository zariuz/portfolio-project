import React from 'react';
// REACT FONTAWESOME IMPORTS
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">
          <span class="logo">ЕН</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} style={{color: '#fff'}} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Главная <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Обо мне
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Навыки
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#">
                Опыт работы
              </a>
            </li> */}
            <li className="nav-item">
              <a className="nav-link" href="#">
                Портфолио
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Контакты
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
