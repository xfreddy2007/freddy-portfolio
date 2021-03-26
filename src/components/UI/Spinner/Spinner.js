import React from 'react';

import classes from './Spinner.module.css';

const LoadingIndicator = () => (
  <div className={classes.ldsRing}>
    <div />
    <div />
    <div />
    <div />
  </div>
);

export default LoadingIndicator;
