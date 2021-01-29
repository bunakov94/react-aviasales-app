import React from 'react';
import classes from './Tabs.module.scss';

const Tabs = () => (
  <div className={classes.tabs}>
    <label className={`${classes.label} ${classes.label__active}`}>
      Самый дешевый
      <input type="radio" className={classes.input} />
    </label>
    <label className={classes.label}>
      Самый быстрый
      <input type="radio" className={classes.input} />
    </label>
  </div>
);

export default Tabs;
