import React from 'react';
import { Link } from 'react-router-dom';
import classes from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className='container'>
      <div className={classes.NF__title}>404</div>
      <div className={classes.NF__text}>Page Not Found</div>
      <Link to='/' className={classes.NF_link}>
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
