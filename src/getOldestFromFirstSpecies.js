const data = require('../data/zoo_data');

const workers = data.employees;
const animals = data.species;

const getOldestFromFirstSpecies = (id) => {
  const firstSpecieId = workers.find((item) => item.id === id).responsibleFor[0];
  const residentAnimals = animals.find((item) => item.id === firstSpecieId).residents;
  const residentAges = residentAnimals.map((item) => item.age).sort((a, b) => a - b);
  const oldestAge = residentAges[residentAges.length - 1];
  const selectedAnimal = residentAnimals.find((item) => item.age === oldestAge);
  return [selectedAnimal.name, selectedAnimal.sex, selectedAnimal.age];
};

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getOldestFromFirstSpecies;
