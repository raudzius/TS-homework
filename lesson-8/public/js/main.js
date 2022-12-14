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
console.group('1. Sukurkite Person klasei savybes "name" ir "surname". Kiekvienai i?? j?? sukurkite setterius, ir bendr?? getter?? fullname');
{
    const person = new Person('Mykolas', 'Raudzius', 21, [1.92, HeightUnits.M], [198.4, WeightUnits.LBS]);
    console.log(person.getFullName);
}
console.groupEnd();
console.group('2. Sukurkite Person klasei savyb?? "age". Inkapsuliuokite ??i?? savyb?? taip, jog reik??m?? gal??t?? b??ti tik sveiki skai??iai nuo 1 iki 150');
{
    const person = new Person('Mykolas', 'Raudzius', 21, [1.92, HeightUnits.M], [198.4, WeightUnits.LBS]);
    console.log(person.getAge);
}
console.groupEnd();
console.group('3. Sukurkite Person klasei savyb?? "height" kurios vert?? b??t?? saugoma centimetrais. Sukurkite ??iai savybei setter??, kuris pirmu parametru priimt?? reik??m??, o antru parametru priimt?? matavimo vienetus: "cm" | "m" | "in". Jeigu antras parametras n??ra perduotas, numatytas(default) matavimo vienetas turi b??ti cm. Getteris turi gr????inti reik??m?? centimetrais.');
{
    const person = new Person('Mykolas', 'Raudzius', 21, [1.92, HeightUnits.M], [198.4, WeightUnits.LBS]);
    console.log(person.getHeight);
}
console.groupEnd();
console.group('4. Sukurkite Person klasei statin?? savyb?? "heightUnits". Jos tipas turi b??ti i??vardinimas(enum), kurio pasirinkimai yra: "CM", "M", "IN". Numatytoji(default) "heightUnits" reik??m?? turi b??ti centimetrai');
{
    console.log(Person.heightUnits);
}
console.groupEnd();
console.group('5. "height" setterio antram parametrui pakeiskite s??jungos tip?? ?? [4.] u??duotyje sukurt?? i??vardinim??(enum). Priderinkite pavyzd??ius ir metod??.');
console.group('6. "height" geteriui sukurkite logik??, jog jis gr????int?? matavimo vienetus, pagal statin??s savyb??s "heightUnits" reik??m??.');
{
    const person = new Person('Mykolas', 'Raudzius', 21, [1.92, HeightUnits.M], [198.4, WeightUnits.LBS]);
    console.log(person.getHeight);
}
console.groupEnd();
console.group('7. Analogi??kai pagal [4.]-[6.] punktus sukurkite savyb?? weight su statiniu i??vardinimu "weightUnits", kurio pasirinkimai turi b??ti: "KG", "LBS"');
{
    const person = new Person('Mykolas', 'Raudzius', 21, [1.92, HeightUnits.M], [198.4, WeightUnits.LBS]);
    console.log(person.getWeight);
}
console.groupEnd();
console.group('8. Sukurkite klasei Person metod?? "toString". Kuris paverst?? ??mogaus savybes gra??iu formatu: vardas ir pavard?? pirmoje eilut??je, o "height" ir "weight" savyb??s atskirose eilut??se, atitrauktos nuo kairio kra??to per "tab" simbol??, ir su matavimo vienetais(kurie i??saugoti) statin??se Person klas??s savyb??se');
{
    const person = new Person('Mykolas', 'Raudzius', 21, [1.92, HeightUnits.M], [198.4, WeightUnits.LBS]);
    console.log(person.toString());
}
console.groupEnd();
//# sourceMappingURL=main.js.map