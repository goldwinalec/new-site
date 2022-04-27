import React from 'react';

const Contacts = () => {
  return (
    <section className='contacts'>
      <div className='container'>
        <h3 className='footer__title title'>Contact me!</h3>
        <div className='footer__inner'>
          <ul className='footer__social social-list'>
            <li className='social-list__item'>
              <a
                href='https://t.me/goldwinalec'
                className='social-list__link'
                target='_blank'
                rel='noreferrer'>
                {/* <img
                  src='/images/social-icon-1.svg'
                  alt='Telegram'
                  className='social-list__img'
                /> */}
                <span>@goldwinalec</span>
              </a>
            </li>
            <li className='social-list__item'>
              <a
                href='https://www.instagram.com/goldwinalec'
                className='social-list__link'
                target='_blank'
                rel='noreferrer'>
                {/* <img
                  src='/images/social-icon-2.svg'
                  alt='Instagram'
                  className='social-list__img'
                /> */}
                <span>@goldwinalec</span>
              </a>
            </li>
            <li className='social-list__item'>
              <a
                href='https://www.facebook.com/goldwinalec'
                className='social-list__link'
                target='_blank'
                rel='noreferrer'>
                {/* <img
                  src='/images/social-icon-3.svg'
                  alt='Facebook'
                  className='social-list__img'
                /> */}
                <span>/goldwinalec</span>
              </a>
            </li>
            <li className='social-list__item'>
              <a
                href='mailto:a-g1997@yandex.ru'
                className='social-list__link'
                target='_blank'
                rel='noreferrer'>
                {/* <img
                  src='/images/social-icon-4.svg'
                  alt='E-mail'
                  className='social-list__img'
                /> */}
                <span>a-g1997@yandex.ru</span>
              </a>
            </li>
            <li className='social-list__item'>
              <a
                href='https://github.com/goldwinalec'
                className='social-list__link'
                target='_blank'
                rel='noreferrer'>
                {/* <img
                  src='/images/social-icon-5.svg'
                  alt='GitHub'
                  className='social-list__img'
                /> */}
                /goldwinalec<span></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
