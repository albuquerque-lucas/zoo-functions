const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  const employeesList = data.employees;
  const result1 = employeesList.find((individual) => individual.firstName === employeeName);
  const result2 = employeesList.find((individual) => individual.lastName === employeeName);

  if (result1) {
    return result1;
  } if (result2) {
    return result2;
  }
  return {};
};

module.exports = getEmployeeByName;
