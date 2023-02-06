const data = require('../data/zoo_data');

const workers = data.employees;
const animals = data.species;

const getProperty = (id, property) => {
  const currentAnimalData = animals.find((item) => item.id === id)[property];
  return currentAnimalData;
};

const getWorkersList = () => {
  const workersList = workers.map((item) => {
    const obj = {
      id: item.id,
      fullName: `${item.firstName} ${item.lastName}`,
      species: item.responsibleFor.map((element) => getProperty(element, 'name')),
      locations: item.responsibleFor.map((element) => getProperty(element, 'location')),
    };
    return obj;
  });
  return workersList;
};

const getEmployeesCoverage = (person) => {
  const workerList = getWorkersList();
  if (!person) return workerList;
  const selectedPerson = workerList
    .find((item) => item.fullName.includes(person.name) || item.id === person.id);
  if (selectedPerson === undefined) {
    throw new Error('Informações inválidas');
  }
  return selectedPerson;
};

module.exports = getEmployeesCoverage;
