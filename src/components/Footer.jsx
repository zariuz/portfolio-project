import React from 'react';
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
                <a className="footer-nav">Главная</a>
                <br />
                <a className="footer-nav">Обо мне</a>
                <br />
                <a className="footer-nav">Навыки</a>
              </div>
              <div className="col">
                {/* <a className="footer-nav">Опыт работы</a>
                <br /> */}
                <a className="footer-nav">Портфолио</a>
                <br />
                <a className="footer-nav">Контакты</a>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center">
              <FacebookShareButton
                url={'https://www.youtube.com/8020coding'}
                quote={'FullStack Developer'}
                hashtag="#javascript">
                <FacebookIcon className="mx-3" size={36} />
              </FacebookShareButton>
              <TwitterShareButton
                url={'https://www.youtube.com/8020coding'}
                quote={'FullStack Developer'}
                hashtag="#javascript">
                <TwitterIcon className="mx-3" size={36} />
              </TwitterShareButton>
              <RedditShareButton
                url={'https://www.youtube.com/8020coding'}
                quote={'FullStack Developer'}
                hashtag="#javascript">
                <RedditIcon className="mx-3" size={36} />
              </RedditShareButton>
              <LinkedinShareButton
                url={'https://www.youtube.com/8020coding'}
                quote={'FullStack Developer'}
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
