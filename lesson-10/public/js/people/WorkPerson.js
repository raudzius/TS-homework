import Employee from '../status/Employee.js';
export default class WorkPerson extends Employee {
    hourPay;
    fullTimeEquivalent;
    constructor({ hourPay, fullTimeEquivalent, ...personProps }) {
        super(personProps);
        this.hourPay = hourPay;
        this.fullTimeEquivalent = fullTimeEquivalent;
    }
    calcPay() {
        const date = new Date();
        const month = date.getMonth();
        const year = date.getFullYear();
        const daysInMonth = new Date(year, month, 0).getDate();
        return daysInMonth * this.hourPay * this.fullTimeEquivalent * 8;
    }
    toString() {
        return `
    ${this.getPersonInfo()}
    hour pay: ${this.hourPay},
    full time equivalent: ${this.fullTimeEquivalent}.`;
    }
}
//# sourceMappingURL=WorkPerson.js.map