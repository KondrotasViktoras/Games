let randomNumber1 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1);

document
  .querySelector(".img1")
  .setAttribute("src", "/diceGame/images/dice" + randomNumber1 + ".png");

let randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber2);

document
  .querySelector(".img2")
  .setAttribute("src", "/diceGame/images/dice" + randomNumber2 + ".png");

let titleName = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
  titleName.innerHTML = "Player 1 wins";
} else if (randomNumber1 < randomNumber2) {
  titleName.innerHTML = "Player 2 wins";
} else {
  titleName.innerHTML = "Draw";
}
