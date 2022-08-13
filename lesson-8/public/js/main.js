"use strict";
var HeightUnits;
(function (HeightUnits) {
    HeightUnits["CM"] = "cm";
    HeightUnits["M"] = "m";
    HeightUnits["IN"] = "in";
})(HeightUnits || (HeightUnits = {}));
var WeightUnits;
(function (WeightUnits) {
    WeightUnits["KG"] = "kg";
    WeightUnits["LBS"] = "lbs";
})(WeightUnits || (WeightUnits = {}));
class Person {
    static heightUnits = HeightUnits.CM;
    static weightUnits = WeightUnits.KG;
    name;
    surname;
    age;
    height;
    weight;
    constructor(name, surname, age, height, weight) {
        this.setName = name;
        this.setSurname = surname;
        this.setAge = age;
        this.setHeight = height;
        this.setWeight = weight;
    }
    toString() {
        return (`${this.name} ${this.surname}
    ${this.getHeight}
    ${this.getWeight}`);
    }
    set setName(name) {
        this.name = name;
    }
    set setSurname(name) {
        this.surname = name;
    }
    set setAge(age) {
        if (age < 1)
            throw new Error('Age must be greater than 0');
        if (age > 150)
            throw new Error('Age must not exceed 150');
        this.age = age;
    }
    set setHeight([height, units]) {
        switch (units) {
            case HeightUnits.M:
                this.height = height * 100;
                break;
            case HeightUnits.IN:
                this.height = height * 2.54;
                break;
            default: this.height = height;
        }
    }
    set setWeight([weight, units]) {
        switch (units) {
            case WeightUnits.LBS:
                this.weight = Math.round(weight * 0.45359237);
                break;
            default: this.weight = weight;
        }
    }
    get getFullName() {
        return `${this.name} ${this.surname}`;
    }
    get getAge() {
        return this.age;
    }
    get getHeight() {
        switch (Person.heightUnits) {
            case (HeightUnits.IN):
                return `${this.height / 2.54}${Person.heightUnits}`;
            case (HeightUnits.M):
                return `${this.height / 100}${Person.heightUnits}`;
            default:
                return `${this.height}${Person.heightUnits}`;
        }
    }
    get getWeight() {
        switch (Person.weightUnits) {
            case (WeightUnits.LBS):
                return `${Math.round(this.weight * 2.20462262185)}${Person.weightUnits}`;
            default: return `${this.weight}${Person.weightUnits}`;
        }
    }
}
console.group('1. Sukurkite Person klasei savybes "name" ir "surname". Kiekvienai iš jų sukurkite setterius, ir bendrą getterį fullname');
{
    const person = new Person('Mykolas', 'Raudzius', 21, [1.92, HeightUnits.M], [198.4, WeightUnits.LBS]);
    console.log(person.getFullName);
}
console.groupEnd();
console.group('2. Sukurkite Person klasei savybę "age". Inkapsuliuokite šią savybę taip, jog reikšmė galėtų būti tik sveiki skaičiai nuo 1 iki 150');
{
    const person = new Person('Mykolas', 'Raudzius', 21, [1.92, HeightUnits.M], [198.4, WeightUnits.LBS]);
    console.log(person.getAge);
}
console.groupEnd();
console.group('3. Sukurkite Person klasei savybę "height" kurios vertė būtų saugoma centimetrais. Sukurkite šiai savybei setterį, kuris pirmu parametru priimtų reikšmę, o antru parametru priimtų matavimo vienetus: "cm" | "m" | "in". Jeigu antras parametras nėra perduotas, numatytas(default) matavimo vienetas turi būti cm. Getteris turi grąžinti reikšmę centimetrais.');
{
    const person = new Person('Mykolas', 'Raudzius', 21, [1.92, HeightUnits.M], [198.4, WeightUnits.LBS]);
    console.log(person.getHeight);
}
console.groupEnd();
console.group('4. Sukurkite Person klasei statinę savybę "heightUnits". Jos tipas turi būti išvardinimas(enum), kurio pasirinkimai yra: "CM", "M", "IN". Numatytoji(default) "heightUnits" reikšmė turi būti centimetrai');
{
    console.log(Person.heightUnits);
}
console.groupEnd();
console.group('5. "height" setterio antram parametrui pakeiskite sąjungos tipą į [4.] užduotyje sukurtą išvardinimą(enum). Priderinkite pavyzdžius ir metodą.');
console.group('6. "height" geteriui sukurkite logiką, jog jis grąžintų matavimo vienetus, pagal statinės savybės "heightUnits" reikšmę.');
{
    const person = new Person('Mykolas', 'Raudzius', 21, [1.92, HeightUnits.M], [198.4, WeightUnits.LBS]);
    console.log(person.getHeight);
}
console.groupEnd();
console.group('7. Analogiškai pagal [4.]-[6.] punktus sukurkite savybę weight su statiniu išvardinimu "weightUnits", kurio pasirinkimai turi būti: "KG", "LBS"');
{
    const person = new Person('Mykolas', 'Raudzius', 21, [1.92, HeightUnits.M], [198.4, WeightUnits.LBS]);
    console.log(person.getWeight);
}
console.groupEnd();
console.group('8. Sukurkite klasei Person metodą "toString". Kuris paverstų žmogaus savybes gražiu formatu: vardas ir pavardė pirmoje eilutėje, o "height" ir "weight" savybės atskirose eilutėse, atitrauktos nuo kairio krašto per "tab" simbolį, ir su matavimo vienetais(kurie išsaugoti) statinėse Person klasės savybėse');
{
    const person = new Person('Mykolas', 'Raudzius', 21, [1.92, HeightUnits.M], [198.4, WeightUnits.LBS]);
    console.log(person.toString());
}
console.groupEnd();
//# sourceMappingURL=main.js.map