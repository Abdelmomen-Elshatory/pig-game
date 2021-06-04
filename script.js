'use strict';

// Selected Element
const player0Element = document.querySelector(".player--0");
const player1Element = document.querySelector(".player--1");
const score0Element = document.getElementById("score--0");
const score1Element = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const current0Element = document.querySelector("#current--0");
const current1Element = document.querySelector("#current--1");
let currentScore = 0;
let activePlayer = 0;
const scors = [0, 0];
let playing = true;

score0Element.textContent = "0";
score1Element.textContent = "0";
diceEl.classList.add("hidden")


function switchPlayer() {
    document.getElementById(`current--${activePlayer}`).textContent = 0
    currentScore = 0
    activePlayer = activePlayer == 0 ? 1 : 0;
    player0Element.classList.toggle("player--active")
    player1Element.classList.toggle("player--active")
}

btnRoll.addEventListener("click", function () {

    if (playing) {
        let dice = Math.trunc(Math.random() * 6) + 1;
        diceEl.src = `dice-${dice}.png`;
        diceEl.classList.remove("hidden");

        if (dice !== 1) {
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore
        } else {
            switchPlayer();
        }
    }
})

btnHold.addEventListener("click", function () {
    if (playing) {
        scors[activePlayer] += currentScore
        document.getElementById(`score--${activePlayer}`).textContent = scors[activePlayer];

        if (scors[activePlayer] >= 100) {
            playing = false
            diceEl.classList.add("hidden")
            document.querySelector(`.player--${activePlayer}`).classList.remove("player--active")
            document.querySelector(`.player--${activePlayer}`).classList.add("player--winner")
        } else {
            switchPlayer();
        }
    }
})

btnNew.addEventListener("click", function() {
    player0Element.classList.remove("player--winner")
    player1Element.classList.remove("player--winner")
    player0Element.classList.add("player--active")
    player1Element.classList.remove("player--active")
    current0Element.textContent = 0;
    current1Element.textContent = 0;
    score0Element.textContent = 0;
    score1Element.textContent = 0;
    playing = true
    currentScore = 0
    score0Element.textContent = "0";
    score1Element.textContent = "0";
})