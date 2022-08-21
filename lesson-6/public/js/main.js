"use strict";
const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const stringArray = ['I', 'hate', 'homework'];
const boolArray = [true, false, true, false];
console.group('1. Parašykite funkciją, kuri grąžina pirmą masyvo elementą.');
{
    const getFirstArrayEl = (array) => array[0];
    console.log(getFirstArrayEl(numArray));
    console.log(getFirstArrayEl(stringArray));
    console.log(getFirstArrayEl(boolArray));
}
console.groupEnd();
console.group('2. Parašykite funkciją, kuri grąžina paskutinį masyvo elementą.');
{
    const getLastArrayEl = (array) => array[array.length - 1];
    console.log(getLastArrayEl(numArray));
    console.log(getLastArrayEl(stringArray));
    console.log(getLastArrayEl(boolArray));
}
console.groupEnd();
console.group('3. Parašykite funkciją, kuri grąžina vienarūšių primityvių reikšmių masyvo kopiją');
{
    const copyPrimitiveArray = (array) => [...array];
    console.log(copyPrimitiveArray(numArray));
    console.log(copyPrimitiveArray(stringArray));
    console.log(copyPrimitiveArray(boolArray));
}
console.groupEnd();
console.group('4. Parašykite funkciją,  kuri pirmu parametru priima string | number | boolen, grąžina to tipo masyvą su perduota reikšme tiek kartų, kiek nurodyta antru parametru');
{
    const clonePrimitiveNTimes = (input, num) => {
        const newArray = [];
        for (let i = 0; i < num; i += 1) {
            newArray.push(input);
        }
        return newArray;
    };
    console.log(clonePrimitiveNTimes(1, 4));
}
console.groupEnd();
console.group('5. Parašykite funkciją, kuri sujungia tokių pat tipų masyvus į vieną masyvą');
{
    const mergeArraysOfSameType = (arr1, arr2) => arr1.concat(arr2);
    console.log(mergeArraysOfSameType([1, 2, 3], [4, 2, 1]));
}
console.groupEnd();
console.group('6. Parašykite funkciją, kuri priimtų bet kokią reikšmę ir grąžintų objektą su savybėmis-funkcijomis "setValue" - reikšmei nustatyti ir "getValue" tai reikšmei nustatyti. Funkcijai perduota reikšmė neturi būti pasiekiama tiesiogiai.');
{
    const makeIncapsulatedObj = (initialValue) => {
        let value = initialValue;
        return {
            setValue(newValue) { value = newValue; },
            getValue() {
                return value;
            },
        };
    };
    const value1 = 7;
    const value2 = ['Sidnius', 'Mauricijus', 'Penktasis'];
    const value3 = { name: 'Fanatijus', surname: 'Labdara' };
    const obj1 = makeIncapsulatedObj(value1);
    const obj2 = makeIncapsulatedObj(value2);
    const obj3 = makeIncapsulatedObj(value3);
    console.log('initial values');
    console.log({
        value1: obj1.getValue(),
        value2: obj2.getValue(),
        value3: obj3.getValue(),
    });
    console.log('changing values...');
    obj1.setValue(9);
    obj2.setValue(['Pakeista']);
    obj3.setValue({ name: 'Pakaitalas', surname: 'Fuflo' });
    console.log('new values');
    console.log({
        value1: obj1.getValue(),
        value2: obj2.getValue(),
        value3: obj3.getValue(),
    });
}
console.groupEnd();
console.group(`
  7. Turite 2 tipus: Student ir Worker kurie pasižymi bendrais bruožais Person. 
  Parašykite 2 funkcijas <isStudent> ir <isWorker> skirtas atpažinti koks objektas buvo perduotas.
  Sukūrę tokias funkcijas iteruokite per žmonių masyvą, sugrupuodami elementus pagal tipą`);
{
    const people = [
        {
            name: 'Atstovė', surname: 'Galtokaitė', university: 'VU', course: 2,
        },
        { name: 'Kurpius', surname: 'Medainis' },
        { name: 'Varnas', surname: 'Akilaitis', avgMonthlyPay: 2000 },
        { name: 'Ferodijus', surname: 'Cilcius' },
        { name: 'Sobora', surname: 'Kupolaityė', avgMonthlyPay: 1000 },
        {
            name: 'Zubrius', surname: 'Sulindauskas', university: 'VU', course: 2,
        },
        { name: 'Šidelė', surname: 'Gyslovienė', avgMonthlyPay: 1500 },
        {
            name: 'Užuodauskas', surname: 'Perrašimauskas', university: 'VGTU', course: 1,
        },
    ];
    const isStudent = (person) => person.university
        !== undefined;
    const isWorker = (person) => person.avgMonthlyPay
        !== undefined;
    const groupPeople = (peopleArray) => peopleArray
        .reduce((prevPeople, person) => {
        if (isStudent(person)) {
            prevPeople.students.push(person);
        }
        else if (isWorker(person)) {
            prevPeople.workers.push(person);
        }
        else {
            prevPeople.people.push(person);
        }
        return prevPeople;
    }, {
        people: [],
        students: [],
        workers: [],
    });
    console.log(groupPeople(people));
}
//# sourceMappingURL=main.js.map