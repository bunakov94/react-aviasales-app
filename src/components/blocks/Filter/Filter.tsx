import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions/filters';
import classes from './Filter.module.scss';

const Filter = ({ filters, checkFunc }: any) => {
  useEffect(() => {
    let count = 0;
    for (const filter in filters) {
      if (Object.prototype.hasOwnProperty.call(filters, filter) && filters[filter].checked === true) {
        count += 1;
      }
    }
    if (count === 4) {
      checkFunc('ALL');
    }
  }, [filters, checkFunc]);

  return (
    <div className={classes.filter}>
      <h1 className={classes.filter__title}>Количество пересадок</h1>

      {Object.keys(filters).map((filter: any) => {
        const { type, title, checked } = filters[filter];
        return (
          <label className={classes.item} key={title}>
            <input className={classes.itemInput} type="checkbox" checked={checked} onChange={() => checkFunc(type)} />
            <span className={classes.itemCheckmark} />
            <span className={classes.itemLabel}>{title}</span>
          </label>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  filters: state.filters,
});

export default connect(mapStateToProps, actions)(Filter);
