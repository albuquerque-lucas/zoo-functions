const data = require('../data/zoo_data');

const isManager = (id) => {
  const employeesList = data.employees;
  const managedEmployees = employeesList.filter((employee) => employee.managers.length > 0);
  const result = managedEmployees.some((item) => item.managers.includes(id));
  return result;
};

const getRelatedEmployees = (managerId) => {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const employeesList = data.employees;
  const managedEmployees = employeesList
    .filter((employee) => employee.managers.includes(managerId));

  const result = managedEmployees
    .map((item) => `${item.firstName} ${item.lastName}`);
  return result;
};

console.log(getRelatedEmployees('0e7b460e-acf4-4e17-bcb3-ee472265db83'));

module.exports = { isManager, getRelatedEmployees };
