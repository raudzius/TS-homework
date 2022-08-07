"use strict";
console.group('Tuples - užduotys');
{
    console.group('1. Sukurkite žmogaus vardo ir amžiaus rinkinį');
    {
        const person = ['Naglis', 27];
        console.log(person);
    }
    console.groupEnd();
    console.group('2. Sukurkite šuns šeimininko ir šuns rinkinį(pradžioje teks sukurti Šuns ir Šeiminiko tipus)');
    {
        const master = 'Matt';
        const dog = 'Rex';
        const dogAndItsMaster = [dog, master];
        console.log(dogAndItsMaster);
    }
    console.groupEnd();
    console.group('3. Sukurkite trikampio taškų 2D erdvėje rinkinį(pradžioje teks sukurti 2D Taško tipą)');
    {
        const triangle = [[8, 6], [0, 14], [-10, -12]];
        console.log(triangle);
    }
    console.groupEnd();
}
console.groupEnd();
//# sourceMappingURL=tuples.js.map