"use strict";
console.group('Literal types - užduotys');
{
    let BiggestLithuanianCities;
    (function (BiggestLithuanianCities) {
        BiggestLithuanianCities[BiggestLithuanianCities["Vilnius"] = 0] = "Vilnius";
        BiggestLithuanianCities[BiggestLithuanianCities["Kaunas"] = 1] = "Kaunas";
        BiggestLithuanianCities[BiggestLithuanianCities["Klaipeda"] = 2] = "Klaipeda";
        BiggestLithuanianCities[BiggestLithuanianCities["Siauliai"] = 3] = "Siauliai";
        BiggestLithuanianCities[BiggestLithuanianCities["Panevezys"] = 4] = "Panevezys";
    })(BiggestLithuanianCities || (BiggestLithuanianCities = {}));
    let MostPopulatedCountries;
    (function (MostPopulatedCountries) {
        MostPopulatedCountries[MostPopulatedCountries["China"] = 0] = "China";
        MostPopulatedCountries[MostPopulatedCountries["India"] = 1] = "India";
        MostPopulatedCountries[MostPopulatedCountries["US"] = 2] = "US";
        MostPopulatedCountries[MostPopulatedCountries["Indonesia"] = 3] = "Indonesia";
        MostPopulatedCountries[MostPopulatedCountries["Pakistan"] = 4] = "Pakistan";
    })(MostPopulatedCountries || (MostPopulatedCountries = {}));
    let HighestGDPCountries;
    (function (HighestGDPCountries) {
        HighestGDPCountries[HighestGDPCountries["US"] = 1] = "US";
        HighestGDPCountries[HighestGDPCountries["China"] = 2] = "China";
        HighestGDPCountries[HighestGDPCountries["Japan"] = 3] = "Japan";
        HighestGDPCountries[HighestGDPCountries["Germany"] = 4] = "Germany";
        HighestGDPCountries[HighestGDPCountries["India"] = 5] = "India";
    })(HighestGDPCountries || (HighestGDPCountries = {}));
    console.group('1. Sukurkite 5 didžiausių Lietuvos miestų išvardinimą.');
    {
        const biggestLithuanianCities = [
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
        const mostPopulatedCountries = [
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
        const highestGDPCountries = [
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
//# sourceMappingURL=enums.js.map