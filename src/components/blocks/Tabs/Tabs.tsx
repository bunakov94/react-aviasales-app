import React from 'react';
import classes from './Tabs.module.scss';

const Tabs = () => (
  <div className={classes.tabs}>
    <input type="radio" className={classes.input} name="radio" aria-label="radio-button" />
    <label htmlFor="radio" className={`${classes.label} ${classes.label__active}`}>
      Самый дешевый
    </label>
    <input type="radio" className={classes.input} name="radio2" aria-label="radio-button" />
    <label htmlFor="radio2" className={classes.label}>
      Самый быстрый
    </label>
  </div>
);

export default Tabs;
