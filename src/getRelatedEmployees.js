const data = require('../data/zoo_data');

const isManager = (id) => {
  const employeesList = data.employees;
  const managedEmployees = employeesList.filter((employee) => employee.managers.length > 0);
  const result = managedEmployees.some((item) => item.managers.includes(id));
  return result;
};

const getRelatedEmployees = (managerId) => {
  // seu código aqui
};

module.exports = { isManager, getRelatedEmployees };
