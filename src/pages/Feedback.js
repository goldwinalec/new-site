import React from 'react';
import classes from './Feedback.module.css';

const Feedback = () => {
  return (
    <section className={classes.feedback}>
      <div className='container'>
        <h2 className='title'>Feedback</h2>
        <div className={classes.feedback__items}>
          <div
            className={`${classes.feedback__item} ${classes['feedback__item--avito']}`}>
            <p className={classes.feedback__text}>
              Алина очень быстро сверстала лендинг, по-человечески отзывчиво
              общалась. Верстка сделана качественно и разумно просто для моего
              конкретного лендинга, хорошо ведет репозиторий, сразу же в момент
              начала работы дала ссылку на просмотр прогресса. Молодец,
              рекомендую.
              <span className={classes.feedback__author}>
                {' '}
                &mdash;&nbsp;Илья
              </span>
            </p>
            <a
              href='https://www.avito.ru/user/fa4aa8adaed453de1ff5be0b25ae0d34/profile#open-reviews-list'
              className={classes.feedback__link}
              target='_blank'
              rel='noreferrer'>
              Avito
            </a>
          </div>
          <div
            className={`${classes.feedback__item} ${classes['feedback__item--avito']}`}>
            <p className={classes.feedback__text}>
              Грамотный, отзывчивый специалист. Работает четко и качественно,
              предоплату в данном случае считаю вполне справедливой. Остался
              доволен :)
              <span className={classes.feedback__author}>
                {' '}
                &mdash;&nbsp;Максим
              </span>
            </p>
            <a
              href='https://www.avito.ru/user/fa4aa8adaed453de1ff5be0b25ae0d34/profile#open-reviews-list'
              className={classes.feedback__link}
              target='_blank'
              rel='noreferrer'>
              Avito
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
