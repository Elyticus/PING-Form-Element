// const inputElement = document.querySelector(".input__btn");
// const buttonElement = document.querySelector(".sub__btn");
// const emailInput = document.getElementById("myText");

// const errorDisplay = document.querySelector(".display__error");

// buttonElement.addEventListener("click", () => {
//   if (emailInput.value.trim() === " ") {
//     emailInput.classList.add("redClass");
//     errorDisplay.innerHTML =
//       "Whoops! It looks like you forgot to add your email!";
//     return false;
//   } else if (
//     !inputElement.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)
//   ) {
//     emailInput.classList.add("redClass");
//     errorDisplay.innerHTML = "Please provide a valid email address";
//     return false;
//   } else {
//     errorDisplay.innerHTML = " ";
//     emailInput.classList.remove("redClass");
//     return true;
//   }
// });

function validateForm() {
  const emailInput = document.getElementById("myText");
  const errorDisplay = document.querySelector(".display__error");
  const regex = /\S+@\S+\.\S+/; // Regular expression for email validation
  const successMessage = document.querySelector(".valid_confirmation__after");

  if (emailInput.value.trim() === "") {
    emailInput.classList.add("redClass");

    errorDisplay.textContent =
      "Whoops! It looks like you forgot to add your email";
    return false;
  } else if (!regex.test(emailInput.value)) {
    emailInput.classList.add("redClass");

    errorDisplay.textContent = "Please provide a valid email address";
    return false;
  } else {
    emailInput.classList.remove("redClass");
    emailInput.classList.add("valid_confirmation");
    successMessage.classList.remove("hidden");
    successMessage.classList.add("valid_confirmation__after");

    errorDisplay.textContent = "";
    return true;
  }
}

const submitButton = document.querySelector(".sub__btn");
submitButton.addEventListener("click", validateForm);
