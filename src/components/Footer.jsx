import React from 'react';
import { Link } from 'react-scroll';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  RedditShareButton,
  RedditIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from 'react-share';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>город Санкт-Петербург</p>
            </div>
            <div className="d-flex">
              <a href="tel:+7(931)543-3115">+7(931)543-3115</a>
            </div>
            <div className="d-flex">
              <p>evgeniy.nechetov@gmail.com</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <Link smooth={true} to="home" className="footer-nav">
                  Главная
                </Link>
                <br />
                <Link smooth={true} to="about" offset={-83} className="footer-nav">
                  Обо мне
                </Link>
                <br />
                <Link smooth={true} to="services" offset={-83} className="footer-nav">
                  Навыки
                </Link>
              </div>
              <div className="col">
                <Link smooth={true} to="portfolio" offset={-83} className="footer-nav">
                  Портфолио
                </Link>
                <br />
                <Link smooth={true} to="contacts" offset={-83} className="footer-nav">
                  Контакты
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center">
              <FacebookShareButton
                url={'https://github.com/zariuz'}
                quote={'Front-End Developer'}
                hashtag="#JavaScript #React">
                <FacebookIcon className="mx-3" size={36} />
              </FacebookShareButton>
              <TwitterShareButton
                url={'https://github.com/zariuz'}
                quote={'Front-End Developer'}
                hashtag="#javascript">
                <TwitterIcon className="mx-3" size={36} />
              </TwitterShareButton>
              <RedditShareButton
                url={'https://github.com/zariuz'}
                quote={'Front-End Developer'}
                hashtag="#javascript">
                <RedditIcon className="mx-3" size={36} />
              </RedditShareButton>
              <LinkedinShareButton
                url={'https://github.com/zariuz'}
                quote={'Front-End Developer'}
                hashtag="#javascript">
                <LinkedinIcon className="mx-3" size={36} />
              </LinkedinShareButton>
            </div>
            <p className="pt-3 text-center">
              Copyright&copy;
              {new Date().getFullYear()}&nbsp;Evgeniy Nechetov | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
