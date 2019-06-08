import React from 'react';
import './NavBar.scss';
import spaceXLogo from './../../common/logos/spacex_logo_white.png';

export default function NavBar() {
  return (
    <div className="NavBar">
      <div className="NavBar__Container">
        <img
          className="NavBar__Container__Logo"
          src={spaceXLogo}
          alt="space X logo"
        />
        <ul className="NavBar__Container__Menu">
          <li className="NavBar__Container__Menu__item">Falcon 9</li>
          <li className="NavBar__Container__Menu__item">Falcon Heavy</li>
          <li className="NavBar__Container__Menu__item">Dragon</li>
          <li className="NavBar__Container__Menu__item">Updates</li>
        </ul>
        <ul className="NavBar__Container__Menu__Right">
          <li className="NavBar__Container__Menu__Right__item">About SpaceX</li>
          <li className="NavBar__Container__Menu__Right__item">Careers</li>
          <li className="NavBar__Container__Menu__Right__item">Gallery</li>
          <li className="NavBar__Container__Menu__Right__item">Shop</li>
        </ul>
      </div>
    </div>
  );
}
