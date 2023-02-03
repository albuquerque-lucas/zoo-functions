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
  if (entrants === undefined) return 0;
  if (Object.keys(entrants).length === 0) return 0;

  const passValues = data.prices;
  const zooEntrants = countEntrants(entrants);
  const childrenSum = zooEntrants.child * passValues.child;
  const adultSum = zooEntrants.adult * passValues.adult;
  const seniorSum = zooEntrants.senior * passValues.senior;
  const total = childrenSum + adultSum + seniorSum;
  return total;
};

console.log(calculateEntry(testEntrants));
console.log(calculateEntry({}));
console.log(calculateEntry());

module.exports = { calculateEntry, countEntrants };
