import React from 'react';
import { connect } from 'react-redux';
import * as action from '../../../actions/activeTab';
import { ITabsProps } from '../../../helpers/types';
import classes from './Tabs.module.scss';

const Tabs = ({ activeTab, setActiveTab }: ITabsProps) => (
  <div className={classes.tabs}>
    <input
      id="radio1"
      type="radio"
      className={classes.input}
      name="radio"
      value="Самый дешевый"
      aria-label="radio-button"
      checked={activeTab.cheap}
      onChange={() => setActiveTab('SET_ACTIVE_TAB', { cheap: true, fast: false })}
    />
    <label htmlFor="radio1" className={classes.label}>
      Самый дешевый
    </label>
    <input
      id="radio2"
      type="radio"
      className={classes.input}
      name="radio"
      value="Самый быстрый"
      aria-label="radio-button"
      checked={activeTab.fast}
      onChange={() => setActiveTab('SET_ACTIVE_TAB', { cheap: false, fast: true })}
    />
    <label htmlFor="radio2" className={classes.label}>
      Самый быстрый
    </label>
  </div>
);

const mapStateToProps = (state: { activeTab: { [key: string]: boolean } }) => ({
  activeTab: state.activeTab,
});

export default connect(mapStateToProps, action)(Tabs);
