export default class Job {
    title;
    pay;
    static instanceCount = 0;
    id;
    finished = false;
    payed = false;
    dateFinished;
    constructor(title, pay) {
        this.title = title;
        this.pay = pay;
        Job.instanceCount += 1;
        this.id = `Job-${Job.instanceCount}`;
        this.finished = false;
        this.payed = false;
    }
    completeJob() {
        this.finished = true;
        this.dateFinished = new Date();
    }
    setJobPayed() {
        this.payed = true;
    }
    getPay() {
        return this.pay;
    }
    isFinished() {
        return this.finished;
    }
    isPayed() {
        return this.payed;
    }
    toString() {
        const { id, title, finished, pay, dateFinished, payed, } = this;
        return `
    id: ${id}
    title: ${title}
    pay: ${pay}
    finished: ${finished ? 'yes' : 'no'}
    payed: ${payed ? 'yes' : 'no'}
    ${dateFinished ? `completion date: ${dateFinished?.toLocaleDateString('lt-LT')}` : ''}`;
    }
}
//# sourceMappingURL=Job.js.map