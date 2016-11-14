// there are a number of built-in collection objects in javascript

let log = console.log

// INDEXED COLLECTION (Array)

// arrays can hold any objects including other arrays and functions:
let array = [1, 2, 3, "four", 0x5, ['s', 'i', 'x'], _ => "seven" ];
log(array); // prints [ 1, 2, 3, 'four', 5, [ 's', 'i', 'x' ] ]
log(array[6]()); // prints

array.a = "wtf";
log(array.a); // prints wtf
log(array["a"]); // prints wtf >.<

if("a" in array) { // checks if array has key
  log("this will be printed");
}

log(array["0"]); // PRINTS 1 WTF!! "0" = 0?

console["log"]("javascript is weird");



// built-in methods:

array.forEach((item, index, array) => console.log(item)); // iterates over all items
log(array.length);
log(array.push(8)); // inserts -1 at the end of the array, returns array length
log(array);
log(array.pop()); // removes last element of the array and returns it (8)
log(array);
log(array.shift()); // removes first element of the array and returns it
log(array);
log(array.unshift(-1)); // adds element to beginning of the array, returns array length

log(array.indexOf("four")); // returns index of the element (3)

log(array.splice(3, 1)); // removes 1 element from position 3 and returns it ('four')
log("reversed array:", array.reverse()); // reverses array


let array2 = array.slice(); // copies array
log(array2);

let array3 = array.slice(2, 4); // copies part of the array from pos 2 to 4 (excluding 4)
log(array3);

{
  let array = [0, 1, 2, 3, 4, 5];

  for(let k in array) { // prints all values inside info
    log(array[k]);
  }
}

// MAPS:

/* The Map object is a simple key/value map.
Any value (both objects and primitive values) may be used as either a key or a value. */

{
  let map = { name: "john", money: 800.0 };
  log(map);
  log(map.name);

  for(let v in map) { // prints all values inside info
    log(map[v]);
  }

  if("name" in map) { // checks if map contains name key
    console.log("this will be printed")
  }



  map.NaN = 1; // lol
  map.null = 3; // lol

  log(map);
}


/* SOURCES:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
*/
