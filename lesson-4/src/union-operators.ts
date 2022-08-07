/* eslint no-lone-blocks: 0 */

//  Alikite užduotis, ir atspausdinkite konsolėje savo sprendimo pavyzdžius užduoties bloke
console.group('Union operators - užduotys');
{
  // ↓↓↓↓ Tipus apraškite čia ↓↓↓↓
  type Accommodation = {
    type: 'House' | 'Flat'
  };
  type Car = {
    transmission: 'Automatic' | 'Manual'
  };
  type Assets = Accommodation[] | Car[];
  // ↑↑↑↑ Tipus apraškite čia ↑↑↑↑

  console.group('1. Aprašykite objekto tipą Accommodation, kurio savybė "type" būtų, "House" arba "Flat"');
  {
    const house: Accommodation = { type: 'House' };
    const flat: Accommodation = { type: 'Flat' };
    // sprendimo pavyzdžius spausdinkite čia
    console.log([house, flat]);
  }
  console.groupEnd();

  console.group('2. Aprašykite objekto tipą Car, kurio savybė "transmission" būtų, "Automatic" arba "Manual"');
  {
    const car1: Car = {
      transmission: 'Automatic',
    };

    const car2: Car = {
      transmission: 'Manual',
    };
    // sprendimo pavyzdžius spausdinkite čia
    console.log([car1, car2]);
  }
  console.groupEnd();

  console.group('3. Aprašykite tipą, kuris kintamajam leistų būti: arba Accommodation masyvu, arba Car masyvu');
  {
    const ownedCars: Assets = [{ transmission: 'Manual' }, { transmission: 'Automatic' }];
    const ownedHomes: Assets = [{ type: 'Flat' }, { type: 'House' }, { type: 'Flat' }];
    // sprendimo pavyzdžius spausdinkite čia
    console.log({ ownedCars, ownedHomes });
  }
  console.groupEnd();
}
console.groupEnd();
