const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const animalSpecies = data.species;
  const individuals = animalSpecies.find((item) => item.name === animal).residents;
  return individuals.every((item) => item.age >= age);
};

module.exports = getAnimalsOlderThan;
