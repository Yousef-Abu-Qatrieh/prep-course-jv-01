// Array methods 


// 1- Array.forEach 
// is a method on an array that processes every element in the array with a callback
// The callback is always given the current element's value and index in the array as args
// It cannot "break", "continue" or "return"

// let people = ['John','Cathy','Allie','Zach'];

// for(let i=0; i< people.length; i++){
//   console.log(people[i]);
// }

// people.forEach(function(item,idx) {
//   console.log(idx);
//   console.log(item);
// });

// ... or as an arrow function ...

// people.forEach( (item) => {
//   console.log(item);
// });

// ... or as a named function

// let processor = (item,idx) => { console.log(item); };

// people.forEach(processor);

// people.forEach(item=> console.log(item))





// 2- ******************* map() ********************
// `array.map( fn(v,i) {} )` Much like`array.forEach()`, the `array.map()` function iterates over an array and runs a call back for each element. The callback receives the value and the index of the array element as a parameter.  

// The difference is that `.map()` will always return you a **new array** of the **same length** as the original array comprised of your return values

// ex: Squaring a number

  // let numbers = [2,3,4,5];  

  // let squares = numbers.map( function(n,i) {
  //   return n * n;
  // });
  
  // // or as a snazzy arrow function ...
  // let squares = numbers.map( n => n * n );
  
  // console.log(squares); // [ 4, 9, 16, 25 ]


  // ex2 :Changing the data shape 

  //   let people = [
  //   { name: "John", role: "Dad" },
  //   { name: "Cathy", role: "Mom" },
  //   { name: "Zach", role: "Kid" },
  //   { name: "Allie", role: "Kid" },
  // ];
  
  // let folks = people.map( (person,i) => {
  //   return person.name;
  // });
  
  // console.log(folks); // [ "John", "Cathy", "Zach", "Allie" ]

  // let folks = people.map(person =>  person.name );


//   ###  Notes

// - The original array is never mutated
// - You always get back a new array
// - The array returned is always the same length as the original


  // let neArr= numbers.map(num => {
  //   if(num%2 == 0){
  //     return num;
  //   }
  // })
  // console.log(neArr);





// 3- ***************** filter() **********************
// Similar to `array.map()`, the `array.filter()` function iterates over an array and runs a callback for each element. The callback receives the value and the index of the array element as a parameter.

// `.filter()` will always return you a **new array**, comprised of elements from the original array that match your criteria -- which elements in the array match the filter condition?

// ex: Even Numbers

  // let numbers = [2,3,4,5];
  
  // let evens = numbers.filter( function(n,i) {
  //   //  if(num%2 == 0){
  //   //   return true;
  //   //  }
  //   return !(n % 2);
  // });

  // if(1) true
  // if(0) false 
  
  // or as a snazzy arrow function ...
  // let evens = numbers.filter( n => !(n % 2) );
  
  // console.log(evens); // [ 2, 4, 6 ]


  // 4- ***************** reduce() *****************
  // `arr.reduce( (accumulator,value,index) => {...}, initialvalue)`

//   let arr = [1,2,3,4,5]
// let sum =0;
// for(let i=0;i<arr.length;i++){
//    sum = sum + arr[i]
// }
// console.log(sum);



  // ex : Add up all the numbers in an array
//   let numbers = [1,2,3,4];
// let sum = numbers.reduce( function(accumulator,value,idx) {
//   accumulator = accumulator + value;
//   return accumulator;
// }, 0);

// console.log(sum);


// ex: Change the shape of you data
// In this example, we'll take an array of objects and return back an object, keyed by the 'name' property. The initial value is an empty object, and as we iterate, we create a new entry in it, returning it as we build on.

  // let people = [
  //   {name:'Fred', role:'Developer'},
  //   {name:'Suzy', role:'Developer'},
  //   {name:'Gina', role:'Manager'},
  //   {name:'Jim', role:'Support'}
  // ];
  
  // let folks = people.reduce( (accumulator, person, idx) => {
  //   accumulator[person.name] = person.role;
  //   return accumulator;
  // }, {} );
  
  // folks:
  // {
  //   Fred: 'Developer',
  //   Suzy: 'Developer',
  //   Gina: 'Manager',
  //   Jim: 'Support'
  // }

  // console.log(folks);


// 5- ******************* sort() ********************
// homework
 
