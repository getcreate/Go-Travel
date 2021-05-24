import React from 'react';
import "./Social.scss";
import { Icon } from "../Icon";

import YouTube from "./YouTube.svg";
import VK from "./VK.svg";
import Instagram from "./Instagram.svg";

export const Social = () => {
  return (
    <div className="social">
      <ul className="social__list">
        <li className="social__item">
          <a className="social__link" href="/">
            <Icon
              classes="social__icon"
              pathIcon={YouTube}
              idIcon="yt" 
              ariaLabel="YouTube"
            />
          </a>
        </li>
        <li className="social__item">
          <a className="social__link" href="/">
            <Icon
              classes="social__icon"
              pathIcon={VK}
              idIcon="vk" 
              ariaLabel="Вконтакте"
            />
          </a>
        </li>
        <li className="social__item">
          <a className="social__link" href="/">
            <Icon
              classes="social__icon" 
              pathIcon={Instagram}
              idIcon="inst" 
              ariaLabel="Instagram"
            />
          </a>
        </li>
      </ul>
    </div>
  )
}