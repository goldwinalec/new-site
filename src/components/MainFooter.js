import React from 'react';
import classes from './MainFooter.module.css';

const MainFooter = () => {
  return (
    <footer className={classes.footer}>
      <div className='container'>
        <div className={classes.footer__policy}>
          GoldwinAlec | 2022 © All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
