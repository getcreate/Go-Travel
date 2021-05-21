import React from 'react';

import "./Header.scss";

export const Header = (props) => {
  const { children } = props;

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          { children }
          <div className="contact-box">
            <a href="tel:88000802020" className="contact-box__link"><strong>8 800</strong> 080 20 20</a>
            <a href="#modal" className="link">Обратный звонок</a>
          </div>
        </div>
      </div>
    </header>
  )
}