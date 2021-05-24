import React from 'react';
import "./Advantages.scss";

export const Advantages = () => {
  return (
    <ul className="advantages">
      <li className="advantages__item">
        <strong className="advantages__title">6 лет</strong>
        <p className="advantages__text">на рынке туризма</p>
      </li>
      <li className="advantages__item">
        <strong className="advantages__title">24 795</strong>
        <p className="advantages__text">постоянных туристов</p>
      </li>
      <li className="advantages__item">
        <strong className="advantages__title">105</strong>
        <p className="advantages__text">офисов по всей стране</p>
      </li>
    </ul>
  )
}