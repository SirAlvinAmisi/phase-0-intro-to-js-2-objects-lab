// Write your solution in this file!
const employee = {
    name: "John Doe",
    streetAddress: "123 Main St",
  };
  
  console.log(employee);
 
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        //the spread operator at work
      ...employee,
      [key]: value,
    };
  }
  
  // Example usage:
  const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "title", "Manager");
  
  console.log(updatedEmployee);
 
  
  console.log(employee);
 
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  // Example usage:
  destructivelyUpdateEmployeeWithKeyAndValue(employee, "title", "Manager");
  
  console.log(employee);

  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  // Example usage:
  const employeeWithoutTitle = deleteFromEmployeeByKey(employee, "title");
  
  console.log(employeeWithoutTitle);
  
  
  console.log(employee);
  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  // Example usage:
  destructivelyDeleteFromEmployeeByKey(employee, "title");
  
  console.log(employee);
  
  
 