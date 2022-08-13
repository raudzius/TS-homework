import Vehicle, { VehicleProps } from './vehicle.js';

type WaterVehicleProps = { maxDepth: number; };

export default class WaterVehicle extends Vehicle {
  private maxDepth: number;

  constructor(vehicleProps: VehicleProps, { maxDepth }: WaterVehicleProps) {
    super(vehicleProps);
    this.maxDepth = maxDepth;
  }

  override toString() {
    return `${this.getString()},\n max depth: ${this.maxDepth}m`;
  }
}
