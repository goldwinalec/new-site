import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const MainHeader = () => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='header__inner'>
          <Link className='header__menu-link' to='/'>
            GoldwinAlec
          </Link>
          <div className='header__nav'></div>
          <ul className='header__menu'>
            <li className='header__menu-item'>
              <NavLink
                className='header__menu-link'
                to='/projects'
                activeClassName='header__menu-link--active'>
                Projects
              </NavLink>
            </li>
            <li className='header__menu-item'>
              <NavLink
                className='header__menu-link'
                to='/technologies'
                activeClassName='header__menu-link--active'>
                Technologies
              </NavLink>
            </li>
            <li className='header__menu-item'>
              <NavLink
                className='header__menu-link'
                to='/feedback'
                activeClassName='header__menu-link--active'>
                Feedback
              </NavLink>
            </li>
            <li className='header__menu-item'>
              <NavLink
                className='header__menu-link'
                to='/contacts'
                activeClassName='header__menu-link--active'>
                Contacts
              </NavLink>
            </li>
            <li className='header__menu-item header__theme'></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
