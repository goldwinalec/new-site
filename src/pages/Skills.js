import React from 'react';
import classes from './Skills.module.css';

const Skills = () => {
  return (
    <section className={classes.skills}>
      <div className='container'>
        <h2 className='title'>Skills</h2>
        <ul className={classes.skills__items}>
          <li className={`${classes.skills__item} ${classes.item}`}>HTML5</li>
          <li className={`${classes.skills__item} ${classes.item}`}>
            CSS3 (SASS, SCSS)
          </li>
          <li className={`${classes.skills__item} ${classes.item}`}>
            JavaScript ES6 (Babel)
          </li>
          <li className={`${classes.skills__item} ${classes.item}`}>React</li>
          <li className={`${classes.skills__item} ${classes.item}`}>
            TypeScript
          </li>
          <li className={`${classes.skills__item} ${classes.item}`}>
            Git / GitHub
          </li>
          <li className={`${classes.skills__item} ${classes.item}`}>
            Bootstrap
          </li>
          <li className={`${classes.skills__item} ${classes.item}`}>
            WordPress
          </li>
          <li className={`${classes.skills__item} ${classes.item}`}>
            Adobe Photoshop
          </li>
          <li className={`${classes.skills__item} ${classes.item}`}>Figma</li>
          <li className={`${classes.skills__item} ${classes.item}`}>BEM</li>
          <li className={`${classes.skills__item} ${classes.item}`}>
            English (B2)
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
