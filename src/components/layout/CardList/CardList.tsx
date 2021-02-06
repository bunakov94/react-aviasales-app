import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions/searchId';
import classes from './CardList.module.scss';
import Card from '../../blocks/Card';

const CardList = ({ fetchData }: any) => {
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <ul className={classes.cardList} style={{ listStyle: 'none', width: '100%', marginBottom: '20px' }}>
      <li style={{ marginTop: '20px' }}>
        <Card />
      </li>
      <li style={{ marginTop: '20px' }}>
        <Card />
      </li>
      <li style={{ marginTop: '20px' }}>
        <Card />
      </li>
      <li style={{ marginTop: '20px' }}>
        <Card />
      </li>
      <li style={{ marginTop: '20px' }}>
        <Card />
      </li>
      <li style={{ marginTop: '20px' }}>
        <Card />
      </li>
      <li style={{ marginTop: '20px' }}>
        <Card />
      </li>
      <li style={{ marginTop: '20px' }}>
        <Card />
      </li>
      <li style={{ marginTop: '20px' }}>
        <Card />
      </li>
    </ul>
  );
};

const mapStateToProps = (state: any) => ({
  searchId: state.searchId,
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchData: () => {
    dispatch(actions.getSearchId());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
