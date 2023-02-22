// Prompt user for their names
var player1 = prompt("Enter avatar name, player 1 :");
var player2 = prompt("Enter avatar name, player 2 :");

// dice images list path 
var diceImgList = ["images/dice1.jpg", "images/dice2.jpg", "images/dice3.jpg", "images/dice4.jpg", "images/dice5.jpg", "images/dice6.jpg"];

// random code for picking images for both players
var randomImg1 = Math.floor(Math.random() *6) ;
var randomImg2 = Math.floor(Math.random() *6) ;

// set image attributes to random image 
document.querySelector(".img-1").setAttribute("src", diceImgList[randomImg1]);
document.querySelector(".img-2").setAttribute("src", diceImgList[randomImg2]);


// conditional code for checking for winner and adjusting h1 and win flag image 
if (randomImg1 > randomImg2) {
    document.querySelector("h1").innerHTML = player1 + "Wins!";
    document.querySelector(".flag-img").style.visibility = "visible";
    document.querySelector(".flag-img").style.position = "relative";
}

else if (randomImg2 > randomImg1) {
    document.querySelector("h1").innerHTML =  player2 +" Wins!";
    document.querySelector(".flag-img").style.visibility = "visible";
    document.querySelector(".flag-img").style.position = "relative";
}

else {
    document.querySelector("h1").innerHTML = 'Draw, reload again.'
}