import Vehicle from './vehicle.js';
export default class LandVehicle extends Vehicle {
    tires;
    constructor(vehicleProps, { tires }) {
        super(vehicleProps);
        this.tires = tires;
    }
    toString() {
        return `${this.getString()},\n tires: ${this.tires.join(', ')}`;
    }
}
//# sourceMappingURL=land-vehicle.js.map