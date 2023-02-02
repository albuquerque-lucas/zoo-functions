const data = require('../data/zoo_data');

const getAnimal = (animal) => {
  const animals = data.species;
  const selectedAnimal = animals.find((item) => item.name === animal);
  const obj = {
    name: selectedAnimal.name,
    count: selectedAnimal.residents.length,
  };

  return obj;
};
const countAnimals = (animal) => {
  const currentAnimal = getAnimal(animal);
  return currentAnimal;
};
console.log(countAnimals('tigers'));

module.exports = countAnimals;
