/* eslint no-lone-blocks: 0 */

// Alikite užduotis, ir atspausdinkite savo sprendimo pavyzdžius užduoties blokuose
console.group('Literal types - užduotys');
{
  // ↓↓↓↓ Tipus ir užduotims bendrus kintamuosius aprašykite čia ↓↓↓↓
  enum BiggestLithuanianCities {
    Vilnius,
    Kaunas,
    Klaipeda,
    Siauliai,
    Panevezys,
  }

  enum MostPopulatedCountries {
    China,
    India,
    US,
    Indonesia,
    Pakistan,
  }

  enum HighestGDPCountries {
    US = 1,
    China,
    Japan,
    Germany,
    India,
  }

  // ↑↑↑↑ Tipus ir užduotims bendrus kintamuosius aprašykite čia ↑↑↑↑

  console.group('1. Sukurkite 5 didžiausių Lietuvos miestų išvardinimą.');
  {
    const biggestLithuanianCities: BiggestLithuanianCities[] = [
      BiggestLithuanianCities.Vilnius,
      BiggestLithuanianCities.Kaunas,
      BiggestLithuanianCities.Klaipeda,
      BiggestLithuanianCities.Siauliai,
      BiggestLithuanianCities.Panevezys,
    ];

    console.log(biggestLithuanianCities);
  }
  console.groupEnd();

  console.group('2. Sukurkite 5 šalių su didžiausiu gyventojų skaičiumi skaitinį išvardinimą.');
  {
    const mostPopulatedCountries:MostPopulatedCountries[] = [
      MostPopulatedCountries.China,
      MostPopulatedCountries.India,
      MostPopulatedCountries.US,
      MostPopulatedCountries.Indonesia,
      MostPopulatedCountries.Pakistan,
    ];

    console.log(mostPopulatedCountries);
  }
  console.groupEnd();

  console.group('3. Sukurkite 5 šalių su didžiausiu BVP skaitinį išvardinimą pradedant "1".');
  {
    const highestGDPCountries:HighestGDPCountries[] = [
      HighestGDPCountries.US,
      HighestGDPCountries.China,
      HighestGDPCountries.Japan,
      HighestGDPCountries.Germany,
      HighestGDPCountries.India,
    ];

    console.log(highestGDPCountries);
  }
  console.groupEnd();
}
console.groupEnd();
