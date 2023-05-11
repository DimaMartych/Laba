
let countryName = prompt("Введіть назву країни:");

fetch(`https://restcountries.com/v3.1/name/${countryName}`)
  .then((response) => response.json())
  .then((data) => {
    const country = data[0];
    const capital = country.capital[0];
    const region = country.region;

    console.log(`Назва країни: ${country.name.common}`);
    console.log(`Назва столиці: ${capital}`);
    console.log(`Назва регіону: ${region}`);
  })
  .catch((error) => console.error(error));
