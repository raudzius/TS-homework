import Employee from '../status/Employee.js';
export default class BusinessLicensePerson extends Employee {
    jobs = [];
    constructor({ jobs = [], ...personProps }) {
        super(personProps);
        this.jobs = jobs;
    }
    calcPay() {
        const unpaidFinishedJobs = this.jobs.filter((job) => job.isFinished() && !job.isPayed());
        const calculatePay = unpaidFinishedJobs.reduce((sum, job) => sum + job.getPay(), 0);
        unpaidFinishedJobs.forEach((job) => job.setJobPayed());
        return calculatePay;
    }
    toString() {
        const { jobs } = this;
        let result = `
    ${this.getPersonInfo()}
    ${!jobs.length ? 'nera darbu' : ''}`;
        if (this.jobs.length) {
            result += jobs.map((job) => `${job.toString()}`).join('\n');
        }
        return result;
    }
}
//# sourceMappingURL=BusinessLicensePerson.js.map