import React from 'react';
import Falcon9Img from './../../common/img/falcon9-render_same_size_file.png';
import spacecraftPLane1 from './../../common/img/dragon-graphic3.png';
import spacecraftPLane2 from './../../common/img/fairing-graphic.png';
import spacecraftPLane3 from './../../common/img/falcon9-merlin-engines-solo.png';
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
          <p className="Falcon9__P--Description margin-bottom-3">
            The interstage is a composite structure that connects the first and
            second stages and holds the release and separation system. Falcon 9
            uses an all-pneumatic stage separation system for low-shock, highly
            reliable separation that can be tested on the ground, unlike
            pyrotechnic systems used on most launch vehicles.
          </p>
          <h3>FIRST STAGE</h3>
          <p className="Falcon9__P--Description">
            Falcon 9’s first stage incorporates nine Merlin engines and
            aluminum-lithium alloy tanks containing liquid oxygen and
            rocket-grade kerosene (RP-1) propellant. After ignition, a
            hold-before-release system ensures that all engines are verified for
            full-thrust performance before the rocket is released for flight.
            Then, with thrust greater than five 747s at full power, the Merlin
            engines launch the rocket to space. Unlike airplanes, a rocket's
            thrust actually increases with altitude; Falcon 9 generates more
            than 1.7 million pounds of thrust at sea level but gets up to over
            1.8 million pounds of thrust in the vacuum of space. The first stage
            engines are gradually throttled near the end of first-stage flight
            to limit launch vehicle acceleration as the rocket’s mass decreases
            with the burning of fuel.
          </p>
          <div className="Falcon9__FlexContainer">
            <div className="Flex1">
              <h4>Engines</h4>
              <p className="Flex__Numbers">9</p>
            </div>
            <div className="Flex3">
              <h4>BURN TIME</h4>
              <p className="Flex__Numbers">
                162<span>sec</span>
              </p>
            </div>
          </div>
          <div className="Falcon9__FlexContainer">
            <div className="Flex3">
              <h4>THRUST AT SEA LEVEL</h4>
              <p className="Flex__Numbers">
                7,607<span>kN</span>
                <i>1,710,000 lbf</i>
              </p>
            </div>
          </div>
          <div className="Falcon9__FlexContainer">
            <div className="Flex3">
              <h4>THRUST IN VACUUM</h4>
              <p className="Flex__Numbers">
                8,227<span>kN</span>
                <i>1,849,500 lbf</i>
              </p>
            </div>
          </div>
          <img
            className="img__3"
            src={spacecraftPLane3}
            alt="FIG. 3 The Merlin engine Octaweb"
          />
        </div>
        <div className="Falcon9__FlexContainer__Colum1">
          <img
            className="Falcon9__FlexContainer__Colum--Img"
            src={Falcon9Img}
            alt="Falcon 9 Starship"
          />
        </div>
        <div className="Falcon9__FlexContainer__Colum1">
          <div className="Falcon9__FlexContainer margin-bottom-3">
            <div className="Falcon9__FlexContainer__Colum1 self-align-end padding-1em">
              <img className="Falcon9__Plane--plane1" src={spacecraftPLane1} />
              <span className="Falcon9__Plane--plane1--PhotoAlt">FIG. 1</span>
              <p className="Falcon9__Plane--plane1--text">
                Dragon Spacecraft & Trunk
                <br />
                <i>8.1m (26.6 ft) height,</i>
                <br />
                <i>3.7m (12 ft) diameter</i>
              </p>
            </div>
            <div className="Falcon9__FlexContainer__Colum1 padding-1em">
              <img className="Falcon9__Plane--plane1" src={spacecraftPLane2} />
              <span className="Falcon9__Plane--plane1--PhotoAlt">FIG. 2</span>
              <p className="Falcon9__Plane--plane1--text">
                Dragon Spacecraft & Trunk
                <br />
                <i>8.1m (26.6 ft) height,</i>
                <br />
                <i>3.7m (12 ft) diameter</i>
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
          <div className="Falcon9__FlexContainer">
            <div className="Flex1">
              <h4>Engine</h4>
              <p className="Flex__Numbers">9</p>
            </div>
            <div className="Flex3">
              <h4>BURN TIME</h4>
              <p className="Flex__Numbers">
                397<span>sec</span>
              </p>
            </div>
          </div>
          <div className="Falcon9__FlexContainer">
            <div className="Flex3">
              <h4>THRUST</h4>
              <p className="Flex__Numbers">
                934<span>kN</span>
                <i>210,000 lbf</i>
              </p>
            </div>
          </div>
          <div className="Box__Bottom">
            <h4>NINE MERLIN ENGINES</h4>
            <p>
              With its nine first-stage Merlin engines clustered together,
              Falcon 9 can sustain up to two engine shutdowns during flight and
              still successfully complete its mission. Falcon 9 is the only
              launch vehicle in its class with this key reliability feature.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
