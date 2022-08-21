import Employee from '../status/Employee.js';
import Job from '../Job';
import { PersonProps } from '../status/Person';

interface BusinessLicensePersonProps extends PersonProps {
  jobs: Job[],
}

export default class BusinessLicensePerson extends Employee {
  private jobs: Job[] = [];

  constructor({ jobs = [], ...personProps }: BusinessLicensePersonProps) {
    super(personProps);
    this.jobs = jobs;
  }

  calcPay(): number {
    const unpaidFinishedJobs = this.jobs.filter((job) => job.isFinished() && !job.isPayed());
    const calculatePay = unpaidFinishedJobs.reduce((sum, job) => sum + job.getPay(), 0);
    unpaidFinishedJobs.forEach((job) => job.setJobPayed());
    return calculatePay;
  }

  override toString(): string {
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
