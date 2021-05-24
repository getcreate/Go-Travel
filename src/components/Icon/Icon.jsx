import React from 'react';
import './Icon.scss';

export const Icon = (props) => {
  const { classes, pathIcon, idIcon, ariaLabel } = props;
  return (
    <svg className={classes ? classes + " icon": "icon"} aria-label={ariaLabel ? ariaLabel : null}>
      <use href={pathIcon + "#" + idIcon}/>
    </svg>
  )
}