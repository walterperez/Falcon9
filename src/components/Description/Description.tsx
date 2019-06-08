import React from 'react';
import './Description.scss';
import SpaceShiptPhoto from './../../common/img/falcon9-render_same_size_file.png';

export default function Description() {
  return (
    <div className="Description">
      <div className="Description__FlexContainer">
        <div className="Description__FlexContainer--Left">
          <h1 className="Description__FlexContainer--Left--Title">FALCON 9</h1>
          <div className="Description__FlexContainer--Left--FlexContainer">
            <div className="Description__FlexContainer--Left--FlexContainer--Col1">
              Falcon 9 is a two-stage rocket designed and manufactured by SpaceX
              for the reliable and safe transport of satellites and the Dragon
              spacecraft into orbit. Falcon 9 is the first orbital class rocket
              capable of reflight. SpaceX believes rocket reusability is the key
              breakthrough needed to reduce the cost of access to space and
              enable people to live on other planets.
              <br />
              Falcon 9 was designed from the ground up for maximum reliability.
              Falcon 9’s simple two-stage configuration minimizes the number of
              separation events -- and with nine first-stage engines, it can
              safely complete its mission even in the event of an engine
              shutdown.
            </div>
            <div className="Description__FlexContainer--Left--FlexContainer--Col1">
              Falcon 9 made history in 2012 when it delivered Dragon into the
              correct orbit for rendezvous with the International Space Station,
              making SpaceX the first commercial company ever to visit the
              station. Since then Falcon 9 has made numerous trips to space,
              delivering satellites to orbit as well as delivering and returning
              cargo from the space station for NASA. Falcon 9, along with the
              Dragon spacecraft, was designed from the outset to deliver humans
              into space and under an agreement with NASA, SpaceX is actively
              working toward this goal.
            </div>
          </div>
        </div>
        <div className="Description__FlexContainer--Right">
          <ul className="Description__FlexContainer--Right__List">
            <li className="Description__FlexContainer--Right__List--Item">
              Falcon 9 <a href="#">Pricing</a>
            </li>
            <li className="Description__FlexContainer--Right__List--Item">
              <a href="#">Launch Manifest</a>
            </li>
            <li className="Description__FlexContainer--Right__List--Item">
              Falcon 9 <a href="#">Use'r Guide</a>
            </li>
          </ul>
          <img
            className="Description__FlexContainer--Right__SpaceShip--Image"
            src={SpaceShiptPhoto}
            alt="Falcon 9 Spaceship Image"
          />
        </div>
      </div>
    </div>
  );
}
