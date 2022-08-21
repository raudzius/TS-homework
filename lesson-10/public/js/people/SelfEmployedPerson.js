import Employee from '../status/Employee.js';
export default class SelfEmployedPerson extends Employee {
    hourPay;
    hoursWorked;
    constructor({ hourPay, hoursWorked, ...personProps }) {
        super(personProps);
        this.hourPay = hourPay;
        this.hoursWorked = hoursWorked;
    }
    calcPay() {
        return this.hourPay * this.hoursWorked;
    }
    toString() {
        return `
${this.getPersonInfo()}
    hour pay: ${this.hourPay}
    hours worked: ${this.hoursWorked}`;
    }
}
//# sourceMappingURL=SelfEmployedPerson.js.map