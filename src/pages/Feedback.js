import React from 'react';

const Feedback = () => {
  return (
    <section className='feedback'>
      <div className='container'>
        <h2 className='feedback__title title'>Feedback</h2>
        <div className='feedback__items'>
          <div className='feedback__item feedback__item--avito'>
            <p className='feedback__text'>
              Алина очень быстро сверстала лендинг, по-человечески отзывчиво
              общалась. Верстка сделана качественно и разумно просто для моего
              конкретного лендинга, хорошо ведет репозиторий, сразу же в момент
              начала работы дала ссылку на просмотр прогресса. Молодец,
              рекомендую.
              <span className='feedback__author'>&mdash; Илья</span>
            </p>
            <a
              href='https://www.avito.ru/user/b285ab4ba433742251fb1640a9ac8f60/profile?id=2037379224&src=item&page_from=from_item_card&iid=2037379224'
              className='feedback__link'
              target='_blank'
              rel='noreferrer'>
              Avito
            </a>
          </div>
          <div className='feedback__item feedback__item--avito'>
            <p className='feedback__text'>
              Грамотный, отзывчивый специалист. Работает четко и качественно,
              предоплату в данном случае считаю вполне справедливой. Остался
              доволен :)
              <span className='feedback__author'>&mdash; Максим</span>
            </p>
            <a
              href='https://www.avito.ru/user/b285ab4ba433742251fb1640a9ac8f60/profile?id=2037379224&src=item&page_from=from_item_card&iid=2037379224'
              className='feedback__link'
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
