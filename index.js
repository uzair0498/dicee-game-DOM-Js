
// Generating first random dice number

var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;


document.querySelector(".img1").setAttribute("src", "images/dice"+randomNumber1+".png");

// Generating second random dice number

var randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;

document.querySelector(".img2").setAttribute("src", "images/dice"+randomNumber2+".png");

// Gdenerating conditional results

if (randomNumber1 > randomNumber2){
    document.querySelector(".container-head").innerHTML = "🚩Player 1 Wins";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector(".container-head").innerHTML = "Player 2 Wins🚩";
}
else if (randomNumber2 === randomNumber1) {
    document.querySelector(".container-head").innerHTML = "Draw!";
}