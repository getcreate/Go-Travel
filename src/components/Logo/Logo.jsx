import React from 'react';
import './Logo.scss';
import logo from './logo.svg';
import { Icon } from '../Icon/Icon';

export const Logo = (props) => {
  const { classes } = props;
  return (
    <div className={classes + " logo"}>
      <Icon classes="logo__icon" pathIcon={ logo } 
      idIcon="logo" 
      ariaLabel="Go Travel"/>
    </div>
  )
}