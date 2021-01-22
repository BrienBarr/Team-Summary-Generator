// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(response) {
      //github ==> GitHub username
      this.github = response.github;
      //getGitHub
      this.getGitHub = function(){
          return this.github;
      }
      //getRole ==> returns Engineer
      this.getRole = function(){
          return "Engineer";
      }
    }
  }
  
  module.exports = Engineer;