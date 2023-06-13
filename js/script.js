//Html elements
const ageLabel = document.querySelector("#user-age");
const distanceLabel = document.querySelector("#user-distance");
const titleLabel = document.querySelector("h1");
const finalPricelabel = document.querySelector("#final-price");
const currentTimeLabel = document.querySelector("#currentTime");

//Variables
let price, finalPrice;
let discount, discountValue; 
let discountedPrice;

//Time Var
let date = new Date();
let today = `La data odierna: ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`


//User Inputs
const userAge = prompt("Inserire la propria età:");

const userDistance = prompt("Inserire la distanza da percorrere:");

let discountMessage;
if (isNaN(userAge) || isNaN(userDistance)){
    titleLabel.innerHTML = "Non è stato inserito un numero, riprovare."
}
else{
    ageLabel.innerHTML = `Età inserita: ${userAge}`;
    distanceLabel.innerHTML = `Distanza da percorrere: ${userDistance}km`;
    price = userDistance * 0.21;
}
//Analisi età
if(userAge < 18){
    discount = 20;
    discountMessage = "Sconto Under 18 Applicato!";

}
else if(userAge > 65){
    discount = 40;    
    discountMessage = "Sconto Over 65 Applicato!";

}
else{
    discount = 0;
    discountMessage = "";

}



discountValue = price * discount / 100;
finalPrice = price - discountValue;

currentTimeLabel.innerHTML = today;

finalPricelabel.innerHTML = `Prezzo del biglietto: ${finalPrice.toFixed(2)}€ ${discountMessage}`;





