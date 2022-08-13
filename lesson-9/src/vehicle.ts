export type VehicleProps = {
  brand: string,
  model: string,
  year: number;
};

export default class Vehicle {
  protected brand: string;

  protected model: string;

  protected year: number;

  constructor({ brand, model, year }: VehicleProps) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  protected getString() {
    return ` brand:${this.brand},\n model:${this.model},\n year:${this.year}`;
  }
}
