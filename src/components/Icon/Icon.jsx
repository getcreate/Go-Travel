import React from "react";
import "./icon.scss";

export const Icon = (props) => {
  const { classes, pathIcon, idIcon, ariaLabel } = props;
  return (
    <svg className={classes + " icon"} aria-label={ariaLabel ? ariaLabel : null}>
      <use href={pathIcon + "#" + idIcon}/>
    </svg>
  )
}