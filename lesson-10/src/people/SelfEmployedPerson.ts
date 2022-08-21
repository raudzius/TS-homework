import Employee from '../status/Employee.js';
import { PersonProps } from '../status/Person.js';

interface SelfEmployedPersonProps extends PersonProps {
  hourPay: number,
  hoursWorked: number,
}

export default class SelfEmployedPerson extends Employee {
  private hourPay: number;

  private hoursWorked: number;

  constructor({ hourPay, hoursWorked, ...personProps }: SelfEmployedPersonProps) {
    super(personProps);
    this.hourPay = hourPay;
    this.hoursWorked = hoursWorked;
  }

  calcPay(): number {
    return this.hourPay * this.hoursWorked;
  }

  override toString(): string {
    return `
${this.getPersonInfo()}
    hour pay: ${this.hourPay}
    hours worked: ${this.hoursWorked}`;
  }
}
