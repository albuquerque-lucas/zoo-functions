const data = require('../data/zoo_data');

// const exampleObj = {
//   includeNames: true,
//   sorted: true,
//   sex: 'male',
// };

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
  // const returnObj = {
  //   NE: getAnimalSpeciesByLocation('NE'),
  //   NW: getAnimalSpeciesByLocation('NW'),
  //   SE: getAnimalSpeciesByLocation('SE'),
  //   SW: getAnimalSpeciesByLocation('SW'),
  // };
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

// const getResidentNames = (location) => {
//   const resultList = [];
//   const animals = filterAnimals(location, 'name');
//   animals.forEach((item) => {
//     const resultObj = {};
//     const residentList = data.species
//       .filter((element) => element.name === item)
//       .map((subElement) => subElement.residents)[0]
//       .map((final) => final.name);
//     resultObj[item] = residentList;
//     resultList.push(resultObj);
//   });
//   return resultList;
// };

// const getAllResidentNames = () => {
//   const returnObj = {
//     NE: getResidentNames('NE'),
//     NW: getResidentNames('NW'),
//     SE: getResidentNames('SE'),
//     SW: getResidentNames('SW'),
//   };
//   return returnObj;
// };

const conditions = (options) => {
// if (options.sex) {
//   if (options.sorted === true) {
//     return sortedNameAndSex();
//   }
//   return animalSexFiltered();
// }

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
};

// console.log(getAnimalMap(testOptions));
// console.dir(getAllNames(), { depth: null });
console.dir(getAnimalMap(testOptions), { depth: null });

module.exports = getAnimalMap;
