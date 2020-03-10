"use strict";
exports.__esModule = true;
var Employee = /** @class */ (function () {
    function Employee(firstName, lastName, Salary, gender, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.Salary = Salary;
        this.gender = gender;
        this.email = email;
    }
    Employee.prototype.getFullName = function () {
        console.log(this.firstName + "  " + this.lastName);
    };
    return Employee;
}());
exports.Employee = Employee;
var emp = new Employee("abc", "def", 100, "m", "15@gmail.com");
console.log(emp);
emp.getFullName();
