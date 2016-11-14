/* control structures in javascript are: if..else, switch case, for, while and
   do while. */

// NOTE:
/*
The following values are considered 'false':
- false
- undefined
- null
- 0
- NaN
- the empty string ("")
*/

// while:
// validates the expression, runs block if it's true.
// repeats until expression is false.
console.log("WHILE:");
{
  let x = 0;
  while (x < 10) {
    console.log("x = ", x, "(x < 10)");
    x++;
  }
  console.log("x = ", x, "(x >= 10)");
}

// do while:
// runs block, validates the expression, runs block again if expression is true.
console.log("DO WHILE:");
{
  let x = 0;
  do {
    console.log("x = ", x, "(x < 10)");
    x++;
  }
  while (x < 10)
  console.log("x = ", x, "(x >= 10)");
}

// if..else:
// runs block if expression is true, if it's false runs else block
console.log("IF..ELSE:");
{
  let x = 5;
  if(x/2 == 0) {
    console.log("x is even");
  } else {
    console.log("x is odd");
  }
}

// switch:
console.log("SWITCH:")
{
  let animal = "Cat"
  switch (animal) {
  case "Dog":
    console.log("Animal: Bark! (it's a dog)");
    break;
  case "Cat":
    console.log("Animal: Meow! (it's a cat)");
    break;
  case "Mouse":
    console.log("Animal: Screek! (it's a rat)");
    break;
  case "Cow":
    console.log("Animal: Moo! (it's a cow)");
  default:
    console.log("Animal: *noise* (it's not a dog, a car, a mouse or a cow)");
 }
}

/* SOURCES:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling
*/
