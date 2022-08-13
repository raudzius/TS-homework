/* eslint-disable no-console */
import AirVehicle from './air-vehicle.js';
import LandVehicle from './land-vehicle.js';
import WaterVehicle from './water-vehicle.js';

const vehicles = [
  new LandVehicle(
    { brand: 'Honda', model: 'Civic', year: 1998 },
    {
      tires: [
        'Ironman iMove gen as',
        'Ironman iMove gen as',
        'Goodyear Assurance Fuel Max',
        'Goodyear Assurance Fuel Max',
      ],
    },
  ),
  new AirVehicle({ brand: 'boeing', model: '737 MAX 7', year: 2018 }, { maxAltitude: 12.5 }),
  new WaterVehicle({ brand: 'USS Seawolf', model: 'SSN-21', year: 2005 }, { maxDepth: 490 }),
];

vehicles.forEach((vehicle) => { console.log(vehicle.toString()); });
