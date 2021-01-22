// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        //github ==> GitHub username
        this.github = github;
        //getGitHub
        this.getGithub = function(){
            return this.github;
        }
        //getRole ==> returns Engineer
        this.getRole = function(){
            return "Engineer";
        }
    }
}
  
module.exports = Engineer;