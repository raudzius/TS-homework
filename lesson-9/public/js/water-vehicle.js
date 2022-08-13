import Vehicle from './vehicle.js';
export default class WaterVehicle extends Vehicle {
    maxDepth;
    constructor(vehicleProps, { maxDepth }) {
        super(vehicleProps);
        this.maxDepth = maxDepth;
    }
    toString() {
        return `${this.getString()},\n max depth: ${this.maxDepth}m`;
    }
}
//# sourceMappingURL=water-vehicle.js.map