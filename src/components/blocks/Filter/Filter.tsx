import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import classes from './Filter.module.scss';

import * as actions from '../../../store/actions';

const Filter = ({ filters, all, nothing, one, two, three }: any) => {
  useEffect(() => {
    let count = 0;
    for (const filter in filters) {
      if (Object.prototype.hasOwnProperty.call(filters, filter) && filters[filter] === true) {
        count += 1;
      }
    }
    if (count === 4) {
      all(true);
    }
  }, [filters, all]);

  return (
    <div className={classes.filter}>
      <h1 className={classes.filter__title}>Количество пересадок</h1>

      <label className={classes.item}>
        <input className={classes.itemInput} type="checkbox" onChange={() => all(!filters.all)} checked={filters.all} />
        <span className={classes.itemCheckmark} />
        <span className={classes.itemLabel}>Все</span>
      </label>
      <label className={classes.item}>
        <input
          className={classes.itemInput}
          type="checkbox"
          onChange={() => nothing(!filters.nothing)}
          checked={filters.nothing}
        />
        <span className={classes.itemCheckmark} />
        <span className={classes.itemLabel}>Без пересадок</span>
      </label>
      <label className={classes.item}>
        <input className={classes.itemInput} type="checkbox" onChange={() => one(!filters.one)} checked={filters.one} />
        <span className={classes.itemCheckmark} />
        <span className={classes.itemLabel}>1 пересадка</span>
      </label>
      <label className={classes.item}>
        <input className={classes.itemInput} type="checkbox" onChange={() => two(!filters.two)} checked={filters.two} />
        <span className={classes.itemCheckmark} />
        <span className={classes.itemLabel}>2 пересадки</span>
      </label>
      <label className={classes.item}>
        <input
          className={classes.itemInput}
          type="checkbox"
          onChange={() => three(!filters.three)}
          checked={filters.three}
        />
        <span className={classes.itemCheckmark} />
        <span className={classes.itemLabel}>3 пересадки</span>
      </label>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  filters: { ...state.filters },
});

export default connect(mapStateToProps, actions)(Filter);
