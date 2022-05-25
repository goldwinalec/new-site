import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Hero.module.css';

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className='container'>
        <div className={classes.hero__inner}>
          <div className={classes.hero__text}>
            <h1 className={classes.hero__title}>
              Hi! I'm <br />
              Alina Gladkova.
              <br />
              Frontend Developer
            </h1>
            <Link to='/contacts' className={classes.hero__link}>
              Contact me
            </Link>
          </div>
          {/* <img className='hero__img' src='/images/main-img.jpg' alt='' /> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
