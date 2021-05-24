import React from 'react';
import './ButtonClose.scss';

export const ButtonClose = (props) => {
  const {classes, ariaLabel, text} = props;
  return (
    <button className={classes ? classes + " button-close" : "button-close"} aria-label={ariaLabel}><span className="visually-hidden">{ text }</span></button>
  )
}