export interface PersonProps {
  id: string,
  name: string,
  surname: string,
}

export default abstract class Person {
  protected id: string;

  protected name: string;

  protected surname: string;

  constructor({ id, name, surname }: PersonProps) {
    this.id = id;
    this.name = name;
    this.surname = surname;
  }

  getPersonInfo() {
    return `
    ${this.name} ${this.surname},
    id: ${this.id},`;
  }

  abstract toString(): string;
}
