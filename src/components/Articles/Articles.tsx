import React from 'react';
import './Articles.scss';
import article1Photo from './../../common/img/falcon9_thumb_droneship.jpg';
import article2Photo from './../../common/img/dragon_thumb.jpg';
import article3Photo from './../../common/img/falcon9_thumb_lz1.jpg';

export default function Articles() {
  return (
    <div className="Articles">
      <h3 className="Articles__Title">FALCON 9 MILESTONES</h3>
      <div className="Articles__Box">
        <div className="Articles__Box__Article">
          <img
            className="Articles__Box__Article--Image"
            src={article1Photo}
            alt="photo article"
          />
          <div className="Articles__Box__Article--Description">
            <h3 className="Articles__Box__Article--Title">DRONESHIP LANDING</h3>
            <p className="Articles__Box__Article--Date">
              APRIL 8, 2016 <a href="#">SEE MORE</a>
            </p>
            <p className="Articles__Box__Article--text">
              First successful landing of Falcon 9 first stage on droneship.
            </p>
          </div>
        </div>
        <div className="Articles__Box__Article">
          <img
            className="Articles__Box__Article--Image"
            src={article2Photo}
            alt="photo article"
          />
          <div className="Articles__Box__Article--Description">
            <h3 className="Articles__Box__Article--Title">
              SPACE STATION RESUPPLY
            </h3>
            <p className="Articles__Box__Article--Date">
              APRIL 8, 2016 <a href="#">SEE MORE</a>
            </p>

            <p className="Articles__Box__Article--text">
              Dragon returns to the Space Station, delivering supplies for the
              crew.{' '}
            </p>
          </div>
        </div>
        <div className="Articles__Box__Article">
          <img
            className="Articles__Box__Article--Image"
            src={article3Photo}
            alt="photo article"
          />
          <div className="Articles__Box__Article--Description">
            <h3 className="Articles__Box__Article--Title">
              THE FALCON HAS LANDED
            </h3>
            <p className="Articles__Box__Article--Date">
              DECEMBER 21, 2015 <a href="#">SEE MORE</a>
            </p>
            <p className="Articles__Box__Article--text">
              First successful landing of Falcon 9 first stage on land.{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
