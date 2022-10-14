//roll 1
var roll1 = Math.floor((Math.random() * 6)+1);

var image1 = document.querySelector("img1");

var newImage1 = "images/dice" + roll + ".png";

image1.setAttribute("src", newImage1);

//roll 2

var roll2 = Math.floor((Math.random() * 6)+1);

var image2 = document.querySelector("img2");

var newImage2 = "images/dice" + roll + ".png";

image2.setAttribute("src", newImage2);
