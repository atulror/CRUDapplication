import { Fragment } from 'react';
import classes from '../header/Header.module.css';

const Header = () => {
  return (
    <Fragment>
    <div className={classes.header}>
      <a href="/" className={classes.logo}>
        Assignment
      </a>
      <div className={classes.headerRight}>
        <a className={classes.active} href="/">
          Home
        </a>
        <a href="/">Contact</a>
        <a href="/">About</a>
      </div>
    </div>
    </Fragment>
  );
};
export default Header;
