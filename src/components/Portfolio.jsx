import React from 'react';

import medium from '../images/medium.jpeg';
import theVenue from '../images/the_venue.jpeg';
import reactPizza from '../images/pizza.jpeg';
import socialNetwork from '../images/social_network.jpeg';
import mobileShop from '../images/mobile.jpeg';
// FONTAWESOME IMPORTS
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearchPlus} from '@fortawesome/free-solid-svg-icons';
// REACT POPUPBOX
import {PopupboxManager, PopupboxContainer} from 'react-popupbox';
import 'react-popupbox/dist/react-popupbox.css';

const Portfolio = () => {
  // Medium Clone
  const openPopupboxMediumClone = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={medium} alt="Medium Clone." />
        <p>
          Проект Medium Clone на React. API проекта взято с
          https://github.com/gothinkster/realworld . Состояние приложения реализована
          через context.
        </p>
        <b>Demo:</b>{' '}
        <a
          className="hyper-link"
          onClick={() =>
            window.open('https://vigilant-leavitt-e5d21a.netlify.app/', '_blank')
          }>
          https://vigilant-leavitt-e5d21a.netlify.app/
        </a>
        <br />
        <b>GitHub:</b>{' '}
        <a
          className="hyper-link"
          onClick={() => window.open('https://github.com/zariuz/medium-blog')}>
          https://github.com/zariuz/medium-blog
        </a>
      </>
    );
    PopupboxManager.open({
      content,
      config: {
        titleBar: {
          enable: true,
          text: 'Medium Clone',
        },
        fadeIn: true,
        fadeInSpeed: 500,
      },
    });
  };

  // The Venue
  const openPopupboxTheVenue = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={theVenue} alt="The Venue." />
        <p>Одностраничный лендинг, музыкального события "The Venue" на React.</p>
        <b>Demo:</b>{' '}
        <a
          className="hyper-link"
          onClick={() => window.open('https://zariuz.github.io/the_venue/', '_blank')}>
          https://zariuz.github.io/the_venue/
        </a>
        <br />
        <b>GitHub:</b>{' '}
        <a
          className="hyper-link"
          onClick={() => window.open('https://github.com/zariuz/the_venue')}>
          https://github.com/zariuz/the_venue
        </a>
      </>
    );
    PopupboxManager.open({
      content,
      config: {
        titleBar: {
          enable: true,
          text: 'The Venue',
        },
        fadeIn: true,
        fadeInSpeed: 500,
      },
    });
  };

  // Pizza Shop
  const openPopupboxPizzaShop = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={reactPizza} alt="Pizza Shop" />
        <p>Магазин пицц, на React и Redux. API и БД реализовано на Firebase.</p>
        <b>Demo:</b>{' '}
        <a
          className="hyper-link"
          onClick={() => window.open('https://pizza-shop-2be19.web.app/', '_blank')}>
          https://pizza-shop-2be19.web.app/
        </a>
        <br />
        <b>GitHub:</b>{' '}
        <a
          className="hyper-link"
          onClick={() => window.open('https://github.com/zariuz/pizza-shop', '_blank')}>
          https://github.com/zariuz/pizza-shop
        </a>
      </>
    );
    PopupboxManager.open({
      content,
      config: {
        titleBar: {
          enable: true,
          text: 'Pizza Shop',
        },
        fadeIn: true,
        fadeInSpeed: 500,
      },
    });
  };

  // Social Network
  const openPopupboxSocialNetwork = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={socialNetwork}
          alt="Social Network"
        />
        <p>
          Социальная сеть, на TypeScript, React и Redux. API взято с учебного проекта
          IT-KAMASUTRA: https://social-network.samuraijs.com/.
        </p>
        <b>Demo:</b>{' '}
        <a
          className="hyper-link"
          onClick={() =>
            window.open('https://zariuz.github.io/social-network-react/', '_blank')
          }>
          https://zariuz.github.io/social-network-react/
        </a>
        <br />
        <b>GitHub:</b>{' '}
        <a
          className="hyper-link"
          onClick={() =>
            window.open('https://github.com/zariuz/social-network-react', '_blank')
          }>
          https://github.com/zariuz/social-network-react
        </a>
      </>
    );
    PopupboxManager.open({
      content,
      config: {
        titleBar: {
          enable: true,
          text: 'Social Network',
        },
        fadeIn: true,
        fadeInSpeed: 500,
      },
    });
  };

  // Mobile Shop
  const openPopupboxMobileShop = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={mobileShop} alt="Mobile Shop" />
        <p>Магазин мобильных телефонов, на React и Redux.</p>
        <b>Demo:</b>{' '}
        <a
          className="hyper-link"
          onClick={() =>
            window.open('https://nameless-ocean-89025.herokuapp.com/', '_blank')
          }>
          https://nameless-ocean-89025.herokuapp.com/
        </a>
        <br />
        <b>GitHub:</b>{' '}
        <a
          className="hyper-link"
          onClick={() =>
            window.open('https://github.com/zariuz/mobile-shop-react-redux', '_blank')
          }>
          https://github.com/zariuz/mobile-shop-react-redux
        </a>
      </>
    );
    PopupboxManager.open({
      content,
      config: {
        titleBar: {
          enable: true,
          text: 'Mobile Shop',
        },
        fadeIn: true,
        fadeInSpeed: 500,
      },
    });
  };

  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">Портфолио</h1>
        <div className="image-box-wrapper row">
          <div className="portfolio-image-box" onClick={openPopupboxMediumClone}>
            <img className="portfolio-image" src={medium} alt="Medium Clone на React." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxTheVenue}>
            <img className="portfolio-image" src={theVenue} alt="The Venue на React." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxPizzaShop}>
            <img className="portfolio-image" src={reactPizza} alt="Pizza shop" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxSocialNetwork}>
            <img className="portfolio-image" src={socialNetwork} alt="Social Network" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxMobileShop}>
            <img className="portfolio-image" src={mobileShop} alt="Mobile Shop" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
        </div>
      </div>
      <PopupboxContainer />
    </div>
  );
};

export default Portfolio;
