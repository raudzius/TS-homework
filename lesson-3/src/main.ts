/* eslint-disable no-lone-blocks */
const numArray:number[] = [1, 1, 0, -5, 56, -14, 3, 1.5, -9.8];
console.group('1. Parašykite funkciją, kuri atspausdina paskutinio masyvo elemento indeksą');
{
  const logLastArrayIndex = (array: unknown[]): void => console.log(`%cLast index of a given array is: ${array.length - 1}`, 'font-size: 20px');
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  logLastArrayIndex(numArray);
}
console.groupEnd();

console.group('2. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus eilutėmis');
{
  const logArrayIndexColumn = (array: unknown[]): void => { console.log(`%c[${array}] index column:\n${array.map((__, index) => index).join('\n')}`, 'font-size: 20px'); };
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  logArrayIndexColumn(numArray);
}
console.groupEnd();

console.group('3. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes eilutėmis');
{
  const logArrayItemColumn = (array: unknown[]): void => console.log(`[${array}] item column:\n${array.map((item) => item).join('\n')}`);
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  logArrayItemColumn(numArray);
}
console.groupEnd();

console.group('4. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras eilutėmis, tokiu formatu:  ');
// [0] => reikšmė
// [1] => reikšmė
// [2] => reikšmė
{
  const logArrayItemAndIndexColumn = (array: unknown[]): void => console.log(`%c[${array}] [index] => item column:\n${array.map((item, index) => `[${index}] => ${item}`).join('\n')}`, 'font-family: sans-serif');
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  logArrayItemAndIndexColumn(numArray);
}
console.groupEnd();

console.group('5. Parašykite funkciją, kuri atspausdina masyvo elementus atbuline tvarka eilutėmis, iš galo.');
{
  const logReverseArrayItemColumn = (array: unknown[]): void => console.log(`%c[${array}] reverse item column:\n${array.map((item) => item).reverse().join('\n')}`, 'color: blue');
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  logReverseArrayItemColumn(numArray);
}
console.groupEnd();

console.group('6. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus vienoje eilutėje: 0 1 2 3 ...');
{
  const logArrayIndexesInline = (array: unknown[]): void => console.log(`[${array}] index inline:\n${array.map((__, index) => index).join(' ')}`);
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  logArrayIndexesInline(numArray);
}
console.groupEnd();

console.group('7. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes vienoje eilutėje: -111 2 -9 48 ...');
{
  const logArrayItemsInline = (array: unknown[]): void => console.log(`[${array}] item inline:\n${array.map((item) => item).join(' ')}`);
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  logArrayItemsInline(numArray);
}
console.groupEnd();

console.group('8. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras vienoje eilutėje, tokiu formatu:');
//  [0]=>17, [1]=>8, [2]=>88 ..
{
  const logArrayItemsAndIndexesInline = (array: unknown[]): void => console.log(`[${array}] item inline:\n${array.map((item, index) => `[${index}]=>${item}`).join(', ')}`);
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  logArrayItemsAndIndexesInline(numArray);
}
console.groupEnd();

console.group('9. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų padaugintų iš 2');
{
  const doubleArrayItems = (numberArray: number[]): number[] => numberArray.map(
    (number) => number * 2,
  );
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  console.log(`[${numArray}] * 2 =\n [${doubleArrayItems(numArray)}]`);
}
console.groupEnd();

console.group('10. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų pakeltų kvadratu');
{
  const squareArrayItems = (numberArray: number[]): number[] => numberArray.map(
    (number) => number ** 2,
  );
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  console.log(`[${numArray}] ** 2 =\n [${squareArrayItems(numArray)}]`);
}
console.groupEnd();

console.group('11. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų ir jų indeksų sandaugos');
{
  const multiplyArrayItemsByIndex = (numberArray: number[]): number[] => numberArray.map(
    (number, index) => number * index,
  );
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  console.log(`[${numArray}] * [index] =\n [${multiplyArrayItemsByIndex(numArray)}]`);
}
console.groupEnd();

console.group('12. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo teigiamų elementų');
{
  const filterOutNegative = (numberArray: number[]): number[] => numberArray.filter(
    (number) => number > 0,
  );
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  console.log(`Negative numbers filtered out: [${filterOutNegative(numArray).join(', ')}]`);
}
console.groupEnd();

console.group('13. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo NE-teigiamų elementų');
{
  const filterOutPositive = (numberArray: number[]): number[] => numberArray.filter(
    (number) => number < 0,
  );
  console.log(numArray, filterOutPositive(numArray));
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
}
console.groupEnd();

console.group('14. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo lyginių elementų');
{
  const filterOutOdd = (numberArray: number[]): number[] => numberArray.filter(
    (number) => !(number % 2),
  );
  console.log(numArray, filterOutOdd(numArray));
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
}
console.groupEnd();

console.group('15. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo nelyginių elementų');
{
  const filterOutEven = (numberArray: number[]): number[] => numberArray.filter(
    (number) => !!(number % 2),
  );
  console.log(numArray, filterOutEven(numArray));
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
}
console.groupEnd();

console.group('16. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo, paverstų teigiamais, elementų');
{
  const makeNumsPositive = (numberArray: number[]): number[] => numberArray.map(
    (number) => Math.abs(number),
  );
  console.log(numArray, makeNumsPositive(numArray));
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
}
console.groupEnd();
