var roll1 = Math.floor((Math.random() * 6) + 1);

if(roll === 1){
    document.querySelector("img1").setAttribute("src", "images/dice1.png");
}else if(roll ===2){
    document.querySelector("img1").setAttribute("src", "images/dice2.png");
}else if(roll ===3){
    document.querySelector("img1").setAttribute("src", "images/dice3.png");
}else if(roll ===4){
    document.querySelector("img1").setAttribute("src", "images/dice4.png");
}else if(roll ===5){
    document.querySelector("img1").setAttribute("src", "images/dice5.png");
}else if(roll ===6){
    document.querySelector("img1").setAttribute("src", "images/dice6.png");
}

var roll2 = Math.floor((Math.random() * 6) + 1);

if(roll2 === 1){
    document.querySelector("img2").setAttribute("src", "images/dice1.png");
}else if(roll2 ===2){
    document.querySelector("img2").setAttribute("src", "images/dice2.png");
}else if(roll2 ===3){
    document.querySelector("img2").setAttribute("src", "images/dice3.png");
}else if(roll2 ===4){
    document.querySelector("img2").setAttribute("src", "images/dice4.png");
}else if(roll2 ===5){
    document.querySelector("img2").setAttribute("src", "images/dice5.png");
}else if(roll2 ===6){
    document.querySelector("img2").setAttribute("src", "images/dice6.png");
}

if(roll1 > roll2){
    document.querySelector("h1").textContent = "Player 1 Wins!";
}else{
    document.querySelector("h1").textContent = "Player 2 Wins!";
}