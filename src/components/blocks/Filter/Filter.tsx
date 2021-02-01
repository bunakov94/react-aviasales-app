import React from 'react';
import { connect } from 'react-redux';
import classes from './Filter.module.scss';

import * as actions from '../../../store/actions';

const Filter = ({ filters, all, nothing, one, two, three }: any) => {
  let count = 0;

  for (const filter in filters) {
    if (Object.prototype.hasOwnProperty.call(filters, filter) && filters[filter] === true) {
      count += 1;
    }
  }

  const checkAll = (current: boolean) => {
    if (count === 4) {
      nothing(current);
      one(current);
      two(current);
      three(current);
      all(current);
    } else {
      nothing(!current);
      one(!current);
      two(!current);
      three(!current);
      all(!current);
    }
  };

  return (
    <div className={classes.filter}>
      <h1 className={classes.filter__title}>Количество пересадок</h1>

      <label className={classes.item}>
        <input
          className={classes.itemInput}
          type="checkbox"
          onChange={() => checkAll(filters.all)}
          checked={filters.all || count === 4}
        />
        <span className={classes.itemCheckmark} />
        <span className={classes.itemLabel}>{`${filters.all}`}</span>
      </label>
      <label className={classes.item}>
        <input
          className={classes.itemInput}
          type="checkbox"
          onChange={() => nothing(!filters.nothing)}
          checked={filters.nothing}
        />
        <span className={classes.itemCheckmark} />
        <span className={classes.itemLabel}>{`${filters.nothing}`}</span>
      </label>
      <label className={classes.item}>
        <input className={classes.itemInput} type="checkbox" onChange={() => one(!filters.one)} checked={filters.one} />
        <span className={classes.itemCheckmark} />
        <span className={classes.itemLabel}>{`${filters.one}`}</span>
      </label>
      <label className={classes.item}>
        <input className={classes.itemInput} type="checkbox" onChange={() => two(!filters.two)} checked={filters.two} />
        <span className={classes.itemCheckmark} />
        <span className={classes.itemLabel}>{`${filters.two}`}</span>
      </label>
      <label className={classes.item}>
        <input
          className={classes.itemInput}
          type="checkbox"
          onChange={() => three(!filters.three)}
          checked={filters.three}
        />
        <span className={classes.itemCheckmark} />
        <span className={classes.itemLabel}>{`${filters.three}`}</span>
      </label>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  filters: { ...state.filters },
});

export default connect(mapStateToProps, actions)(Filter);
