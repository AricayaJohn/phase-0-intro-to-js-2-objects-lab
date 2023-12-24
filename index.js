// Write your solution in this file!

const employee = {
    name : "John",
    streetAddress : "11 Broadway"
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newObj = {...employee};
    newObj [key] = value;
    return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey (employee, key) {
    //clone 
    const newEmployee = {...employee};
    //delete
    delete newEmployee[key];
    //return new employee without key and without destroying original 
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey (employee, key) {
    delete employee[key];
    return employee;
}