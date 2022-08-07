/* eslint no-lone-blocks: 0 */

// Alikite užduotis, ir atspausdinkite savo sprendimo pavyzdžius užduoties blokuose
console.group('Literal types - užduotys');
{
    // ↓↓↓↓ Tipus ir užduotims bendrus kintamuosius apraškite čia ↓↓↓↓
    type Berlin = 'Berlin';
    type Hamburg = 'Hamburg';
    type Munich = 'Munich';
    type Cologne = 'Cologne';
    type Frankfurt = 'Frankfurt';
    type PopularGermanCity = Berlin | Hamburg | Munich | Cologne | Frankfurt;

    type Labrador = 'Labrador';
    type Bulldog = 'Bulldog';
    type Shepherd = 'Shepherd';
    type Retriever = 'Retriever';
    type Poodle = 'Poodle';
    type PopularDogBreed = Labrador | Bulldog | Shepherd | Retriever | Poodle;

    type Hood = 'Hood';
    type Bumper = 'Bumper';
    type Radiator = 'Radiator';
    type Spoiler = 'Spoiler';
    type Trunk = 'Trunk';
    type CarPart = Hood | Bumper | Radiator | Spoiler | Trunk;
    // ↑↑↑↑ Tipus ir užduotims bendrus kintamuosius apraškite čia ↑↑↑↑

    console.group('1. Sukurkite konkrečius 5 dižiausių Vokietijos miestų tipus. Sukurkite tipą, kurio reikšmė būtų viena iš miestų.');
    {
      const germanCities: PopularGermanCity[] = [
        'Berlin',
        'Hamburg',
        'Munich',
        'Cologne',
        'Frankfurt',
      ];

      console.log(germanCities);
    }
    console.groupEnd();

    console.group('2. Sukurkite konkrečias 5 šunų veisles. Sukurkite tipą, kurio reikšmė būtų viena iš veislių.');
    {
      const dogBreeds:PopularDogBreed[] = [
        'Labrador',
        'Bulldog',
        'Shepherd',
        'Retriever',
        'Poodle',
      ];

      console.log(dogBreeds);
    }
    console.groupEnd();

    console.group('3. Sukurkite konkrečias 5 mašinos dalių tipus. Sukurkite tipą, kurio reikšmė būtų viena iš dalių.');
    {
      const carParts:CarPart[] = [
        'Bumper',
        'Hood',
        'Radiator',
        'Spoiler',
        'Trunk',
      ];

      console.log(carParts);
    }
    console.groupEnd();
}
console.groupEnd();
