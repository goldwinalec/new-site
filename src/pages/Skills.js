import React from 'react';
import classes from './Skills.module.css';

const Skills = () => {
  return (
    <section className={classes.skills}>
      <div className='container'>
        <h2 className='title'>Skills</h2>
        <div className={classes.skills__items}>
          <div className={`${classes.skills__item} ${classes.item}`}>
            <div className={classes.item__title}>HTML5</div>
          </div>
          <div className={`${classes.skills__item} ${classes.item}`}>
            <div className={classes.item__title}>CSS3 (SASS, SCSS)</div>
          </div>
          <div className={`${classes.skills__item} ${classes.item}`}>
            <div className={classes.item__title}>JavaScript ES6 (Babel)</div>
          </div>
          <div className={`${classes.skills__item} ${classes.item}`}>
            <div className={classes.item__title}>React</div>
          </div>
          <div className={`${classes.skills__item} ${classes.item}`}>
            <div className={classes.item__title}>TypeScript</div>
          </div>
          <div className={`${classes.skills__item} ${classes.item}`}>
            <div className={classes.item__title}>Git</div>
          </div>
          <div className={`${classes.skills__item} ${classes.item}`}>
            <div className={classes.item__title}>GitHub</div>
          </div>
          <div className={`${classes.skills__item} ${classes.item}`}>
            <div className={classes.item__title}>Bootstrap</div>
          </div>
          <div className={`${classes.skills__item} ${classes.item}`}>
            <div className={classes.item__title}>WordPress</div>
          </div>
          <div className={`${classes.skills__item} ${classes.item}`}>
            <div className={classes.item__title}>Adobe Photoshop</div>
          </div>
          <div className={`${classes.skills__item} ${classes.item}`}>
            <div className={classes.item__title}>Figma</div>
          </div>
          <div className={`${classes.skills__item} ${classes.item}`}>
            <div className={classes.item__title}>BEM</div>
          </div>
          <div className={`${classes.skills__item} ${classes.item}`}>
            <div className={classes.item__title}>English (B2)</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
