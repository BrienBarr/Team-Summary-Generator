// Code to define and export the Manager class with properties inherited from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.getOfficeNumber = function(){
            return this.officeNumber;
        };
        this.getRole = function(){
            return "Manager";
        };
    }
  }
  
  module.exports = Manager;