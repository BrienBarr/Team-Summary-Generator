// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(response) {
      //school
      this.school = response.school;
      //getSchool
      this.getSchool = function(){
          return this.school;
      }
      //getRole ==> returns Intern
      this.getRole = function(){
          return "Intern";
      }
    }
  }
  
  module.exports = Intern;