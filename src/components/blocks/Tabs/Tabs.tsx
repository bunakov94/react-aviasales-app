import React from 'react';
import { connect } from 'react-redux';
import * as action from '../../../redux/actions/activeTab';
import { ITabsProps } from '../../../helpers/types';
import classes from './Tabs.module.scss';

const Tabs = ({ activeTab, setActiveTab }: ITabsProps) => (
  <div className={classes.tabs}>
    <input
      id="cheap"
      type="radio"
      className={classes.input}
      name="radio"
      value="Самый дешевый"
      aria-label="radio-button"
      checked={activeTab.cheap}
      onChange={() => setActiveTab({ cheap: true, fast: false })}
    />
    <label htmlFor="cheap" className={classes.label}>
      Самый дешевый
    </label>
    <input
      id="fast"
      type="radio"
      className={classes.input}
      name="radio"
      value="Самый быстрый"
      aria-label="radio-button"
      checked={activeTab.fast}
      onChange={() => setActiveTab({ cheap: false, fast: true })}
    />
    <label htmlFor="fast" className={classes.label}>
      Самый быстрый
    </label>
  </div>
);

const mapStateToProps = (state: { activeTab: { cheap: boolean; fast: boolean } }) => ({
  activeTab: state.activeTab,
});

export default connect(mapStateToProps, action)(Tabs);
