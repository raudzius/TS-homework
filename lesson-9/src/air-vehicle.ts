import Vehicle, { VehicleProps } from './vehicle.js';

type AirVehicleProps = { maxAltitude: number; };

export default class AirVehicle extends Vehicle {
  private maxAltitude: number;

  constructor(vehicleProps: VehicleProps, { maxAltitude }: AirVehicleProps) {
    super(vehicleProps);
    this.maxAltitude = maxAltitude;
  }

  override toString() {
    return `${this.getString()},\n max altitude: ${this.maxAltitude}km`;
  }
}
