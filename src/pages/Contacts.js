import React from 'react';
import classes from './Contacts.module.css';
import contactIcon1 from '../assets/images/contacts-icon-1.svg';
import contactIcon2 from '../assets/images/contacts-icon-2.svg';
import contactIcon3 from '../assets/images/contacts-icon-3.svg';
import contactIcon4 from '../assets/images/contacts-icon-4.svg';
import contactIcon5 from '../assets/images/contacts-icon-5.svg';

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
                <img
                  src={contactIcon1}
                  alt='Telegram'
                  className={classes['social-list__img']}
                />
                <span>@goldwinalec</span>
              </a>
            </li>
            <li className={classes['social-list__item']}>
              <a
                href='https://www.instagram.com/goldwinalec'
                className={classes['social-list__link']}
                target='_blank'
                rel='noreferrer'>
                <img
                  src={contactIcon2}
                  alt='Instagram'
                  className={classes['social-list__img']}
                />
                <span>@goldwinalec</span>
              </a>
            </li>
            <li className={classes['social-list__item']}>
              <a
                href='mailto:alinagladkova97@gmail.com'
                className={classes['social-list__link']}
                target='_blank'
                rel='noreferrer'>
                <img
                  src={contactIcon3}
                  alt='E-mail'
                  className={classes['social-list__img']}
                />
                <span>alinagladkova97@gmail.com</span>
              </a>
            </li>
            <li className={classes['social-list__item']}>
              <a
                href='https://github.com/goldwinalec'
                className={classes['social-list__link']}
                target='_blank'
                rel='noreferrer'>
                <img
                  src={contactIcon4}
                  alt='GitHub'
                  className={classes['social-list__img']}
                />
                /goldwinalec<span></span>
              </a>
            </li>
            <li className={classes['social-list__item']}>
              <a
                href='https://www.linkedin.com/in/goldwinalec/'
                className={classes['social-list__link']}
                target='_blank'
                rel='noreferrer'>
                <img
                  src={contactIcon5}
                  alt='LinkedIn'
                  className={classes['social-list__img']}
                />
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
