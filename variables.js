/// variables in javascript can be declared with "var, let and const"

var x = "var_x";
let y = "let_y";
const z = "const_z";

console.log(x, y, z);

/// the difference between them is:


// REASSIGNMENT
// var allows reassignment:
{
  var x = "foo";
  console.log(x);
  x = "bar";
  console.log(x);
}
// let allows reassignment:
{
  let y = "foo";
  console.log(y);
  y = "bar";
  console.log(y);
}
// const does not allow reassignment:
{
  const z = "cons";
  //z = "tant";
  /* If this line is uncommented the following error occurs:
  TypeError: Assignment to constant variable. */
}

/* MULTIPLE DECLARATIONS
var allows multiple declarations of the same identifier in the same scope: */
{
  var x = {a:1, b:2, c:3};
  console.log(x);
  var x = [1, 2, 3, 4]; // does not produce an error,
  // x is simply overridden with another variable.
  console.log(x);
}
// let forbids variables with the same identifier in the same scope:
{
  let y = 42;
  //let y = 43;
  /* If this line is uncommented the following error occurs:
  SyntaxError: Identifier 'y' has already been declared */
}
// const also forbids variables with the same identifier in the same scope:
{
  const z = "will be printed"
  //const z = "tant"
  /* If this line is uncommented the following error occurs:
  SyntaxError: Identifier 'z' has already been declared */
}

// SCOPES
// var is UNAWARE of scopes!! (TERRIBLE)
{
  var x = "won't be printed"
  {
    var x = "will be printed";
  }
  console.log(x);
}
// unlike var, let is AWARE of scopes!!
{
  let y = "will be printed"
  {
    let y = "won't be printed"
  }
  console.log(y);
}
// like let, const is AWARE of scopes.
{
  const z = "will be printed"
  {
    const z = "won't be printed"
  }
  console.log(z);
}

/* NOTE: because of code readability, it's considered bad practice
to use 'var' in modern javascript and should be avoided. */
/* NOTE: in modern javascript, let should always be used instead of var if
reassignment is required */
/* NOTE: const should be used when a variable is never reassigned in code,
it's considered good practice as it makes the code run faster */

/*
In short:
+--------+--------------+--------+-----------------------+
| METHOD | REASSIGNABLE | SCOPED | MULTIPLE DECLARATIONS |
+--------+--------------+--------+-----------------------+
| var    | YES          | NO     | YES                   |
| let    | YES          | YES    | NO                    |
| const  | NO           | YES    | NO                    |
+--------+--------------+--------+-----------------------+
*/


// PS: objects declared with const can have their properties reassigned.
{
  const obj = { property: "foo" }
  obj.property = "bar";

  console.log(obj); // prints { property: 'bar' }

  // it's just the variable that points to the object that can't be reassigned
  //obj = { numbers: [1, 2, 3] };
  //TypeError: Assignment to constant variable.

  // to make a truly immutable object use Object.freeze:
  const immutable = Object.freeze({a: 'unchangeable', b: { c: 'changeable'}});
  immutable.a = "this won't work";
  console.log(immutable.a);
  /* NOTE: Object.freeze unfortunately does not produce runtime error,
    It will simply ignore any reassignment. But it is also shallow: objects
    inside frozen objects can have their properties changed.
  */
  immutable.b.c = "this will work";
  console.log(immutable.b.c)
}

/* PlayStation 2: lists can also have their content changed even if the variable
that holds it is const.
*/
{
  const list = [1, 2, 3];
  list[0] = "bar";
  list.push({a: 1});

  console.log(list);  // prints [ 'bar', 2, 3, { a: 1 } ]

  // Again, it's just the variable that points to the list that can't be reassigned
  //list = [];
  //TypeError: Assignment to constant variable.
}

/* PS3: var is aware of scopes if the scope is a function or a file, but not
blocks */
function printvarx() {
  var x = "x";
  console.log(x); // prints x
}
printvarx();
console.log(x); // prints something else


/*  SOURCES:

https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75#.21kk4r11l
http://softwareengineering.stackexchange.com/questions/278652/how-much-should-i-be-using-let-vs-const-in-es6
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block
*/
