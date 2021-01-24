// Code to define and export the Engineer class with properties inherited from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
        this.getGithub = function(){
            return this.github;
        }
        this.getRole = function(){
            return "Engineer";
        }
    }
}
  
module.exports = Engineer;