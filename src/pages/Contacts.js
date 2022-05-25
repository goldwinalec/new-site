import React from 'react';
import classes from './Contacts.module.css';

const Contacts = () => {
  return (
    <section className={classes.contacts}>
      <div className='container'>
        <h3 className='title'>Contacts</h3>
        <div className={classes.contacts__inner}>
          <ul
            className={`${classes.contacts__social} ${classes['social-list']}`}>
            <li className={classes['social-list__item']}>
              <a
                href='https://t.me/goldwinalec'
                className={classes['social-list__link']}
                target='_blank'
                rel='noreferrer'>
                {/* <img
                  src='/images/social-icon-1.svg'
                  alt='Telegram'
                  className={classes.social-list__img}
                /> */}
                <span>@goldwinalec</span>
              </a>
            </li>
            <li className={classes['social-list__link']}>
              <a
                href='https://www.instagram.com/goldwinalec'
                className={classes['social-list__link']}
                target='_blank'
                rel='noreferrer'>
                {/* <img
                  src='/images/social-icon-2.svg'
                  alt='Instagram'
                  className={classes.social-list__img'
                /> */}
                <span>@goldwinalec</span>
              </a>
            </li>
            <li className={classes['social-list__item']}>
              <a
                href='mailto:alinagladkova97@gmail'
                className={classes['social-list__link']}
                target='_blank'
                rel='noreferrer'>
                {/* <img
                  src='/images/social-icon-4.svg'
                  alt='E-mail'
                  className={classes.social-list__img}
                /> */}
                <span>alinagladkova97@gmail</span>
              </a>
            </li>
            <li className={classes['social-list__item']}>
              <a
                href='https://github.com/goldwinalec'
                className={classes['social-list__link']}
                target='_blank'
                rel='noreferrer'>
                {/* <img
                  src='/images/social-icon-5.svg'
                  alt='GitHub'
                  className={classes.social-list__img}
                /> */}
                /goldwinalec<span></span>
              </a>
            </li>
            <li className={classes['social-list__item']}>
              <a
                href='https://www.linkedin.com/in/goldwinalec/'
                className={classes['social-list__link']}
                target='_blank'
                rel='noreferrer'>
                {/* <img
                  src='/images/social-icon-6.svg'
                  alt='LinkedIn'
                  className={classes.social-list__img}
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
