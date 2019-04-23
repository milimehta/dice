var dice = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];

var randomNumber1 = Math.random();
randomNumber1 = Math.floor((randomNumber1 * 6));
document.querySelectorAll("img")[0].setAttribute("src", dice[randomNumber1]);
console.log(dice[randomNumber1]);

var randomNumber2 = Math.random();
randomNumber2 = Math.floor((randomNumber2 * 6));
document.querySelectorAll("img")[1].setAttribute("src", dice[randomNumber2]);
console.log(dice[randomNumber2]);

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins";
} else if (randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = "Player 2 Wins 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw";
}
