import React from 'react';

import './Hero.scss';

import imageJPG from './hero-bg.jpg';
import imageWEBP from './hero-bg.webp';

export const Hero = (props, ) => {
  const { title, subtitle, children, beforeContent, afterContent } = props;

  return (
    <section className="hero">
      <div className="container">
        <div className="hero__inner">
          { beforeContent }
          <div className="hero__content">
            <h1 className="hero__title">{ title }</h1>
            <p className="hero__subtitle">{ subtitle }</p>
            { children }
          </div>
          {afterContent}
        </div>

      </div>
      <picture className="hero__image">
        <source type="image/webp" srcSet={imageWEBP} />
        <img src={imageJPG} alt="" />
      </picture>
    </section>
  )
}