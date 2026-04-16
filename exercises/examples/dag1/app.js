"use strict";
console.log("App kører!");

// Elementer
const counterEl = document.querySelector("#counter");
const clickBtn = document.querySelector("#click-button");
const resetBtn = document.querySelector("#reset-button");
const minusBtn = document.querySelector("#minus-button"); // ny knap

let count = 0;

// Indstillinger
const limit = 10; // grænseværdi
const goal = 10;  // mål

// Funktion til at opdatere display + farve
function updateDisplay() {
  counterEl.textContent = count;

  // 6.1 - farveskift
  if (count >= limit) {
    counterEl.style.color = "red";
  } else {
    counterEl.style.color = "black";
  }
}

// ➕ Klik op
clickBtn.addEventListener("click", function () {
  count++;
  updateDisplay();

  console.log("Count:", count);

  // 6.3 - besked ved mål
  if (count === goal) {
    console.log("Du ramte 10! 🎉");
    alert("Du ramte 10! 🎉");
  }
});

// ➖ Klik ned (6.2)
minusBtn.addEventListener("click", function () {
  // hvis du IKKE vil under 0:
  if (count > 0) {
    count--;
  }

  updateDisplay();
  console.log("Count:", count);
});

// 🔄 Reset
resetBtn.addEventListener("click", function () {
  count = 0;
  updateDisplay();

  console.log("Reset!");
});

