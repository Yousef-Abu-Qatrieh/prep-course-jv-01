'use strict'; //will force the user to run this code in the strict mode 

// problem domain: ASAC coffee house is a new cafe so they are updating their menu 
// There are alot of drinks that they can add to the menu and  it's too time-consuming to hand-code them each time  
// so They need a better and faster way.

// Each drink should has:
// - name
// - ingredients
// - an image
// - cold => T/F
// - hot => T/F
// - price 

// TODO: dynamically generate drink objects using form data

function Drink(nameValue, ingredients, cold, hot, price) {
    this.name = nameValue;
    this.ingredients = ingredients; // it's an array 
    this.imagePath =`./images/${this.name}.PNG`;
    this.isCold = cold;
    this.isHot = hot;
    this.price = price;
}

Drink.prototype.render = function (){
 document.write(`<p> ${this.name} is added to the menu :) </p>`)
}

const espresso = new Drink('espresso', ['espresso'], false, true,33);
espresso.render();
const latte = new Drink('latte', ['espresso', 'milk', 'whipped milk'], true, true,55);
latte.render();
const mocha = new Drink('mocha', ['espresso','milk', 'whipped cream', 'chocolate syrub'], true, true,66);
mocha.render();

console.log(latte);

// document.write("Hello From JS");


