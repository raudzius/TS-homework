"use strict";
console.group('Užduotys');
{
    console.group('1. Aprašykite funkcijoms ir kintamiesiems tipus');
    {
        const numberArray = [1, -8, -6, 7, 5, 1];
        const positiveNumberReducer = (sum, num) => (num > 0 ? sum + num : sum);
        const addPositiveNumbers = (arr) => arr.reduce(positiveNumberReducer, 0);
        console.log({
            numberArray,
            sumOfPositiveNumbers: addPositiveNumbers(numberArray),
        });
    }
    console.groupEnd();
    console.group('2. Sukurkite ir tipais aprašykite funkciją, kuri sudarytų string\'ą iš string\'ų masyvo elementų pirmųjų raidžių');
    {
        const stringMatrix = [
            ['Lietuviškas', 'Nepriklausomas', 'Kanalas'],
            ['Lietuvos', 'Respublikos', 'Televizija'],
            ['Loughing', 'Out', 'Loud']
        ];
        const createAbbreviation = (stringArray) => stringArray.reduce((prevAbbr, currString) => prevAbbr + currString[0], '');
        stringMatrix.forEach((array) => { console.log({ [array.join(' ')]: createAbbreviation(array) }); });
    }
    console.groupEnd();
    console.group('3. Sukurkite ir tipais aprašykite funkciją, kuri saudaugintų visus number masyvo skaičius');
    {
        const numberMatrix = [[1, 7, 8],
            [98, 74, 5, 0],
            [17, 10, 5]];
        const multiplyNumbers = (array) => array.reduce((prevSum, currentNum) => prevSum * currentNum);
        numberMatrix.forEach((numArray) => { console.log({ [`[${numArray.join(' * ')}]`]: multiplyNumbers(numArray) }); });
    }
    console.groupEnd();
}
console.groupEnd();
//# sourceMappingURL=main.js.map