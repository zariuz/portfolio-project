import React from 'react';
import {Link} from 'react-scroll';
// REACT FONTAWESOME IMPORTS
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
      <div className="container">
        <Link smooth={true} to="home" className="navbar-brand" href="#">
          <span class="logo">ЕН</span>
        </Link>
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
              <Link smooth={true} to="home" className="nav-link" href="#">
                Главная <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="about" offset={-83} className="nav-link" href="#">
                Обо мне
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                to="services"
                offset={-83}
                className="nav-link"
                href="#">
                Навыки
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                to="portfolio"
                offset={-83}
                className="nav-link"
                href="#">
                Портфолио
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                to="contacts"
                offset={-83}
                className="nav-link"
                href="#">
                Контакты
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
