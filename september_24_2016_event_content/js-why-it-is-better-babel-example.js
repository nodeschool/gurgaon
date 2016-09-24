/*
 * You can try it out at http://babeljs.io/repl/
 */

class Person {
  constructor(name) {
    this.walkedDistance = 0;
    this.name = name;
  }
  
  walk() {
    this.walkedDistance += 1; 
  }
}

class Engineer extends Person {
  constructor(name, designation) {
    super(name);
    
    this.designation = designation;
  }
}

const manvendra = new Engineer("Manvendra", "Tech Lead");
manvendra.walk();
manvendra.walk();

console.log(manvendra.name, manvendra.designation, manvendra.walkedDistance);

const person = new Person(); 
console.log(Object.getPrototypeOf(person).constructor);
console.log(manvendra.__proto__.constructor);

Person.prototype.sayHi = () => console.log("hi folks!!!")


manvendra.sayHi();
