export default class Person {
    id;
    name;
    surname;
    constructor({ id, name, surname }) {
        this.id = id;
        this.name = name;
        this.surname = surname;
    }
    getPersonInfo() {
        return `${this.name} ${this.surname}, id:${this.id}`;
    }
}
//# sourceMappingURL=Person.js.map