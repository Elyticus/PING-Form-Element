const inputElement = document.querySelector(".input__btn");
const buttonElement = document.querySelector(".sub__btn");
const redPlaceholder = document.getElementById("myText");

const displayError = document.querySelector(".display__error");

buttonElement.addEventListener("click", () => {
  redPlaceholder.classList.add("redClass");

  redPlaceholder.placeholder =
    "Whoops! It looks like you forgot to add your email!";
});
