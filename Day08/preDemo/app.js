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

// 1- read the section from the html 
let sec1 = document.getElementById('firstSection');
let imgesSec = document.getElementById('imgesSec');
let btn = document.getElementById('btn');
// let count =0;


function Drink(nameValue, ingredients, cold, hot, price) {
    this.name = nameValue;
    this.ingredients = ingredients; // it's an array 
    this.imagePath =`../Demo/images/${this.name}.PNG`;
    this.isCold = cold;
    this.isHot = hot;
    this.price = price;
}

// Drink.prototype.render = function (){
//     // 2- created a p tag using createElement method 
//  let p = document.createElement('p') // <p></p>
//     // 3- added a text to the p 
//  p.textContent = `${this.name} is added to the menu :)`;
//     // 4- appended the p to the section 
//  sec1.appendChild(p);
// }


Drink.prototype.render = function (){

 let p = document.createElement('p') // <p> </p>
 p.textContent = `${this.name} is added to the menu :)`;
 
 if(this.name == 'espresso' ){
     p.style.backgroundColor = 'blue';
 }
 sec1.appendChild(p);

 let img = document.createElement('img'); // <img src="link/path" id="" class="">
 img.setAttribute('src',this.imagePath);
 sec1.appendChild(img);

//  let a = document.createElement('a'); // <a href="link"> </a>
//  a.setAttribute('href','www.google.com');
//  a.textContent = 'google';
//  sec1.appendChild(a);

}

function addImages(){
    // count++;
    // if(count == 1){
    let img = document.createElement('img');
    img.setAttribute('src','https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg')
    imgesSec.appendChild(img);
//  }
    // remove the EventListener  (Homework)
}



const espresso = new Drink('espresso', ['espresso'], false, true,33);
espresso.render();
const latte = new Drink('latte', ['espresso', 'milk', 'whipped milk'], true, true,55);
latte.render();
const mocha = new Drink('mocha', ['espresso','milk', 'whipped cream', 'chocolate syrub'], true, true,66);
mocha.render();



btn.addEventListener('click', addImages)

// btn.addEventListener('click', ()=>{
//     let img = document.createElement('img');
//     img.setAttribute('src','https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg')
//     imgesSec.appendChild(img);
// })

