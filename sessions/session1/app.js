let x;
let y;
let z;
let oddNumbers;
let name2;
let name3;


// Arrays and Loops
x = 1;
y = 3;
z = 5;

// console.log(x);

oddNumbers = [1, 3, 5]; //each value inside the array has an index (0,1,2,.....)
// console.log(oddNumbers[0]);
// console.log(oddNumbers[1]);
// console.log(oddNumbers[2]);



function test(arr) {
    //   console.log(arr.length);
    //    for(initial value "start", condition "when do you want to stop looping"; changing that start value )
    for (let i = 0; i < arr.length; i++) {
        //    let result = arr[i] * 2;
        //    console.log(result); 
        console.log(i + "*******" + arr[i]);
    }
}

test(oddNumbers);
test([7, 8, 9, 10, 11]);



//************************************************** Function *******************************************/
// block of code you can use more than one time 
name(); // this will work 
name2(); // won't work because of the hoisting 

function name() {
    // code ..
}

name2 = function () {

}

name3 = () => {

}




// ********************************************* Objects **************************************************/

let arr = ["israa", 23, "Female", 158];
// arr[0] => israa
// arr.push("othman")
// for loop 

let obj = { name: "israa", age: 25, gender: "Female", hight: 158 }
// obj.name => israa
obj.name = "ahlam";
// add new key:value to the object :
obj['lastName'] = "Othman";
// loop 
// Object.keys()
// Object.values()





//******************************************************* */


let arr = [1, 2, 3, 4, 5]
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i]
}

// reduce(function,acc initial value)
let sum = arr.reduce((acc,val)=>{
    acc = acc + val;
    return acc;
}, 0);

console.log(sum);


let stringsArr = ["israa","aya","asmaa","alaa"];
let output = stringsArr.reduce((acc,val)=>{
    acc = acc + " " + val ;
    return acc;
}," ");
console.log(output);

let arrOfObj = stringsArr.reduce((acc,val)=>{
    let obj = {};
    obj['name'] = val; 
    acc.push(obj);
    return acc;
}, []);

console.log(arrOfObj);


let reverceArr = stringsArr.reduce((acc,val)=>{
   acc.unshift(val); 
   return acc;
},[]);

console.log(reverceArr);



// splice 

const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
fruits.splice(2, 2);

//*************************************************************** */