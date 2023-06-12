//Html elements
const ageLabel = document.querySelector("#user-age")
const distanceLabel = document.querySelector("#user-distance")
const titleLabel = document.querySelector("h1")
const finalPricelabel = document.querySelector("#final-price")


//User Inputs
const userAge = prompt("Inserire la propria età:")

const userDistance = prompt("Inserire la distanza da percorrere:")

if (isNaN(userAge) || isNaN(userDistance)){
    titleLabel.innerHTML = "Non è stato inserito un numero, riprovare."
}
else{
    ageLabel.innerHTML = `Età inserita: ${userAge}`;
    distanceLabel.innerHTML = `Distanza da percorrere: ${userDistance}km`;
}



if(userAge < 18){
        
}






