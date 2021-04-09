import React from 'react';
import Typed from 'react-typed';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <div id="home" className="header-wraper">
      <div className="main-info">
        <canvas></canvas>
        <h1>Front-end web developer</h1>
        <Typed
          className="typed-text"
          strings={['JavaScript', 'React', 'Redux', 'TypeScript']}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <Link
          smooth={true}
          to="contacts"
          offset={-83}
          href="#"
          className="btn-main-offer">
          связаться со мной
        </Link>
      </div>
    </div>
  );
};

export default Header;
