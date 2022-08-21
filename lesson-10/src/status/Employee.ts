import Person from './Person.js';

export default abstract class Employee extends Person {
  abstract calcPay(): number;
}
