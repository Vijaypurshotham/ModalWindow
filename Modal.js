"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");

// ? When we have multiple attributes with same class and id name then we use "querySelectorAll"
const btnModal = document.querySelectorAll(".show-modal");
console.log(btnModal);

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

for (let i = 0; i < btnModal.length; i++)
  // ? Showing the content present inside the button elements
  btnModal[i].addEventListener("click", openModal);

// ? Avoiding repetataion of code
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// ? If we press "escape key" on the keyword then the pop up modal window should disappear
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) closeModal();
});
