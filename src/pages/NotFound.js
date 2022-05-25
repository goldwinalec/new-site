import React from 'react';
import { Link } from 'react-router-dom';
import classes from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className='container'>
      <div className={classes['title--404']}>404</div>
      <div className=''>Page Not Found</div>
      <Link to='/'>Back to main page</Link>
    </div>
  );
};

export default NotFound;
