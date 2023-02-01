const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  const animalSpecies = data.species;

  if (ids.length === 0) {
    return [];
  }

  const animals = ids.map((id) => animalSpecies.find((specie) => specie.id === id));
  return animals;
};

module.exports = getSpeciesByIds;
