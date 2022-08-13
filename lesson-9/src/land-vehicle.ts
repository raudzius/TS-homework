import Vehicle, { VehicleProps } from './vehicle.js';

type LandVehicleProps = {
  tires: string[];
};

export default class LandVehicle extends Vehicle {
  private tires: string[];

  constructor(vehicleProps: VehicleProps, { tires }: LandVehicleProps) {
    super(vehicleProps);
    this.tires = tires;
  }

  override toString() {
    return `${this.getString()},\n tires: ${this.tires.join(', ')}`;
  }
}
