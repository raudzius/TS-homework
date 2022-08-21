import Employee from '../status/Employee.js';
class BusinessLicensePerson extends Employee {
    jobs = [];
    constructor({ jobs = [], ...personProps }) {
        super(personProps);
        this.jobs = jobs;
    }
    calcPay() {
        return 1;
    }
    toString() {
    }
}
//# sourceMappingURL=BuisnessLicencePerson.js.map