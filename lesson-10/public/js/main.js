import SelfEmployedPerson from './people/SelfEmployedPerson.js';
import WorkPerson from './people/WorkPerson.js';
import Job from './Job.js';
import BusinessLicensePerson from './people/BusinessLicensePerson.js';
const workPerson = new WorkPerson({
    id: '1',
    name: 'Mykolas',
    surname: 'Raudzius',
    hourPay: 20,
    fullTimeEquivalent: 1,
});
console.log(workPerson.toString());
console.log(workPerson.calcPay());
const selfEmployedPerson = new SelfEmployedPerson({
    hourPay: 30,
    hoursWorked: 200,
    id: '2',
    name: 'Mykolas',
    surname: 'Raudzius',
});
console.log(selfEmployedPerson.toString());
console.log(selfEmployedPerson.calcPay());
const facebookAddsJob = new Job('Facebook adds', 200);
facebookAddsJob.completeJob();
const businessLicensePerson = new BusinessLicensePerson({
    jobs: [
        facebookAddsJob,
        new Job('Google adds', 700),
    ],
    id: '3',
    name: 'Mykolas',
    surname: 'Raudzius',
});
console.log(businessLicensePerson.toString());
console.log(businessLicensePerson.calcPay());
//# sourceMappingURL=main.js.map