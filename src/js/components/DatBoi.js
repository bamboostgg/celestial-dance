import React  from 'react';

const DatBoi = (props) => (
  <a-entity
    radius={props.radius}
    class={props.class} 
    mass={props.mass}
    step
    velocity={props.velocity}
    position={props.position}
    light={props.light}
    rotation={props.rotation}
  >
    <a-obj-model
      src="#datBoi" 
      material={props.material}
      color={props.color}
    />
    <a-obj-model
      src="#datWheel"
      material="color: black; shader:flat"
      color="#000000"
    />
    <a-obj-model
      src="#datFrame"
      material="color: orange"
      color="#ffa500"
    />
  </a-entity>
)

module.exports = DatBoi;