// there are some object oriented programming concepts in javascript,
// though they are mostly synthatic sugar and not dominating concepts of the language

let l = console.log;

// CLASS DECLARATION:

//let p = new Person("Error", "Can't do this"); // unlike functions, class
// can't be accessed before it's declared

//{ also unlike functions, class DECLARATIONS don't escape blocks.
class Person {
  constructor(name, phone) {
    this.name = name;
    this.phone = phone;
  }
}
//}

let p = new Person("Tim Cook", "(209) 555-4444");
l(p); // prints Person { name: 'CEO', profession: 'CEO' }

// CLASS EXPRESSION:

let Business = class {
  constructor(name, owner) {
    this.name = name;
    this.owner = owner;
  }
};

let b = new Business("Apple", "Time Cook");

l(b);

// METHODS:

let Employee = class extends Person {
  constructor(name, phone, salary) {
    super(name, phone);
    this.salary = salary;
    this.money = 0;
  }

  pay(withBonus) {
    this.money += withBonus ? this.bonus_salary : this.salary;
  }

  get bonus_salary() { // getter can be accessed by this.bonus_salary
    return this.salary * 1.1;
  }

  set title(str) { // setter this.title = str
    this.name = str + " " + this.name;
  }
};

let e = new Employee("John Ive", "(209) 555-3245", 48500.59);

l(e); /*Employee { name: 'John Ive', phone: '(209) 555-3245',
                   salary: 48500.59, money: 0 }*/
e.pay(false);
e.pay(true);
l(e); /*Employee { name: 'John Ive', phone: '(209) 555-3245',
                   salary: 48500.59, money: 101851.239 }*/
l(e.bonus_salary);

e.title = "Dr."; /*Employee { name: 'John Ive', phone: '(209) 555-3245',
                   salary: 48500.59, money: 101851.239 }*/

l(e);

l(e instanceof Person); // true
l(e instanceof Employee); // true
l(e instanceof Business); // false




let Vehicle = class {};
let House = class {};
// let Trailer = class extends Vehicle, House {}; // multiple inheritance is not possible in javascript


/* SOURCES:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set
*/
