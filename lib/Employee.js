// TODO: Write code to define and export the Employee class
class Employee {
    constructor(response) {
      //name
      this.name = response.name;
      //id
      this.id = response.id
      //email
      this.email = response.email
      //getName
      this.getname = function(){
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