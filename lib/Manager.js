// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(response) {
        super(response);
        //officeNumber
        this.officeNumber = response.officeNumber;
        //getRole ==> returns Manager
        this.getRole = function(){
            return "Manager";
        };
    }
  }
  
  module.exports = Manager;