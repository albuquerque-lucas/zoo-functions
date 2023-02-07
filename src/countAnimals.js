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

// const animalNameList = { ...animals.map((item) => item.name) };
// const revertedArray = Object.entries(animalNameList).map(([key, value]) => [value, key]);
// const inverseNameList = Object.fromEntries(revertedArray);
// const inversedKeys = Object.keys(inverseNameList);
// const animalCountingList = animals.map((item) => item.residents.length);
// for (let i = 0; i < animalCountingList.length; i += 1) {
//   let obj = {
//     [inversedKeys[i]]: animalCountingList[i],
//   };
// }
// let i = 0;
// for (const key in inverseNameList) {
//   inverseNameList[key] = animalCountingList[i];
//   i += 1;
// }
