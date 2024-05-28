"use strict";

//generate random number
let randomNum = Math.floor(Math.random() * 20) + 1;
console.log("the random number is ", randomNum);

//score
let score = document.querySelector(".score");

//message
let message = document.querySelector(".message");

//highScore
let highScore = document.querySelector(".highscore");

//button to check
let checkBtn = document.querySelector(".check");

//guessing an number
let guess = document.querySelector(".guess");

let again = document.querySelector(".again");
if (document.activeElement !== guess) guess.focus();

guess.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    checkBtn.click();
  }
});
//adding event listener
checkBtn.addEventListener("click", function () {
  if (randomNum > guess.value && guess.value !== "") {
    guess.value = "";
    message.textContent = "too low";
    score.textContent = Number(score.textContent) - 1;
  } else if (randomNum < guess.value) {
    guess.value = "";
    score.textContent = Number(score.textContent) - 1;
    message.textContent = "too high";
  } else if (randomNum == guess.value) {
    message.textContent = "correct!";
    document.querySelector("body").style.backgroundImage =
      "linear-gradient(green, yellow, red)";

    document.querySelector(".number").textContent = guess.value;
    guess.value = "";
    if (Number(score.textContent) > Number(highScore.textContent))
      highScore.textContent = score.textContent;
  } else {
    guess.addEventListener("keypress", function (event) {
      if (event.key === "Enter" && guess.value === "") {
        event.preventDefault();
        again.click();
      }
    });
  }

});

//Again
document.addEventListener("DOMContentLoaded", function () {
  again.addEventListener("click", function () {
    document.querySelector("body").style.backgroundImage =
      "linear-gradient(gray,gray";
    randomNum = Math.floor(Math.random() * 20) + 1;
    score.textContent = "20";
    message.textContent = "Start guessing again";
    document.querySelector(".number").textContent = "?";
    if (document.activeElement !== guess) guess.focus();
  });
});
