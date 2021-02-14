import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import classes from './Loader.module.scss';

const Spiner = () => (
  <div className={classes.loader}>
    <Loader type="Circles" color="#00BFFF" height={80} width={80} />
  </div>
);

export default Spiner;
