import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import {useForm} from 'react-hook-form';

const Contacts = () => {
  const [successMessage, setSuccessMessage] = useState('');
  const {register, handleSubmit, errors} = useForm();

  const serviceID = 'service_emailJS';
  const templateID = 'template_emailJS';
  const userID = 'user_v50W62O8JOoBj2bnHxlnr';

  const onSubmit = (data, r) => {
    sendEmail(
      serviceID,
      templateID,
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        subject: data.subject,
        description: data.description,
      },
      userID,
    );
    r.target.reset();
  };

  const sendEmail = (serviceID, templateID, variables, userID) => {
    emailjs
      .send(serviceID, templateID, variables, userID)
      .then(() => {
        setSuccessMessage('Форма успешно отправлена! Я свяжусь с вами как можно скорее.');
      })
      .catch((err) => console.error(`Something went wrong ${err}`));
  };

  return (
    <div id="contacts" className="contacts">
      <div className="text-center">
        <h1>Контакты</h1>
        <p>Пожалуйста, заполните форму, и я свяжусь с вами в ближайшее время.</p>
        <span className="success-message">{successMessage}</span>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6 col-xs-12">
              {/* NAME INPUT */}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Имя"
                  name="name"
                  ref={register({
                    required: 'Пожалуйста, введите имя',
                    maxLength: {
                      value: 20,
                      message:
                        'Пожалуйста, введите имя, состоящее менее чем из 20 символов',
                    },
                  })}
                />
                <div className="line"></div>
              </div>
              <span className="error-message">{errors.name && errors.name.message}</span>
              {/* PHONE INPUT */}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Номер телефона"
                  name="phone"
                  ref={register({
                    required: 'Пожалуйста, добавте свой номер телефона',
                  })}
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.phone && errors.phone.message}
              </span>
              {/* EMAIL INPUT */}
              <div className="text-center">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  ref={register({
                    required: 'Пожалуйста, укажите свой адрес электронной почты',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Неверный адрес электронной почты',
                    },
                  })}
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.email && errors.email.message}
              </span>
              {/* SUBJECT INPUT */}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Тема"
                  name="subject"
                  ref={register({
                    required: 'Вы забыли добавить тему',
                  })}
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.subject && errors.subject.message}
              </span>
            </div>
            <div className="col-md-6 col-xs-12">
              {/* DESCRIPTION */}
              <div className="text-center">
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Кратко опишите ваш проект..."
                  name="description"
                  ref={register({
                    required: 'Кратко опишите потребности вашего проекта...',
                  })}></textarea>
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.description && errors.description.message}
              </span>
              <button className="btn-main-offer contact-btn" type="submit">
                связаться со мной
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
