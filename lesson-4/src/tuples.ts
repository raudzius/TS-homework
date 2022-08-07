/* eslint no-lone-blocks: 0 */

// Alikite užduotis, ir atspausdinkite konsolėje savo sprendimo pavyzdžius užduoties bloke
console.group('Tuples - užduotys');
{
  // ↓↓↓↓ Tipus apraškite čia ↓↓↓↓
  type NameAndAge = [string, number];
  type Dog = string;
  type Master = string;
  type DogAndMaster = [Dog, Master];
  type TrianglePoint = [number, number];
  type Triangle = [TrianglePoint, TrianglePoint, TrianglePoint];
  // ↑↑↑↑ Tipus apraškite čia ↑↑↑↑

  console.group('1. Sukurkite žmogaus vardo ir amžiaus rinkinį');
  {
    const person: NameAndAge = ['Naglis', 27];
    console.log(person);
  }
  console.groupEnd();

  console.group('2. Sukurkite šuns šeimininko ir šuns rinkinį(pradžioje teks sukurti Šuns ir Šeiminiko tipus)');
  {
    const master: Master = 'Matt';
    const dog: Dog = 'Rex';
    const dogAndItsMaster: DogAndMaster = [dog, master];
    console.log(dogAndItsMaster);
  }
  console.groupEnd();

  console.group('3. Sukurkite trikampio taškų 2D erdvėje rinkinį(pradžioje teks sukurti 2D Taško tipą)');
  {
    const triangle:Triangle = [[8, 6], [0, 14], [-10, -12]];
    console.log(triangle);
  }
  console.groupEnd();
}
console.groupEnd();
