import React from 'react';
import { getHours, getMinutes, addMinutes } from 'date-fns';
import { CardProps, ISegment } from '../../../helpers/types';
import classes from './Card.module.scss';

const Card = ({ ticket }: CardProps) => {
  const {
    carrier,
    price,
    segments: [forward, back],
  } = ticket;

  const timeConvert = (duration: number) => {
    const hours = duration / 60;
    const rhours = Math.floor(hours);
    const minutes = (hours - rhours) * 60;
    const rminutes = Math.round(minutes);
    return `${rhours}ч ${rminutes}м`;
  };

  const calcMinutes = (num: number) => {
    const result = num > 9 ? `${num}` : `0${num}`;
    return result;
  };

  const calculateDuration = (startTime: string, duration: number) => {
    const startHour = getHours(new Date(startTime));
    const startMinutes = calcMinutes(getMinutes(new Date(startTime)));
    const endHour = getHours(addMinutes(new Date(startTime), duration));
    const endMinutes = calcMinutes(getMinutes(addMinutes(new Date(startTime), duration)));

    return `${startHour}:${startMinutes} - ${endHour}:${endMinutes}`;
  };

  const getStopsCount = (length: number) => {
    let str = `${length} `;
    if (length === 0) {
      str += 'пересадок';
    } else if (length === 1) {
      str += 'пересадка';
    } else {
      str += 'пересадки';
    }
    return str;
  };

  const makeColl = (type: ISegment) => (
    <div className={classes.cardColl}>
      <div className={classes.cardRow}>
        <span className={classes.cardRow__header}>{`${type.origin} - ${type.destination}`}</span>
        <span className={classes.cardRow__footer}>{calculateDuration(type.date, type.duration)}</span>
      </div>
      <div className={classes.cardRow}>
        <span className={classes.cardRow__header}>В пути</span>
        <span className={classes.cardRow__footer}>{timeConvert(type.duration)}</span>
      </div>
      <div className={classes.cardRow}>
        <span className={classes.cardRow__header}>{getStopsCount(type.stops.length)}</span>
        <span className={classes.cardRow__footer}>{type.stops.join(' ')}</span>
      </div>
    </div>
  );

  return (
    <div className={classes.card}>
      <div className={classes.cardHeader}>
        <h2 className={classes.cardHeader__price}>{`${price} \u20bd`}</h2>
        <img src={`//pics.avs.io/99/36/${carrier}.png`} alt="logo" height="36px" width="110px" />
      </div>
      {makeColl(forward)}
      {makeColl(back)}
    </div>
  );
};

export default Card;
