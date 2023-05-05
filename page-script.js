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
    emailInput.classList.add("valid_confirmation");
    successMessage.classList.remove("hidden");
    submitButton.style.display = "none";
    errorDisplay.textContent = "";
    return true;
  }
}

const submitButton = document.querySelector(".sub__btn");
submitButton.addEventListener("click", validateForm);
