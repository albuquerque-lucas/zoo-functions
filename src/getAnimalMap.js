const data = require('../data/zoo_data');

const returnObj = {
  NE: [],
  NW: [],
  SE: [],
  SW: [],
};

const filterAnimals = (location, filter1) => {
  const animals = data.species.filter((item) => item.location === location)
    .map((item) => item[filter1]);
  return animals;
};

const getAnimalSpeciesByLocation = (location) => {
  const animals = filterAnimals(location, 'name');
  return animals;
};

const getAllAnimalsByLocation = () => {
  returnObj.NE = getAnimalSpeciesByLocation('NE');
  returnObj.NW = getAnimalSpeciesByLocation('NW');
  returnObj.SE = getAnimalSpeciesByLocation('SE');
  returnObj.SW = getAnimalSpeciesByLocation('SW');
  return returnObj;
};

const animalNames = (location) => {
  const teste1 = getAnimalSpeciesByLocation(location);
  const finalObj = {};
  teste1.forEach((item) => {
    const currentSpecieResidents = data.species.find((element) => element.name === item).residents;
    const final = currentSpecieResidents.map((element) => element.name);
    finalObj[item] = final;
  });
  const result = Object.entries(finalObj).map(([key, value]) => ({ [key]: value }));

  return result;
};

const getAllNames = () => {
  returnObj.NE = animalNames('NE');
  returnObj.NW = animalNames('NW');
  returnObj.SE = animalNames('SE');
  returnObj.SW = animalNames('SW');

  return returnObj;
};

const getSortedAnimals = (location) => {
  const animalsTest = animalNames(location);
  animalsTest.forEach((item) => {
    const values = Object.values(item);
    values[0].sort();
  });
  return animalsTest;
};

const getAllSorted = () => {
  returnObj.NE = getSortedAnimals('NE');
  returnObj.NW = getSortedAnimals('NW');
  returnObj.SE = getSortedAnimals('SE');
  returnObj.SW = getSortedAnimals('SW');

  return returnObj;
};

const filterBySex = (location, selectedSex) => {
  const teste1 = getAnimalSpeciesByLocation(location);
  const finalObj = {};
  teste1.forEach((item) => {
    const currentSpecieResidents = data.species.find((element) => element.name === item).residents
      .filter((subElement) => subElement.sex === selectedSex);
    const final = currentSpecieResidents.map((element) => element.name);
    finalObj[item] = final;
  });
  const result = Object.entries(finalObj).map(([key, value]) => ({ [key]: value }));

  return result;
};

const allAnimalsBySex = (selectedSex) => {
  returnObj.NE = filterBySex('NE', selectedSex);
  returnObj.NW = filterBySex('NW', selectedSex);
  returnObj.SE = filterBySex('SE', selectedSex);
  returnObj.SW = filterBySex('SW', selectedSex);

  return returnObj;
};

const conditions = (options) => {
  if (options.sex) {
    // if (options.sorted === true) {
    //   return sortedNameAndSex();
    // }
    return allAnimalsBySex(options.sex);
  }

  if (options.sorted === true && options.sorted !== undefined) {
    return getAllSorted();
  }

  return getAllNames();
};

const getAnimalMap = (options) => {
  if (!options || options.includeNames === undefined) {
    return getAllAnimalsByLocation();
  }
  return conditions(options);
};

const testOptions = {
  includeNames: true,
  sex: 'female',
};

// console.log(getAnimalMap(testOptions));
// console.dir(getAllNames(), { depth: null });
console.dir(getAnimalMap({ includeNames: true, sex: 'female' }), { depth: null });

// console.dir(getAnimalMap(testOptions), { depth: null });

module.exports = getAnimalMap;
