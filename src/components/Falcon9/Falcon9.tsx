import React from 'react';
import Falcon9Img from './../../common/img/falcon9-render_same_size_file.png';
import spacecraftPLane1 from './../../common/img/dragon-graphic3.png';
import spacecraftPLane2 from './../../common/img/fairing-graphic.png';
import './Falcon9.scss';

export default function Falcon9() {
  return (
    <div className="Falcon9">
      <div className="Falcon9__FlexContainer">
        <div className="Falcon9__FlexContainer__Colum1">
          <h3>PAYLOAD</h3>
          <p className="Falcon9__P--Description">
            Falcon 9 delivers payloads to space aboard the Dragon spacecraft or
            inside a composite fairing.
          </p>
          <h4>DRAGON SPACECRAFT</h4>
          <p>
            Dragon carries cargo in the spacecraft’s pressurized capsule and
            unpressurized trunk, which can also accommodate secondary payloads.
            In the future, Dragon will carry astronauts in the pressurized
            capsule as well.
          </p>
          <a href="#">Learn more about Dragon</a>
          <h4>COMPOSITE FAIRING</h4>
          <p>
            The payload fairing is for the delivery of satellites to
            destinations in low Earth orbit (LEO), geosynchronous transfer orbit
            (GTO) and beyond.
          </p>
          <a href="#">See Composite Fairing on Falcon Heavy</a>
          <h3>INTERSTAGE</h3>
          <p className="Falcon9__P--Description">
            The interstage is a composite structure that connects the first and
            second stages and holds the release and separation system. Falcon 9
            uses an all-pneumatic stage separation system for low-shock, highly
            reliable separation that can be tested on the ground, unlike
            pyrotechnic systems used on most launch vehicles.
          </p>
        </div>
        <div className="Falcon9__FlexContainer__Colum1">
          <img
            className="Falcon9__FlexContainer__Colum--Img"
            src={Falcon9Img}
            alt="Falcon 9 Starship"
          />
        </div>
        <div className="Falcon9__FlexContainer__Colum1">
          <div className="Falcon9__FlexContainer">
            <div className="Falcon9__FlexContainer__Colum1 self-align-end padding-1em">
              <img className="Falcon9__Plane--plane1" src={spacecraftPLane1} />
              <span>FIG. 1</span>
              <p className="Falcon9__Plane--plane1">
                Dragon Spacecraft & Trunk
                <br />
                8.1m (26.6 ft) height,
                <br />
                3.7m (12 ft) diameter
              </p>
            </div>
            <div className="Falcon9__FlexContainer__Colum1 padding-1em">
              <img className="Falcon9__Plane--plane1" src={spacecraftPLane2} />
              <span>FIG. 1</span>
              <p>
                Dragon Spacecraft & Trunk
                <br />
                8.1m (26.6 ft) height,
                <br />
                3.7m (12 ft) diameter
              </p>
            </div>
          </div>

          <h3>SECOND STAGE</h3>
          <p className="Falcon9__P--Description">
            The second stage, powered by a single Merlin vacuum engine, delivers
            Falcon 9’s payload to the desired orbit. The second stage engine
            ignites a few seconds after stage separation, and can be restarted
            multiple times to place multiple payloads into different orbits. For
            maximum reliability, the second stage has redundant igniter systems.
            Like the first stage, the second stage is made from a high-strength
            aluminum-lithium alloy.
          </p>
        </div>
      </div>
    </div>
  );
}
