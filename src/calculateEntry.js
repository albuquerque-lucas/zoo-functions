const data = require('../data/zoo_data');

const testEntrants = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

const countEntrants = (entrants) => {
  const childrenCount = entrants.filter((item) => item.age < 18).length;
	const adultCount = entrants.filter((item) => item.age >= 18 && item.age < 50).length;
	const seniorCount = entrants.filter((item) => item.age >= 50).length;
  return { child: childrenCount, adult: adultCount, senior: seniorCount };
};

const calculateEntry = (entrants) => {
  // seu código aqui
};

console.log(countEntrants(testEntrants));

module.exports = { calculateEntry, countEntrants };
