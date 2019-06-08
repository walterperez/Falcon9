import React from 'react';
import './Technical.scss';

export default function Technical() {
  return (
    <div className="Technical">
      <div className="Technical__Box">
        <h3 className="Technical__Box__Title">TECHNICAL OVERVIEW</h3>
        <div className="Technical__Box__Flex">
          <div className="Technical__Box__Flex--Col1">
            <div className="Technical__Box__Flex--Col1--Item">
              <h4>HEIGHT</h4>
              <p>
                70m <span>229.6 ft</span>
              </p>
            </div>
            <div className="Technical__Box__Flex--Col1--Item">
              <h4>DIAMETER</h4>
              <p>
                3.7m <span>12 ft</span>
              </p>
            </div>
          </div>
          <div className="Technical__Box__Flex--Col1">
            <div className="Technical__Box__Flex--Col1--Item">
              <h4>MASS</h4>
              <p>
                549,054kg <span>1,207,920 lb</span>
              </p>
            </div>
            <div className="Technical__Box__Flex--Col1--Item">
              <h4>STAGES</h4>
              <p>2</p>
            </div>
          </div>
          <div className="Technical__Box__Flex--Col1">
            <div className="Technical__Box__Flex--Col1--Item">
              <h4>PAYLOAD TO LEO</h4>
              <p>
                22,800kg <span>50,265 lb</span>
              </p>
            </div>
            <div className="Technical__Box__Flex--Col1--Item">
              <h4>PAYLOAD TO GTO</h4>
              <p>
                8,300kg <span>18,300 lb</span>
              </p>
            </div>
          </div>
          <div className="Technical__Box__Flex--Col1">
            <div className="Technical__Box__Flex--Col1--Item">
              <h4>PAYLOAD TO MARS</h4>
              <p>
                4,020kg <span>8,860lb</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
