/* eslint-disable no-lone-blocks */

console.group('Užduotys');

{
  console.group('1. Aprašykite funkcijoms ir kintamiesiems tipus');

  {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const numberArray: number[] = [1, -8, -6, 7, 5, 1];

    const positiveNumberReducer = (sum: number, num: number): number => (num > 0 ? sum + num : sum);

    const addPositiveNumbers = (arr: number[]): number => arr.reduce(positiveNumberReducer, 0);

    console.log({
      numberArray,
      sumOfPositiveNumbers: addPositiveNumbers(numberArray),
    });
  }

  console.groupEnd();

  console.group('2. Sukurkite ir tipais aprašykite funkciją, kuri sudarytų string\'ą iš string\'ų masyvo elementų pirmųjų raidžių');

  {
    /*
        Pvz.:
         * ['Lietuviškas', 'Nepriklausomas', 'Kanalas'] -> LNK
         * ['Lietuvos', 'Respublikos', 'Televizija'] -> LRT
         * ['Loughing', 'Out', 'Loud'] -> LOL
      */

    const stringMatrix: string[][] = [
      ['Lietuviškas', 'Nepriklausomas', 'Kanalas'],
      ['Lietuvos', 'Respublikos', 'Televizija'],
      ['Loughing', 'Out', 'Loud']];

    const createAbbreviation = (stringArray: string[]): string => stringArray.reduce((
      prevAbbr,
      currString,
    ) => prevAbbr + currString[0], '');

    stringMatrix.forEach((array) => { console.log({ [array.join(' ')]: createAbbreviation(array) }); });
  }
  console.groupEnd();

  console.group('3. Sukurkite ir tipais aprašykite funkciją, kuri saudaugintų visus number masyvo skaičius');
  {
    /*
        Pvz.:
         * [1, 7, 8] -> 56
         * [98, 74, 5, 0] -> 0
         * [17, 10, 5] -> 850
      */

    type NumArrayToNum = (array: number[]) => number;

    const numberMatrix: number[][] = [[1, 7, 8],
      [98, 74, 5, 0],
      [17, 10, 5]];

    const multiplyNumbers: NumArrayToNum = (array: number[]): number => array.reduce(
      (prevSum, currentNum) => prevSum * currentNum,
    );

    numberMatrix.forEach((numArray) => { console.log({ [`[${numArray.join(' * ')}]`]: multiplyNumbers(numArray) }); });
  }
  console.groupEnd();
}
console.groupEnd();
