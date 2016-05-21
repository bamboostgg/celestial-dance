import React            from 'react';
import Dancer           from './Dancer';
import dancerData       from '../Helpers/dancerData';
import { massToRadius } from '../Helpers/Helpers';
var KeyboardControls = require('aframe-keyboard-controls');
var ProxyControls = require('aframe-proxy-controls');
AFRAME.registerComponent('keyboard-controls', KeyboardControls);
AFRAME.registerComponent('proxy-controls', ProxyControls);

const SpaceScene = () => (
  <a-scene proxy-controls="debug: true">
    <a-assets>
<<<<<<< HEAD
      <img id="outer-space" src='assets/spaceSky.jpg' />
      <sound id="ping" src='assets/ping.wav' />
      <a-asset-item id="datBoi"src="assets/datboi/dat-boi.dae" />
      <a-asset-item id="datUnicycle" src="assets/datboi/dat-unicycle.dae" />
=======
      <a-asset-item id="datBoi"src="assets/datboi/datBoi-body.obj"></a-asset-item>
      <a-asset-item id="datWheel" src="assets/datboi/datBoi-wheel.obj"></a-asset-item>
      <a-asset-item id="datFrame" src="assets/datboi/datBoi-frame.obj"></a-asset-item>
      <img id="outer-space" src="./assets/spaceSky.jpg" />
>>>>>>> adds color to datBoi with obj models
    </a-assets>
    {dancerData.map((dancer, index) => (
        <Dancer
          key={index}
          mass={dancer.mass}
          position={dancer.position}
          velocity={dancer.velocity}
          sun={dancer.sun}
          light={dancer.light} 
          material={dancer.material}
        />
      )
    )}
    <a-entity
      camera
      look-controls
      keyboard-controls="acceleration: 400; fly: true; easing: 5"
      id="player" 
      position="0 1.8 0"
    />
    <a-sky 
      src="#outer-space"
      material="shader: flat"
    />
    <a-entity light="type: ambient; color: #555"></a-entity>
  </a-scene>
);

module.exports = SpaceScene;
