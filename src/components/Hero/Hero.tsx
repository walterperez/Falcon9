import React from 'react';
import './Hero.scss';
import HeroImg from './../../common/img/header___falcon 9.jpg';

export default function Hero() {
  return (
    <div className="Hero">
      <img className="Hero__Img" src={HeroImg} alt="Hero Background Image" />
      <div className="Hero__Text">
        <h1 className="Hero__Title">
          FALCON 9 & DRAGON TO RETURN ASTRONAUTS
          <br />
          TO SPACE
        </h1>
        <div className="Hero__PlayIcon" />
      </div>
    </div>
  );
}
