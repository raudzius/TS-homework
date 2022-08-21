export default class Job {
  private static instanceCount = 0;

  private id: string;

  private finished = false;

  private payed = false;

  private dateFinished?: Date;

  constructor(private title: string, private pay: number) {
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
    const {
      id,
      title,
      finished,
      pay,
      dateFinished,
      payed,
    } = this;

    return `
    id: ${id}
    title: ${title}
    pay: ${pay}
    finished: ${finished ? 'yes' : 'no'}
    payed: ${payed ? 'yes' : 'no'}
    ${dateFinished ? `completion date: ${dateFinished?.toLocaleDateString('lt-LT')}` : ''}`;
  }
}
