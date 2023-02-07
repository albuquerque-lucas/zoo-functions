const data = require('../data/zoo_data');

const animals = data.species;

const getAnimalBySex = (selected, name, animal) => {
  const selectedSexAnimalCount = selected.residents
    .filter((item) => item.sex === animal.sex)
    .length;
  return selectedSexAnimalCount;
};

const countAnimals = (animal) => {
  if (!animal) {
    const animalObj = {};
    animals.forEach((item) => {
      animalObj[item.name] = item.residents.length;
    });
    return animalObj;
  }
  const selectedAnimal = animals.find((item) => item.name === animal.species);
  const animalName = selectedAnimal.name;
  if (animal.sex) {
    return getAnimalBySex(selectedAnimal, animalName, animal);
  }
  if (animal.species && animal.sex === undefined) {
    const residentsCount = selectedAnimal.residents.length;
    return residentsCount;
  }
};

console.log(countAnimals({ species: 'bears', sex: 'female' }));

module.exports = countAnimals;
