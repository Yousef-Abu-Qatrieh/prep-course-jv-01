// pass by value and pass by reference 


function test(x){
  //  x = x + 2;
  // x = x + " Othman"
  // x = false;
  //  x["age"] = 25;
  // x.push(4);
  x = "Asmaa";
  console.log(x);
}

let num = 5;
let str = "israa";
let t = true;
let obj = {name:"israa"}
let arr = [1,2,3]

test(obj.name);
console.log(obj);

