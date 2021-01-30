import React from 'react';
import Logo from '../../../assets/images/logo.png';
import classes from './Header.module.scss';

const Header = () => (
  <header className={classes.pageHeader}>
    <img src={Logo} alt="Logo" className={classes.pageHeader__logo} width="82" height="89" />
  </header>
);

export default Header;
