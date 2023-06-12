//Html elements
const ageLabel = document.querySelector("#user-age");
const distanceLabel = document.querySelector("#user-distance");
const titleLabel = document.querySelector("h1");
const finalPricelabel = document.querySelector("#final-price");
const currentTimeLabel = document.querySelector("#currentTime")

//Variables
let price, finalPrice;
let discount, discountValue; 
let discountedPrice;

let date = new Date();

//User Inputs
const userAge = prompt("Inserire la propria età:");

const userDistance = prompt("Inserire la distanza da percorrere:");

if (isNaN(userAge) || isNaN(userDistance)){
    titleLabel.innerHTML = "Non è stato inserito un numero, riprovare."
}
else{
    ageLabel.innerHTML = `Età inserita: ${userAge}`;
    distanceLabel.innerHTML = `Distanza da percorrere: ${userDistance}km`;
    price = userDistance * 0.21
}
//Analisi età
if(userAge < 18){
    discount = 20;
}
else if(userAge > 65){
    discount = 40;
}
else{
    discount = 0;
}



discountValue = price * discount / 100;
finalPrice = price - discountValue;


finalPricelabel.innerHTML = `Prezzo del biglietto: ${finalPrice.toFixed(2)}€`;





