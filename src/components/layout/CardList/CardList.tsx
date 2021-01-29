import React from 'react';
import './CardList.module.scss';
import Card from '../../blocks/Card';

const CardList = () => (
  <ul style={{ listStyle: 'none' }}>
    <li style={{ marginTop: '20px' }}>
      <Card />
    </li>
    <li style={{ marginTop: '20px' }}>
      <Card />
    </li>
    <li style={{ margin: '20px 0' }}>
      <Card />
    </li>
    <li style={{ margin: '20px 0' }}>
      <Card />
    </li>
    <li style={{ margin: '20px 0' }}>
      <Card />
    </li>
  </ul>
);

export default CardList;
