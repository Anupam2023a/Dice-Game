var randomNumber1 = Math.floor(Math.random()* 6)+ 1;
var randomimage = "dice"+ randomNumber1 +".png";
var change = "./images/"+ randomimage;
var dice = document.querySelectorAll("img")[0];
dice.setAttribute("src",change);

var randomNumber2 = Math.floor(Math.random()* 6)+1;
var randomimage1 = "images/dice"+ randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",randomimage1);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 win (Saat crore)";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 win (adbhut!!)";
}
else{
    document.querySelector("h1").innerHTML=" Cheating karta hai tu...";
}
