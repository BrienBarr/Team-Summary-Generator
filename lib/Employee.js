// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
      //name
      this.name = name;
      //id
      this.id = id
      //email
      this.email = email
      //getName
      this.getName = function(){
          return this.name;
      }
      //getId
      this.getId = function(){
          return this.id;
      }
      //getEmail
      this.getEmail = function(){
          return this.email;
      }
      //getRole ==> Returns Employee
      this.getRole = function(){
          return "Employee";
      }
    }
  }
  
  module.exports = Employee;