import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faReact, faJs} from '@fortawesome/free-brands-svg-icons';
import {faDesktop, faFileCode} from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  return (
    <div id="services" className="services">
      <h1 className="py-5">Мои навыки</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faReact} size="2x" />
              </div>
              <h3>React</h3>
              <p>Разработка современных SPA приложений на React / Redux</p>
            </div>
          </div>
          {/* - */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faJs} size="2x" />
              </div>
              <h3>JavaScript / TypeScript</h3>
              <p>JavaScript ES6+, а так же навыки работы с TypeScript.</p>
            </div>
          </div>
          {/* - */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faFileCode} size="2x" />
              </div>

              <h3>HTML & CSS</h3>
              <p>HTML / CSS / SCSS / Bootstrap / Material UI / адаптивная верстка.</p>
            </div>
          </div>
          {/* - */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faDesktop} size="2x" />
              </div>
              <h3>UI/UX Design</h3>
              <p>Работа с Figma, Adobe Photoshop.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
