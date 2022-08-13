/* eslint-disable no-lone-blocks */
type Person = {
  readonly name: string,
  readonly surname: string,
  readonly sex: 'male' | 'female',
  age: number,
  income?: number,
  married?: boolean,
  hasCar?: boolean,
};

const people: Person[] = [
  {
    name: 'Jonas',
    surname: 'Jonaitis',
    sex: 'male',
    age: 26,
    income: 1200,
    married: false,
    hasCar: false,
  },
  {
    name: 'Severija',
    surname: 'Piktutytė',
    sex: 'female',
    age: 26,
    income: 1300,
    married: false,
    hasCar: true,
  },
  {
    name: 'Valdas',
    surname: 'Vilktorinas',
    sex: 'male',
    age: 16,
    income: 0,
    married: false,
    hasCar: false,
  },
  {
    name: 'Virginijus',
    surname: 'Uostauskas',
    sex: 'male',
    age: 32,
    income: 2400,
    married: true,
    hasCar: true,
  },
  {
    name: 'Samanta',
    surname: 'Uostauskienė',
    sex: 'female',
    age: 28,
    income: 1200,
    married: true,
    hasCar: true,
  },
  {
    name: 'Janina',
    surname: 'Stalautinskienė',
    sex: 'female',
    age: 72,
    income: 364,
    married: false,
    hasCar: false,
  },
];

/*
    Šių užduočių tikslas ne tik išspręsti užduotis, bet išmokti kurti tipus pagal jau esančius tipus
    Pirmos 2 užduotys pateikiamos kaip pavyzdžiai kaip turėtų būt sprendžiami uždaviniai:
      * Aprašome tipus
      * Aprašome funkcijas
      * (jeigu reikia aprašome naujus kintamuosius reikalingus sprendimui)
      * Atliekame užduoties sprendimą
      * Spausdiname sprendimo rezultatus

    Visas funkcijas ir kintamuosius reikia aprašyti tipais (net jei to ir nereikalauja TS
         compiler'is)

  */
console.groupCollapsed('1. Sukurkite funkciją, kuri paverčia žmogaus objektą -> {name: string, surname: string} objektu. Naudojant šią funkciją performuokite visą žmonių masyvą');
{
    // Tipai:
    type Identity = {
      name: Person['name'],
      surname: Person['surname'],
    };

    // Funkcijos:
    const personToIdentity = ({ name, surname }: Person): Identity => ({ name, surname });

    // Sprendimas:
    const identities: Identity[] = people.map(personToIdentity);

    // Spausdinimas:
    console.table(people);
    console.table(identities);
}
console.groupEnd();

console.groupCollapsed('2. Sukurkite funkciją, kuri paverčia žmogaus objektą -> {married: boolean, hasCar: boolean} objektu. Naudojant šią funkciją performuokite visą žmonių masyvą.');
{
  // type TaskProps = {
  //   married: NonNullable<Person["married"]>,
  //   hasCar: NonNullable<Person["hasCar"]>,
  // }

    type TaskProps = Pick<Required<Person>, 'hasCar' | 'married'>;

    const selectTaskProps = ({ married, hasCar }: Person): TaskProps => ({
      married: Boolean(married),
      hasCar: Boolean(hasCar),
    });

    const result: TaskProps[] = people.map(selectTaskProps);

    console.table(people);
    console.table(result);
}
console.groupEnd();

console.groupCollapsed('3. Atspausdinkite objektus su visų žmonių vardais, pavardėm bei santuokos statusais');
{
    type MarriageStatusPerson = { [Key in keyof Pick<Person, 'name' | 'surname' | 'married'>]-?: Person[Key]
    };

    const marriedPeople = people.filter((person) => 'married' in person);

    const makeMarriedPeopleObj = ({ name, surname, married }: Person): MarriageStatusPerson => ({
      name,
      surname,
      married: married!,
    });

    const marriedPeopleArray = marriedPeople.map((person) => makeMarriedPeopleObj(person));
    console.table(marriedPeopleArray);
}
console.groupEnd();

console.groupCollapsed('4. Sukurtite masyvą su lytimis ir uždirbamu pinigų kiekiu, pagal pradinį žmonių masyvą');
{
    type GenderIncome = { [Key in keyof Pick<Person, 'sex' | 'income'>]-?: Person[Key] };

    const workingPeople = people.filter((person) => 'income' in person);

    const makeGenderIncomeObj = ({ sex, income }: Person):
    GenderIncome => ({ sex, income: income! });

    const workingPeopleArray = workingPeople.map((person) => makeGenderIncomeObj(person));

    console.table(workingPeopleArray);
}
console.groupEnd();

