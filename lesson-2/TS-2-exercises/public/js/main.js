"use strict";
console.groupCollapsed('1 - https://edabit.com/challenge/nuXdWHAoHv9y38sn7 ');
{
    const drinks = [
        { name: 'lemonade', price: 50 },
        { name: 'lime', price: 10 },
        { name: 'coke', price: 15 },
    ];
    const sortDrinks = (drinkArray) => [...drinkArray].sort((a, b) => a.price - b.price);
    const sortedDrinks = sortDrinks(drinks);
    console.log(drinks, sortedDrinks);
}
console.groupEnd();
console.groupCollapsed('2 - https://edabit.com/challenge/9KEKJG5PZTFmG3Zau ');
{
    const originalObj = { piano: 500, stereo: 300 };
    const copiedObj = { ...originalObj };
    const addKeyValuePair = (obj, key, value) => Object.assign(obj, { [key]: value });
    addKeyValuePair(originalObj, 'Caligula', 440);
    console.log(copiedObj, originalObj);
}
console.groupEnd();
//# sourceMappingURL=main.js.map