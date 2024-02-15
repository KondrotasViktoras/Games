document.addEventListener("DOMContentLoaded", function () {
  // Select the dice elements
  const diceElements = document.querySelectorAll(".dice");
  const h1 = document.querySelector("h1");
  // Generate random number between 1 and 6
  const randomNumber1 = Math.floor(Math.random() * 6) + 1;
  const randomNumber2 = Math.floor(Math.random() * 6) + 1;

  // Set the src attribute of the img element to display the corresponding image
  diceElements[0]
    .querySelector("img")
    .setAttribute("src", `/images/dice${randomNumber1}.png`);
  diceElements[1]
    .querySelector("img")
    .setAttribute("src", `/images/dice${randomNumber2}.png`);

  if (randomNumber1 > randomNumber2) {
    h1.textContent = "Player 1 Wins!";
  } else if (randomNumber2 > randomNumber1) {
    h1.textContent = "Player 2 Wins!";
  } else {
    h1.textContent = "Draw!";
  }
});

document.addEventListener("click", function () {
  location.reload();
});
