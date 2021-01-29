import React from 'react';
import classes from './Filter.module.scss';

const Filter = () => (
  <div className={classes.filter}>
    <h1 className={classes.filter__title}>Количество пересадок</h1>

    <label className={classes.item}>
      <input className={classes.itemInput} type="checkbox" />
      <span className={classes.itemCheckmark} />
      <span className={classes.itemLabel}>Все</span>
    </label>
    <label className={classes.item}>
      <input className={classes.itemInput} type="checkbox" />
      <span className={classes.itemCheckmark} />
      <span className={classes.itemLabel}>Без пересадок</span>
    </label>
    <label className={classes.item}>
      <input className={classes.itemInput} type="checkbox" />
      <span className={classes.itemCheckmark} />
      <span className={classes.itemLabel}>1 пересадка</span>
    </label>
    <label className={classes.item}>
      <input className={classes.itemInput} type="checkbox" />
      <span className={classes.itemCheckmark} />
      <span className={classes.itemLabel}>2 пересадка</span>
    </label>
    <label className={classes.item}>
      <input className={classes.itemInput} type="checkbox" />
      <span className={classes.itemCheckmark} />
      <span className={classes.itemLabel}>3 пересадка</span>
    </label>
  </div>
);

export default Filter;
