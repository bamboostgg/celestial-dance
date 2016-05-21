import React           from 'react';
import Nothing         from '../Simulation/Step'
import { getNetAccel } from '../Helpers/AccelerationLogic';
import { 
  translate, 
  rand, 
  vLog, 
  objToArr,
  massToRadius 
}                      from '../Helpers/Helpers';

const lightDecay = 0.5;

const range = (n) => Array.from( { length: n } ,( _ ,i) => i);

const Dancer = (props) => {
  if (!props.sun) {
    return (
      <a-sphere 
        radius={massToRadius(props.mass)}
        class='dancer' 
        mass={props.mass}
        step
        velocity={props.velocity.join(' ')}
        position={props.position.join(' ')}
        light={props.light}
        color={props.color}
        material={props.material}
      />
    );
  } else {
    return (
      <a-entity 
        radius={massToRadius(props.mass)}
        class='dancer'
        mass={props.mass}
        step
        velocity={props.velocity.join(' ')}
        position={props.position.join(' ')}
      >
        <a-sphere 
          radius={massToRadius(props.mass)}
          light={props.light}
          color={props.color}
          material={props.material}
        />
        {range(50).map((_, index, collection) => (
          <a-sphere
            key={index}
            radius={massToRadius(props.mass) * (1 + lightDecay * index / collection.length)}
            material={`opacity: ${1 - index / collection.length}; color: white; side: back`}
          />
        ))}
      </a-entity>
    );
  }
};

// color="#FFF"
// side="both"
// opacity="0.1"
module.exports = Dancer;
