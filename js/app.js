import 'aframe';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Dancer from './components/Dancer';
import dancerData from './Helpers/dancerData';
import { massToRadius } from './Helpers/Helpers';

const SpaceScene = () => (
  <a-scene>
    <a-assets>
      <img id="outer-space" crossOrigin src="http://i.imgur.com/gNIwweI.jpg" />
    </a-assets>
    {dancerData.map((dancer, index) => {
      if (dancer.mass >= 1000) {
        console.log('sun?', dancer);
        dancer.material = "color: #FFF; shader: flat"
        dancer.light = "color: #DDDDFF; distance: 5000; intensity: 2; type: point"
        return (
          <a-sphere key={index} light={dancer.light} radius={massToRadius(dancer.mass)}
            class='dancer' mass={dancer.mass} step
            velocity={dancer.velocity.join(' ')}
            position={dancer.position.join(' ')}
            material={dancer.material}
          />
        )
      }
      return (
        <Dancer key={index} mass={dancer.mass} position={dancer.position}
           velocity={dancer.velocity} color={dancer.color}
           material="metalness: 0.8"
        />
      )
    })}
    <a-camera wasd-controls="fly: true" id="player" position="0 1.8 0" />
    <a-sky src="#outer-space" material="shader: flat"/>
    <a-entity light="type: ambient; color: #111"></a-entity>
  </a-scene>
);

ReactDOM.render(<SpaceScene/>, document.querySelector('.scene-container'));
