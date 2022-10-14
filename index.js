//roll 1
var roll1 = Math.floor((Math.random() * 6)+1);

var newImage1 = "images/dice" + roll1 + ".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", newImage1);

//roll 2

var roll2 = Math.floor((Math.random() * 6)+1);

var newImage2 = "images/dice" + roll2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", newImage2);

//update new heading

if(roll1 > roll2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}else if(roll1 < roll2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}else{
    document.querySelector("h1").innerHTML = "Draw!";
}
