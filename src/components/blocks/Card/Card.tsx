import React from 'react';
import Logo from '../../../assets/images/s7logo.png';
import classes from './Card.module.scss';

const Card = () => (
  <div className={classes.card}>
    <div className={classes.cardHeader}>
      <h2 className={classes.cardHeader__price}>13 400p</h2>
      <img src={Logo} alt="logo" height="36px" width="110px" />
    </div>
    <div className={classes.cardColl}>
      <div className={classes.cardRow}>
        <span className={classes.cardRow__header}>MOW – HKT</span>
        <span className={classes.cardRow__footer}>10:45 – 08:00</span>
      </div>
      <div className={classes.cardRow}>
        <span className={classes.cardRow__header}>В пути</span>
        <span className={classes.cardRow__footer}>21ч 15м</span>
      </div>
      <div className={classes.cardRow}>
        <span className={classes.cardRow__header}>2 пересадки</span>
        <span className={classes.cardRow__footer}>HKG, JNB</span>
      </div>
    </div>
    <div className={classes.cardColl}>
      <div className={classes.cardRow}>
        <span className={classes.cardRow__header}>MOW – HKT</span>
        <span className={classes.cardRow__footer}>10:45 – 08:00</span>
      </div>
      <div className={classes.cardRow}>
        <span className={classes.cardRow__header}>В пути</span>
        <span className={classes.cardRow__footer}>21ч 15м</span>
      </div>
      <div className={classes.cardRow}>
        <span className={classes.cardRow__header}>2 пересадки</span>
        <span className={classes.cardRow__footer}>HKG, JNB</span>
      </div>
    </div>
  </div>
);

export default Card;
