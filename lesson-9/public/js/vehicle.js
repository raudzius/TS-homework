export default class Vehicle {
    brand;
    model;
    year;
    constructor({ brand, model, year }) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    getString() {
        return ` brand:${this.brand},\n model:${this.model},\n year:${this.year}`;
    }
}
//# sourceMappingURL=vehicle.js.map