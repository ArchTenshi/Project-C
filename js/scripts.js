"use strict";
const navbar = document.querySelector("#navbarTogglerDemo03");
const signUpModal = document.querySelector(".modal-signin");
const closeButton = document.querySelector(".btn-close");
function hide(target) {
  target.classList.toggle("hidden");
}
closeButton.addEventListener("click", (e) => {
  e.preventDefault();
  hide(signUpModal);
});
navbar.addEventListener("click", (e) => {
  if (e.target.innerText === "Sign-Up") {
    e.preventDefault();
    hide(signUpModal);
  }
});
const socialMedia = document.querySelector(".social-media");
socialMedia.addEventListener("click", (e) => {
  e.preventDefault;
  console.log(e.target);
});
