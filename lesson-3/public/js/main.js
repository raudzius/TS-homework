"use strict";
const numArray = [1, 1, 0, -5, 56, -14, 3, 1.5, -9.8];
console.group('1. Parašykite funkciją, kuri atspausdina paskutinio masyvo elemento indeksą');
{
    const logLastArrayIndex = (array) => console.log(`%cLast index of a given array is: ${array.length - 1}`, 'font-size: 20px');
    logLastArrayIndex(numArray);
}
console.groupEnd();
console.group('2. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus eilutėmis');
{
    const logArrayIndexColumn = (array) => { console.log(`%c[${array}] index column:\n${array.map((__, index) => index).join('\n')}`, 'font-size: 20px'); };
    logArrayIndexColumn(numArray);
}
console.groupEnd();
console.group('3. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes eilutėmis');
{
    const logArrayItemColumn = (array) => console.log(`[${array}] item column:\n${array.map((item) => item).join('\n')}`);
    logArrayItemColumn(numArray);
}
console.groupEnd();
console.group('4. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras eilutėmis, tokiu formatu:  ');
{
    const logArrayItemAndIndexColumn = (array) => console.log(`%c[${array}] [index] => item column:\n${array.map((item, index) => `[${index}] => ${item}`).join('\n')}`, 'font-family: sans-serif');
    logArrayItemAndIndexColumn(numArray);
}
console.groupEnd();
console.group('5. Parašykite funkciją, kuri atspausdina masyvo elementus atbuline tvarka eilutėmis, iš galo.');
{
    const logReverseArrayItemColumn = (array) => console.log(`%c[${array}] reverse item column:\n${array.map((item) => item).reverse().join('\n')}`, 'color: blue');
    logReverseArrayItemColumn(numArray);
}
console.groupEnd();
console.group('6. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus vienoje eilutėje: 0 1 2 3 ...');
{
    const logArrayIndexesInline = (array) => console.log(`[${array}] index inline:\n${array.map((__, index) => index).join(' ')}`);
    logArrayIndexesInline(numArray);
}
console.groupEnd();
console.group('7. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes vienoje eilutėje: -111 2 -9 48 ...');
{
    const logArrayItemsInline = (array) => console.log(`[${array}] item inline:\n${array.map((item) => item).join(' ')}`);
    logArrayItemsInline(numArray);
}
console.groupEnd();
console.group('8. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras vienoje eilutėje, tokiu formatu:');
{
    const logArrayItemsAndIndexesInline = (array) => console.log(`[${array}] item inline:\n${array.map((item, index) => `[${index}]=>${item}`).join(', ')}`);
    logArrayItemsAndIndexesInline(numArray);
}
console.groupEnd();
console.group('9. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų padaugintų iš 2');
{
    const doubleArrayItems = (numberArray) => numberArray.map((number) => number * 2);
    console.log(`[${numArray}] * 2 =\n [${doubleArrayItems(numArray)}]`);
}
console.groupEnd();
console.group('10. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų pakeltų kvadratu');
{
    const squareArrayItems = (numberArray) => numberArray.map((number) => number ** 2);
    console.log(`[${numArray}] ** 2 =\n [${squareArrayItems(numArray)}]`);
}
console.groupEnd();
console.group('11. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų ir jų indeksų sandaugos');
{
    const multiplyArrayItemsByIndex = (numberArray) => numberArray.map((number, index) => number * index);
    console.log(`[${numArray}] * [index] =\n [${multiplyArrayItemsByIndex(numArray)}]`);
}
console.groupEnd();
console.group('12. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo teigiamų elementų');
{
    const filterOutNegative = (numberArray) => numberArray.filter((number) => number > 0);
    console.log(`Negative numbers filtered out: [${filterOutNegative(numArray).join(', ')}]`);
}
console.groupEnd();
console.group('13. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo NE-teigiamų elementų');
{
    const filterOutPositive = (numberArray) => numberArray.filter((number) => number < 0);
    console.log(numArray, filterOutPositive(numArray));
}
console.groupEnd();
console.group('14. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo lyginių elementų');
{
    const filterOutOdd = (numberArray) => numberArray.filter((number) => !(number % 2));
    console.log(numArray, filterOutOdd(numArray));
}
console.groupEnd();
console.group('15. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo nelyginių elementų');
{
    const filterOutEven = (numberArray) => numberArray.filter((number) => !!(number % 2));
    console.log(numArray, filterOutEven(numArray));
}
console.groupEnd();
console.group('16. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo, paverstų teigiamais, elementų');
{
    const makeNumsPositive = (numberArray) => numberArray.map((number) => Math.abs(number));
    console.log(numArray, makeNumsPositive(numArray));
}
console.groupEnd();
//# sourceMappingURL=main.js.map