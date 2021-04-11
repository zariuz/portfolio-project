import React from 'react';
import author from '../me.jpg';

const AboutMe = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={author} alt="author..." />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">Обо мне</h1>
          <p>
            Здраствуйте, меня зовут Евгений, я живу в Санкт-Петербурге. Я занимаюсь
            разработкой современных сайтов и приложений. Мне нравится делать интересные и
            современные проекты.
          </p>
          <p>
            Я открыт для сотрудничества, если у вас есть предложение о работе, если вам
            нужно портфолио, многостраничный сайт или лэндинг, напишите мне.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
