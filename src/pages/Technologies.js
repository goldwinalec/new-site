import React from 'react';
import classes from './Technologies.module.css';

const Technologies = () => {
  return (
    <section className={classes.technologies}>
      <div className='container'>
        <h2 className='title'>Technologies</h2>
        <div className={classes.technologies__items}>
          <div className={`${classes.technologies__item} ${classes.item}`}>
            <div className={classes.item__title}>HTML5</div>
          </div>
          <div className={`${classes.technologies__item} ${classes.item}`}>
            <div className={classes.item__title}>CSS3</div>
          </div>
          <div className={`${classes.technologies__item} ${classes.item}`}>
            <div className={classes.item__title}>JavaScript</div>
          </div>
          <div className={`${classes.technologies__item} ${classes.item}`}>
            <div className={classes.item__title}>jQuery</div>
          </div>
          <div className={`${classes.technologies__item} ${classes.item}`}>
            <div className={classes.item__title}>GitHub</div>
          </div>
          <div className={`${classes.technologies__item} ${classes.item}`}>
            <div className={classes.item__title}>Bootstrap</div>
          </div>
          <div className={`${classes.technologies__item} ${classes.item}`}>
            <div className={classes.item__title}>SASS</div>
          </div>
          <div className={`${classes.technologies__item} ${classes.item}`}>
            <div className={classes.item__title}>Adobe Photoshop</div>
          </div>
          <div className={`${classes.technologies__item} ${classes.item}`}>
            <div className={classes.item__title}>Figma</div>
          </div>
          <div className={`${classes.technologies__item} ${classes.item}`}>
            <div className={classes.item__title}>BEM</div>
          </div>
          <div className={`${classes.technologies__item} ${classes.item}`}>
            <div className={classes.item__title}>WordPress</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
