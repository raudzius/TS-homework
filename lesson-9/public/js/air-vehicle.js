import Vehicle from './vehicle.js';
export default class AirVehicle extends Vehicle {
    maxAltitude;
    constructor(vehicleProps, { maxAltitude }) {
        super(vehicleProps);
        this.maxAltitude = maxAltitude;
    }
    toString() {
        return `${this.getString()},\n max altitude: ${this.maxAltitude}km`;
    }
}
//# sourceMappingURL=air-vehicle.js.map