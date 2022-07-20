"use strict";

function displayMessage(message) {
  document.querySelector(".message").textContent = message;
}

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = document.querySelector(".points").textContent;
let highscore = document.querySelector(".highscorePoints").textContent;

document.querySelector(".check").addEventListener("click", () => {
  let usersNumber = document.querySelector(".isNumberCorrect").value;

  // When there is a number
  if (usersNumber) {
    // Correct guess
    if (usersNumber == secretNumber) {
      displayMessage("Correct number!");
      document.querySelector(".mysteriousNumber").textContent = secretNumber;

      // Checking highscore
      if (score > highscore) {
        highscore = score;
        document.querySelector(".highscorePoints").textContent = highscore;
      }

      // Changing colors to green
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".mysteriousNumber").style.width = "35rem";
    } else {
      // When player is losing
      if (score > 1) {
        score--;
        document.querySelector(".points").textContent = score;

        // Entered number too high
        if (usersNumber > secretNumber) {
          displayMessage("Too high...");

          // Entered number too low
        } else {
          displayMessage("Too low...");
        }

        // Lost game message
      } else {
        document.querySelector(".points").textContent = "0";
        displayMessage("You lost the game!");
      }
    }
    // When the number is not entered
  } else {
    displayMessage("No number!");
  }
});

// Reset game
document.querySelector(".again").addEventListener("click", () => {
  document.querySelector(".mysteriousNumber").textContent = "?";
  document.querySelector(".mysteriousNumber").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".points").textContent = "20";
  document.querySelector(".isNumberCorrect").value = "";
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
