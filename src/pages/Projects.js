import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Projects.module.css';
import projectImg1 from '../assets/images/project-1.jpg';
import projectImg2 from '../assets/images/project-2.jpg';
import projectImg3 from '../assets/images/project-3.jpg';
import projectImg4 from '../assets/images/project-4.jpg';
import projectImg5 from '../assets/images/project-5.jpg';
import projectImg6 from '../assets/images/project-6.jpg';
import projectImg7 from '../assets/images/project-7.jpg';
import projectImg8 from '../assets/images/project-8.jpg';
import projectImg9 from '../assets/images/project-9.jpg';
import projectImg10 from '../assets/images/project-10.jpg';
import projectImg11 from '../assets/images/project-11.jpg';

const Projects = () => {
  return (
    <section>
      <div className='container'>
        <h2 className='title'>Projects</h2>
        <div className={classes.items}>
          <div className={classes.items__item}>
            <Link to='/projects/p1'>
              <img className={classes.items__img} src={projectImg1} alt='' />
            </Link>
            <div className={classes.items__tags}>
              <div
                className={`${classes.items__tag} ${classes['items__tag--html']}`}>
                HTML
              </div>
              <div
                className={`${classes.items__tag} ${classes['items__tag--scss']}`}>
                SCSS
              </div>
              <div
                className={`${classes.items__tag} ${classes['items__tag--js']}`}>
                JavaScript
              </div>
            </div>
          </div>
          <div className={classes.items__item}>
            <Link to='/projects/p2'>
              <img className={classes.items__img} src={projectImg2} alt='' />
            </Link>
            <div className={classes.items__tags}>
              <div
                className={`${classes.items__tag} ${classes['items__tag--html']}`}>
                HTML
              </div>
              <div
                className={`${classes.items__tag} ${classes['items__tag--scss']}`}>
                SCSS
              </div>
              <div
                className={`${classes.items__tag} ${classes['items__tag--js']}`}>
                JavaScript
              </div>
            </div>
          </div>
          <div className={classes.items__item}>
            <Link to='/projects/p3'>
              <img className={classes.items__img} src={projectImg3} alt='' />
            </Link>
            <div className={classes.items__tags}>
              <div
                className={`${classes.items__tag} ${classes['items__tag--html']}`}>
                HTML
              </div>
              <div
                className={`${classes.items__tag} ${classes['items__tag--scss']}`}>
                SCSS
              </div>
              <div
                className={`${classes.items__tag} ${classes['items__tag--js']}`}>
                JavaScript
              </div>
            </div>
          </div>
          <div className={classes.items__item}>
            <Link to='/projects/p4'>
              <img className={classes.items__img} src={projectImg4} alt='' />
            </Link>
            <div className={classes.items__tags}>
              <div
                className={`${classes.items__tag} ${classes['items__tag--html']}`}>
                HTML
              </div>
              <div
                className={`${classes.items__tag} ${classes['items__tag--scss']}`}>
                SCSS
              </div>
              <div
                className={`${classes.items__tag} ${classes['items__tag--js']}`}>
                JavaScript
              </div>
              <div
                className={`${classes.items__tag} ${classes['items__tag--wp']}`}>
                WordPress
              </div>
            </div>
          </div>
          <div className={classes.items__item}>
            <Link to='/projects/p5'>
              <img className={classes.items__img} src={projectImg5} alt='' />
            </Link>
            <div className={classes.items__tags}>
              <div
                className={`${classes.items__tag} ${classes['items__tag--html']}`}>
                HTML
              </div>
              <div
                className={`${classes.items__tag} ${classes['items__tag--css']}`}>
                CSS
              </div>
              <div
                className={`${classes.items__tag} ${classes['items__tag--js']}`}>
                JavaScript
              </div>
            </div>
          </div>
          <div className={classes.items__item}>
            <Link to='/projects/p6'>
              <img className={classes.items__img} src={projectImg6} alt='' />
            </Link>
            <div className={classes.items__tags}>
              <div
                className={`${classes.items__tag} ${classes['items__tag--html']}`}>
                HTML
              </div>
              <div
                className={`${classes.items__tag} ${classes['items__tag--scss']}`}>
                SCSS
              </div>
              <div
                className={`${classes.items__tag} ${classes['items__tag--js']}`}>
                JavaScript
              </div>
            </div>
          </div>
          <div className={classes.items__item}>
            <Link to='/projects/p7'>
              <img className={classes.items__img} src={projectImg7} alt='' />
            </Link>
            <div className={classes.items__tags}>
              <div
                className={`${classes.items__tag} ${classes['items__tag--html']}`}>
                HTML
              </div>
              <div
                className={`${classes.items__tag} ${classes['items__tag--css']}`}>
                CSS
              </div>
              <div
                className={`${classes.items__tag} ${classes['items__tag--jquery']}`}>
                jQuery
              </div>
              <div
                className={`${classes.items__tag} ${classes['items__tag--wp']}`}>
                WordPress
              </div>
            </div>
          </div>
          <div className={classes.items__item}>
            <Link to='/projects/p8'>
              <img className={classes.items__img} src={projectImg8} alt='' />
            </Link>
            <div className={classes.items__tags}>
              <div
                className={`${classes.items__tag} ${classes['items__tag--html']}`}>
                HTML
              </div>
              <div
                className={`${classes.items__tag} ${classes['items__tag--scss']}`}>
                SCSS
              </div>
              <div
                className={`${classes.items__tag} ${classes['items__tag--jquery']}`}>
                jQuery
              </div>
            </div>
          </div>
          <div className={classes.items__item}>
            <Link to='/projects/p9'>
              <img className={classes.items__img} src={projectImg9} alt='' />
            </Link>
            <div className={classes.items__tags}>
              <div
                className={`${classes.items__tag} ${classes['items__tag--html']}`}>
                HTML
              </div>
              <div
                className={`${classes.items__tag} ${classes['items__tag--css']}`}>
                CSS
              </div>
              <div
                className={`${classes.items__tag} ${classes['items__tag--jquery']}`}>
                jQuery
              </div>
            </div>
          </div>
          <div className={classes.items__item}>
            <Link to='/projects/p10'>
              <img className={classes.items__img} src={projectImg10} alt='' />
            </Link>
            <div className={classes.items__tags}>
              <div
                className={`${classes.items__tag} ${classes['items__tag--html']}`}>
                HTML
              </div>
              <div
                className={`${classes.items__tag} ${classes['items__tag--css']}`}>
                CSS
              </div>
              <div
                className={`${classes.items__tag} ${classes['items__tag--jquery']}`}>
                jQuery
              </div>
            </div>
          </div>
          <div className={classes.items__item}>
            <Link to='/projects/p11'>
              <img className={classes.items__img} src={projectImg11} alt='' />
            </Link>
            <div className={classes.items__tags}>
              <div
                className={`${classes.items__tag} ${classes['items__tag--html']}`}>
                HTML
              </div>
              <div
                className={`${classes.items__tag} ${classes['items__tag--css']}`}>
                CSS
              </div>
              <div
                className={`${classes.items__tag} ${classes['items__tag--jquery']}`}>
                jQuery
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
