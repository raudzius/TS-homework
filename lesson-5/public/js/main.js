"use strict";
const people = [
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
console.groupCollapsed('1. Sukurkite funkciją, kuri paverčia žmogaus objektą -> {name: string, surname: string} objektu. Naudojant šią funkciją performuokite visą žmonių masyvą');
{
    const personToIdentity = ({ name, surname }) => ({ name, surname });
    const identities = people.map(personToIdentity);
    console.table(people);
    console.table(identities);
}
console.groupEnd();
console.groupCollapsed('2. Sukurkite funkciją, kuri paverčia žmogaus objektą -> {married: boolean, hasCar: boolean} objektu. Naudojant šią funkciją performuokite visą žmonių masyvą.');
{
    const selectTaskProps = ({ married, hasCar }) => ({
        married: Boolean(married),
        hasCar: Boolean(hasCar),
    });
    const result = people.map(selectTaskProps);
    console.table(people);
    console.table(result);
}
console.groupEnd();
console.groupCollapsed('3. Atspausdinkite objektus su visų žmonių vardais, pavardėm bei santuokos statusais');
{
    const marriedPeople = people.filter((person) => 'married' in person);
    const makeMarriedPeopleObj = ({ name, surname, married }) => ({
        name,
        surname,
        married: married,
    });
    const marriedPeopleArray = marriedPeople.map((person) => makeMarriedPeopleObj(person));
    console.table(marriedPeopleArray);
}
console.groupEnd();
console.groupCollapsed('4. Sukurtite masyvą su lytimis ir uždirbamu pinigų kiekiu, pagal pradinį žmonių masyvą');
{
    const workingPeople = people.filter((person) => 'income' in person);
    const makeGenderIncomeObj = ({ sex, income }) => ({ sex, income: income });
    const workingPeopleArray = workingPeople.map((person) => makeGenderIncomeObj(person));
    console.table(workingPeopleArray);
}
console.groupEnd();
console.groupCollapsed('5. Sukurtite masyvą su vardais, pavardėmis ir lytimi, pagal pradinį žmonių masyvą');
{
    const makeFullnameGenderObj = ({ name, surname, sex }) => ({
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
    const males = people.filter(({ sex }) => sex === 'male');
    console.table(males);
}
console.groupEnd();
console.groupCollapsed('7. Atspausdinkite visas moteris');
{
    const females = people.filter(({ sex }) => sex === 'female');
    console.table(females);
}
console.groupEnd();
console.groupCollapsed('8. Atspausdinkite žmonių vardus ir pavardes, kurie turi mašinas');
{
    const peopleWithCar = people
        .filter(({ hasCar }) => hasCar);
    console.table(peopleWithCar);
}
console.groupEnd();
console.groupCollapsed('9. Atspausdinkite žmones kurie yra susituokę');
{
    const marriedPeople = people.filter(({ married }) => married);
    console.table(marriedPeople);
}
console.groupEnd();
console.groupCollapsed('10. Sukurkite objektą, kuriame būtų apskaičiuotas vairuojančių žmonių kiekis pagal lytį');
{
    const makeDriversByGenderObj = (result, { hasCar, sex }) => {
        if (!hasCar)
            return result;
        const driverCountObj = result;
        driverCountObj[sex] = (driverCountObj[sex] ?? 0) + 1;
        return driverCountObj;
    };
    const driversByGender = people
        .reduce((prevObj, currObj) => makeDriversByGenderObj(prevObj, currObj), {});
    console.log(driversByGender);
}
console.groupEnd();
console.groupCollapsed('11. Performuokite žmonių masyvą, jog kiekvieno žmogaus savybė "income", taptų "salary"');
{
    const peopleWithSalary = people.map((person) => {
        if (person.income === undefined)
            return person;
        const { income, ...props } = person;
        const newPerson = { ...props };
        newPerson.salary = income;
        return newPerson;
    });
    console.table(peopleWithSalary);
}
console.groupEnd();
console.groupCollapsed('12. Suformuokite žmonių masyvą, kuriame nebūtų lyties, vardo ir pavardės');
{
    const annonymousPeople = people.map(({ sex, name, surname, ...props }) => ({ ...props }));
    console.table(annonymousPeople);
}
console.groupEnd();
console.groupCollapsed('13. Suformuokite žmonių masyvą, kuriame "name" ir "surname" savybės, būtų pakeistos "fullname" savybe');
{
    const peopleWithFullname = people.map(({ name, surname, ...props }) => ({
        fullname: `${name} ${surname}`,
        ...props,
    }));
    console.table(peopleWithFullname);
}
console.groupEnd();
//# sourceMappingURL=main.js.map