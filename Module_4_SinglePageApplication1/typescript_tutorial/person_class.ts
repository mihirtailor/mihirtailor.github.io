// class is like a blueprint for creating objects
class Person {
  firstName: string;
  lastName: string;

  // constructor is the first method that is called when you create an object
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return this.firstName + " " + this.lastName;
  }
}

var person = new Person("Bob", "Marley");
console.log(person.getFullName());

class Male extends Person {
  age: number;
  constructor(firstName: string, lastName: string, age: number) {
    super(firstName, lastName);
    this.age = age;
  }

  getFullName(): string {
    return this.firstName + " " + this.lastName + " " + this.age;
  }
}
var male = new Male("Andy", "Hogg", 43);
console.log(male.getFullName());
