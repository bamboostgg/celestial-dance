import { randColor } from './Helpers';
import { ORBITAL_SPEED } from './Constants';
import { makeDancer, makeRandDancer, makeOrbitalDancer,
  preventOverlappingDancers
} from './MakeDancers';

// Random orbitals
const sun = makeDancer(10000, [0, 0, -25], [0, 0, 0], [0, 0, 0],
  "color: #FFF; distance: 5000; intensity: 2; type: point",
  "color: #FFF; metalness: 0.8; side: back"
);
sun.sun = true;

const dancerData = [
  sun,
  makeOrbitalDancer(sun, 'x', 1),
  makeOrbitalDancer(sun, 'y', 1),
  makeOrbitalDancer(sun, 'z', 1),
  makeOrbitalDancer(sun, 'x', -1),
  makeOrbitalDancer(sun, 'y', -1),
  makeOrbitalDancer(sun, 'z', -1),
  makeOrbitalDancer(sun, 'x', 1),
  makeOrbitalDancer(sun, 'y', 1),
  makeOrbitalDancer(sun, 'z', 1),
  makeOrbitalDancer(sun, 'x', -1),
  makeOrbitalDancer(sun, 'y', -1),
  makeOrbitalDancer(sun, 'z', -1),
  makeOrbitalDancer(sun, 'x', 1),
  makeOrbitalDancer(sun, 'y', 1),
  makeOrbitalDancer(sun, 'z', 1),
  makeOrbitalDancer(sun, 'x', -1),
  makeOrbitalDancer(sun, 'y', -1),
  makeOrbitalDancer(sun, 'z', -1),
];

preventOverlappingDancers(dancerData);

module.exports = dancerData;
