import React from 'react';
import classes from './CardList.module.scss';
import Card from '../../blocks/Card';

const CardList = () => (
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

export default CardList;
