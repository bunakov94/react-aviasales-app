import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions/filters';
import classes from './Filter.module.scss';

type Filters = {
  [key: string]: { type: string; title: string; checked: boolean };
};

interface IFilterProps {
  filters: Filters;
  checkFunc: (type: string) => { type: string };
}

const Filter = ({ filters, checkFunc }: IFilterProps) => (
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

const mapStateToProps = (state: { filters: Filters }) => ({
  filters: state.filters,
});

export default connect(mapStateToProps, actions)(Filter);