console.groupCollapsed('5. Sukurtite masyvą su vardais, pavardėmis ir lytimi, pagal pradinį žmonių masyvą');
{
    type FullnameGender = Pick<Person, 'name' | 'surname' | 'sex'>;

    const makeFullnameGenderObj = ({ name, surname, sex }: Person): FullnameGender => ({
      name,
      surname,
      sex,
    });

    const peopleWithGender = people.map((person) => makeFullnameGenderObj(person));

    console.table(peopleWithGender);
}
console.groupEnd();

console.groupCollapsed('6. Atspausdinkite visus vyrus');
{
    type Male = Omit<Person, 'sex'> & { sex: 'male'; };

    const males = people.filter(({ sex }) => sex === 'male') as Male[];

    console.table(males);
}
console.groupEnd();

console.groupCollapsed('7. Atspausdinkite visas moteris');
{
    type Female = Omit<Person, 'sex'> & { sex: 'female'; };

    const females = people.filter(({ sex }) => sex === 'female') as Female[];

    console.table(females);
}
console.groupEnd();

console.groupCollapsed('8. Atspausdinkite žmonių vardus ir pavardes, kurie turi mašinas');
{
    type PersonWithCar = Omit<Person, 'hasCar'> & { hasCar: true; };

    const peopleWithCar: PersonWithCar[] = people
      .filter(({ hasCar }) => hasCar) as PersonWithCar[];

    console.table(peopleWithCar);
}
console.groupEnd();

console.groupCollapsed('9. Atspausdinkite žmones kurie yra susituokę');
{
    type MarriedPerson = Omit<Person, 'married'> & { married: true; };

    const marriedPeople: MarriedPerson[] = people.filter(
      ({ married }) => married,
    ) as MarriedPerson[];

    console.table(marriedPeople);
}
console.groupEnd();

console.groupCollapsed('10. Sukurkite objektą, kuriame būtų apskaičiuotas vairuojančių žmonių kiekis pagal lytį');
{
    type DriversByGender = { [Key in Person['sex']]?: number };

    const makeDriversByGenderObj = (result: DriversByGender, { hasCar, sex }: Person)
    : DriversByGender => {
      if (!hasCar) return result;

      const driverCountObj = result;
      driverCountObj[sex] = (driverCountObj[sex] ?? 0) + 1;
      return driverCountObj;
    };

    const driversByGender: DriversByGender = people
      .reduce((prevObj, currObj) => makeDriversByGenderObj(prevObj, currObj), {});

    console.log(driversByGender);
}
console.groupEnd();

console.groupCollapsed('11. Performuokite žmonių masyvą, jog kiekvieno žmogaus savybė "income", taptų "salary"');
{
    type PersonWithSalary =
        { [Key in keyof Person as Key extends 'income' ? 'salary' : Key]: Person[Key] };

    const peopleWithSalary: PersonWithSalary[] = people.map((person) => {
      if (person.income === undefined) return person;

      const { income, ...props } = person;
      const newPerson: PersonWithSalary = { ...props };

      newPerson.salary = income;
      return newPerson;
    });

    console.table(peopleWithSalary);
}
console.groupEnd();

console.groupCollapsed('12. Suformuokite žmonių masyvą, kuriame nebūtų lyties, vardo ir pavardės');
{
    type AnnonymousPerson = Omit<Person, 'sex' | 'name' | 'surname'>;

    const annonymousPeople: AnnonymousPerson[] = people.map(({
      sex, name, surname, ...props
    }) => ({ ...props }));

    console.table(annonymousPeople);
}
console.groupEnd();

console.groupCollapsed('13. Suformuokite žmonių masyvą, kuriame "name" ir "surname" savybės, būtų pakeistos "fullname" savybe');
{
    type PersonWithFullname = Omit<Person, 'name' | 'surname'> & { fullname: `${Person['name']} ${Person['surname']}`; };

    const peopleWithFullname: PersonWithFullname[] = people.map(({ name, surname, ...props }) => ({
      fullname: `${name} ${surname}`,
      ...props,
    }));

    console.table(peopleWithFullname);
}
console.groupEnd();
