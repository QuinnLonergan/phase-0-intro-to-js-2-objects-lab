const employee = {
    name: 'Mark',
    streetAddress: 'Fun Street',
  };


  function updateEmployeeWithKeyAndValue(employee, name, Jonathan) {
    const newObj = { ...employee };
  
    newObj[name] = Jonathan;
  
    return newObj;
  }

  destructivelyUpdateEmployeeWithKeyAndValue()

  function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, Jonathan) {
    employee[name] = Jonathan; 
  
    return employee;
  } 


  function deleteFromEmployeeByKey(employee, name) {
    const newObj = { ...employee };
  
    delete newObj[name];
  
    return newObj;
 }

 function destructivelyDeleteFromEmployeeByKey(employee, name) {
     delete employee[name];

     return employee;

 }
