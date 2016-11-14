/*
Functions are one of the fundamental building blocks in JavaScript.
A function is a JavaScript procedure—a set of statements that performs a
task or calculates a value. To use a function, you must define it somewhere
in the scope from which you wish to call it.
                                                                          - MDN
*/

// FUNCTION DEFINITION

{
  console.log(multiply(2, 3)); // it can be accessed before it's declared

  function multiply(a, b) {
    return a * b;
  }

  console.log(multiply(2, 3));
}
// function definitions escape blocks!
console.log(multiply(2, 3));

// redefining it like this won't work, but doesn't throw any error:
function multiply(a, b) { return "won't be printed" }
console.log(multiply(2, 3)); // prints 6

// functions can be passed as arguments to other functions:
function foo1(f, a) { return f(a); };
function foo2(a) { console.log("foo2:", a); };

foo1(foo2, 2);

// FUNCTION EXPRESSIONS

{
  // console.log(sum(a, b)); // can't be accessed before it's declared
  // ReferenceError: sum is not defined
  let sum = function(a, b) { return a + b; };

  // can also be passed as arguments to other functions:
  let foo = function(func, a, b) { return func(a, b); };
  console.log(foo(sum, 2, 3));
}

multiply = function(a, b) { return "will be printed"; };
console.log(multiply(2, 3));

// or even this (ugh)
{
  var multiply = function(a, b) { return "what" };
}
console.log(multiply(1, 2)); // will escape the block because it's var

// functions can be stored in variables, thus you can use var (don't), let and
// const and it behaves as expected
{
  const sum = function(a, b) { return a + b };
  // sum = function(a) { return "let2" }; // error

  let doSomething = function(a, b) { return a + b * a };
  console.log(doSomething(2, 3));

  doSomething = function(a, b) { return "same function, something else"};
  console.log(doSomething(2, 3));
}

// FAT ARROW (=>)
// fat arrow functions are basically synthatic sugar that greatly reduce the
// amount of code necessary for simple functions ex:
let square = function(n) { return n*n; };
console.log(square(3)); // prints 9
// becomes:
square = n => n*n;
console.log(square(3)); // prints 9

let sixtyfour = (n => n*n)(8);
console.log(sixtyfour); // prints 64

/* SOURCES:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#Function_expressions
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
*/
