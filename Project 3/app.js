const randomNumber1  = randomNumber();
const randomNumber2 = randomNumber();

const randomImageSource = "./images/dice"+randomNumber1+".png"
const randomImageSource1 = "./images/dice"+randomNumber2+".png"

console.log(randomNumber1,randomNumber2);
function randomNumber(){
    return Math.floor((Math.random()*6)+1);
}

const img1 =document.querySelectorAll("img")[0];
const img2 =document.querySelectorAll("img")[1];

img1.setAttribute("src",randomImageSource);
img2.setAttribute("src",randomImageSource1);

if(randomNumber1 > randomNumber2){
    document.getElementById("winner").innerHTML = "Player 1 Wins"
}

if(randomNumber1 < randomNumber2){
    document.getElementById("winner").innerHTML = "Player 2 Wins"
}
else if (randomNumber1 === randomNumber2){
    document.getElementById("winner").innerHTML = "Draw"
    
}