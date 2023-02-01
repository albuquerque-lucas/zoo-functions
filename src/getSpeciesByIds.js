const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  const animalSpecies = data.species;

  if (ids.length === 0) {
    return [];
  }

  const animals = ids.map((id) => animalSpecies.find((specie) => specie.id === id));
  return animals;
};

console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce', '533bebf3-6bbe-41d8-9cdf-46f7d13b62ae'));

module.exports = getSpeciesByIds;
