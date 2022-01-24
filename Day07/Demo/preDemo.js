'use strict';

// create a object 
// let variableName = {key : value , key : value  };

let person1 = {
    firstName:"Israa",
    lastName: "Othman",
    age : 25,
    gender: "Female",
    fullName : function() {
        let fN = this.firstName + " " +  this.lastName;
        return fN;
    }
}


// function fullName() {
//     let fN = person1.firstName + " " +  person1.lastName;
//     return fN;
// }



// with interpolation `strings ${variable}` 
let person2 = {
    firstName:"Israa",
    lastName: "Othman",
    age : 25,
    gender: "Female",
    fullName : function() {
        let fN = `${this.firstName} Ayoub ${this.lastName} my age is ${this.age}`;
        return fN;
    }
}

// console.log(person2.fullName());

// console.log(person2.firstName);

// add new property to the object 
person2["height"] = 158;

// change the value of existing property 
person2.age = 26; 

// console.log(person2);
// console.table(person2);



// ******************************************** constructor *******************************************

function Person(firstNameValue,lastNameValue, ageValue, genderValue){
    this.firstName = firstNameValue;
    this.lastName = lastNameValue;
    this.age = ageValue;
    this.gender = genderValue; 
}

// ConstructorName.prototype.methodName => to create a new method 

 Person.prototype.fullName = function() {
    let fN = `${this.firstName} Ayoub ${this.lastName} my age is ${this.age}`;
    return fN;
}

let ahmad = new Person("Ahmad","Othman",23,"male");
let alaa = new Person("Alaa","Othman",21,"female");

console.log(ahmad.fullName());
console.log(alaa);
