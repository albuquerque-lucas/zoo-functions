const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  if (!employeeName) return {};

  const employeesList = data.employees;
  return employeesList.find((individual) => individual.firstName === employeeName || individual.lastName === employeeName);
};

console.log(getEmployeeByName('Bethea'));

module.exports = getEmployeeByName;
