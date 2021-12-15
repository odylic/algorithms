const cities = [
  { "San Antonio": 3000 },
  { Austin: 5000 },
  { Houston: 3000 },
  { "El Paso": 2000 },
  { Austin: 5000 },
];

const totalPopulationCount = (array) => {
  let result = [];
  array.map((x) => {
    result.push(...Object.values(x));
  });
  return result.reduce((a, b) => a + b);
};

console.log(totalPopulationCount(cities));
