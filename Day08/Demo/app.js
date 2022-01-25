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

let drinksForm = document.getElementById('drinkForm');
let dinksSection = document.getElementById('drinks');


function Drink(nameValue, ingredients, cold, hot) {
    this.name = nameValue;
    this.ingredients = ingredients; // it's an array 
    this.imagePath = `./images/${this.name}.PNG`;
    this.isCold = cold;
    this.isHot = hot;
    this.price = 0;
}

Drink.prototype.calculatePrice = function() {
   this.price = getRandomNumber(1,50);
}

Drink.prototype.render = function () {
  
    let div = document.createElement('div');
    dinksSection.appendChild(div);

    let h4 = document.createElement('h4');
    div.appendChild(h4);
    h4.textContent = this.name;

    let p = document.createElement('p');
    div.appendChild(p);
    if(this.isCold && this.isHot){
        p.textContent =`${this.name} is available Hot and Cold and it has the following ingredients : `
    }else if(this.isCold){
        p.textContent =`${this.name} is available Cold and it has the following ingredients : `
    }else if(this.isHot){
        p.textContent =`${this.name} is available Hot and it has the following ingredients : `
    }
  
    let ul = document.createElement('ul');
    div.appendChild(ul);
    console.log(this.ingredients);
    for(let i=0; i < this.ingredients.length ;i++){
        let li = document.createElement('li');
        ul.appendChild(li);
        li.textContent = this.ingredients[i];
    }


    let img = document.createElement('img');
    div.appendChild(img);
    img.setAttribute('src',this.imagePath);
    img.setAttribute('alt',this.name);

    let p2 = document.createElement('p');
    div.appendChild(p2);
    p2.textContent = `price : ${this.price}` ;

}



function handelSubmit(event) {
    event.preventDefault();
    let name = event.target.name.value;
    let ingredientsString = event.target.ingredients.value;
    let ingredientsArr = ingredientsString.split(',');
    //    console.log(ingredientsArr);
    let isCold = event.target.isCold.checked;
    let isHot = event.target.isHot.checked;
    //    console.log(`${name}  ${ingredients}  ${isCold}  ${isHot}`);
    
    let newDrink = new Drink(name, ingredientsArr, isCold, isHot);
    newDrink.calculatePrice();
    newDrink.render();
}


function getRandomNumber(min,max){
    return Math.floor(Math.random() * (max-min) + min);    
}


drinksForm.addEventListener('submit', handelSubmit);









