import React from 'react';
import classes from './Reviews.module.css';

const Reviews = () => {
  return (
    <section className={classes.reviews}>
      <div className='container'>
        <h2 className='title'>Reviews</h2>
        <div className={classes.reviews__items}>
          <div
            className={`${classes.reviews__item} ${classes['reviews__item--avito']}`}>
            <blockquote className={classes.reviews__text}>
              Алина очень быстро сверстала лендинг, по-человечески отзывчиво
              общалась. Верстка сделана качественно и разумно просто для моего
              конкретного лендинга, хорошо ведет репозиторий, сразу же в момент
              начала работы дала ссылку на просмотр прогресса. Молодец,
              рекомендую.
              <span className={classes.reviews__author}>
                {' '}
                &mdash;&nbsp;Илья
              </span>
            </blockquote>
            <a
              href='https://www.avito.ru/user/fa4aa8adaed453de1ff5be0b25ae0d34/profile#open-reviews-list'
              className={classes.reviews__link}
              target='_blank'
              rel='noreferrer'>
              <span className={classes['reviews__link--hidden']}>Avito</span>
            </a>
          </div>
          <div
            className={`${classes.reviews__item} ${classes['reviews__item--avito']}`}>
            <blockquote className={classes.reviews__text}>
              Грамотный, отзывчивый специалист. Работает четко и качественно,
              предоплату в данном случае считаю вполне справедливой. Остался
              доволен :)
              <span className={classes.reviews__author}>
                {' '}
                &mdash;&nbsp;Максим
              </span>
            </blockquote>
            <a
              href='https://www.avito.ru/user/fa4aa8adaed453de1ff5be0b25ae0d34/profile#open-reviews-list'
              className={classes.reviews__link}
              target='_blank'
              rel='noreferrer'>
              <span className={classes['reviews__link--hidden']}>Avito</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
