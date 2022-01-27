let person =
  {
    'name':'John',
    'role':'Dad',
    'interests': ['Coaching','Teaching'],
  };

// console.log(person.name);
// console.log(person[name]);


// // *************** for ... in ******************
// // a looping method for objects that acts much like an old fashioned "for" loop.

// for( let property in person ) {
//   console.log(property, person[property]);
// }


// // ******************** Object.keys *****************
// //  this is an Object constructor prototype method, which takes in an object as an argument and returns an array of keys (properties)

// let properties = Object.keys(person);
// console.log(properties);
// properties.forEach( property => {
//   console.log(property, person[property]);
// });

// Object.keys(person).forEach( property => {
//   console.log(property, person[property]);
// });

// // **************** Object.values ********************
// //  Returns an iterable array of just the values from the object.
// console.log(Object.values(person));

// Object.values(person).forEach(value => {
//   console.log(value);
// });

// // ******************** Object.entries ***************
// // Returns an array of each "Entry" as an array with a key and value
// console.log(Object.entries(person));
// Object.entries(person).forEach(entry => {
//   console.log(entry);
// });