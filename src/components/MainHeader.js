import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import classes from './MainHeader.module.css';

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <div className='container'>
        <div className={classes.header__inner}>
          <Link className={classes['header__menu-link']} to='/'>
            GoldwinAlec
          </Link>
          <div className={classes.header__nav}>
            <ul className={classes.header__menu}>
              <li className={classes['header__menu-item']}>
                <NavLink
                  className={(navData) =>
                    navData.isActive
                      ? `${classes['header__menu-link']} ${classes['header__menu-link--active']}`
                      : classes['header__menu-link']
                  }
                  to='/projects'>
                  Projects
                </NavLink>
              </li>
              <li className={classes['header__menu-item']}>
                <NavLink
                  className={(navData) =>
                    navData.isActive
                      ? `${classes['header__menu-link']} ${classes['header__menu-link--active']}`
                      : classes['header__menu-link']
                  }
                  to='/technologies'>
                  Technologies
                </NavLink>
              </li>
              <li className={classes['header__menu-item']}>
                <NavLink
                  to='/feedback'
                  className={(navData) =>
                    navData.isActive
                      ? `${classes['header__menu-link']} ${classes['header__menu-link--active']}`
                      : classes['header__menu-link']
                  }>
                  Feedback
                </NavLink>
              </li>
              <li className={classes['header__menu-item']}>
                <NavLink
                  to='/contacts'
                  className={(navData) =>
                    navData.isActive
                      ? `${classes['header__menu-link']} ${classes['header__menu-link--active']}`
                      : classes['header__menu-link']
                  }>
                  Contacts
                </NavLink>
              </li>
              <li className={classes['header__menu-item header__theme']}></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
