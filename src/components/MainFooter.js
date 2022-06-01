import React from 'react';
import classes from './MainFooter.module.css';

const MainFooter = () => {
  return (
    <footer className={classes.footer}>
      <div className='container'>
        <div className={classes.footer__policy}>© 2022 GoldwinAlec</div>
      </div>
    </footer>
  );
};

export default MainFooter;
