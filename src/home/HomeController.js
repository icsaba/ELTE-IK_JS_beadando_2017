class Persona {
  constructor(fname, lname, email, gender){
    this.firstName = fname;
    this.lastName = lname;
    this.email = email;
    this.gender = gender;
  }

  fullName(){
    return this.firstName + " " + this.lastName;
  }
};

angular.module('persona').controller('HomeController', function(){
  this.isAdd = false;
  this.personas = [
    new Persona('body 1', 'some', 'some1@body.com', 'male'),
    new Persona('body 2', 'some', 'some2@body.com', 'female'),
    new Persona('body 3', 'some', 'some3@body.com', 'male'),
  ];
  this.selectedPersona = null;

  this.resetForm = function() {
    this.fname = "";
    this.lname = "";
    this.email = "";
    this.gender = "";
  };

  this.showForm = function() {
    this.isAdd = true;
  };

  this.hideForm = function() {
    this.isAdd = false;
  };

  this.addPersona = function() {
    const persona = new Persona(this.fname, this.lname, this.email, this.gender);
    this.personas.push(persona);
    this.resetForm();
  };

});
