import Employee from '../status/Employee.js';
import { PersonProps } from '../status/Person.js';

export interface WorkPersonProps extends PersonProps {
  hourPay: number;
  fullTimeEquivalent: number;
}

export default class WorkPerson extends Employee {
  private hourPay: number;

  private fullTimeEquivalent: number;

  constructor({ hourPay, fullTimeEquivalent, ...personProps }: WorkPersonProps) {
    super(personProps);
    this.hourPay = hourPay;
    this.fullTimeEquivalent = fullTimeEquivalent;
  }

  calcPay(): number {
    const date = new Date();
    const month = date.getMonth();
    const year = date.getFullYear();
    const daysInMonth = new Date(year, month, 0).getDate();
    return daysInMonth * this.hourPay * this.fullTimeEquivalent * 8;
  }

  override toString(): string {
    return `
    ${this.getPersonInfo()}
    hour pay: ${this.hourPay},
    full time equivalent: ${this.fullTimeEquivalent}.`;
  }
}
