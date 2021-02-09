import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions/filters';
import { IFilterProps, Filters } from '../../../helpers/types';
import classes from './Filter.module.scss';

const Filter = ({ filters, checkFunc }: IFilterProps) => (
  <div className={classes.filter}>
    <h1 className={classes.filter__title}>Количество пересадок</h1>

    {Object.keys(filters).map((filter: string) => {
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

const mapStateToProps = (state: { filters: Filters }) => ({
  filters: state.filters,
});

export default connect(mapStateToProps, actions)(Filter);
