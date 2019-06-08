import React from 'react';
import './Footer.scss';
import spaceXLogo from './../../common/logos/spacex_logo_white.png';

export default function Footer() {
  return (
    <div className="Footer">
      <div className="Footer__Container">
        <img
          className="Footer__Container__Logo"
          src={spaceXLogo}
          alt="space X logo"
        />
        <ul className="Footer__Container__Menu">
          <li className="Footer__Container__Menu__item">TWITTER</li>
          <li className="Footer__Container__Menu__item">YOUTUBE</li>
          <li className="Footer__Container__Menu__item">FLICKR</li>
          <li className="Footer__Container__Menu__item">INSTAGRAM</li>
        </ul>
        <ul className="Footer__Container__Menu__Right">
          <p>© 2017 SPACE EXPLORATION TECHNOLOGIES CORP.</p>
        </ul>
      </div>
    </div>
  );
}
