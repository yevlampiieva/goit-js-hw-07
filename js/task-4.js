const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const userEmail = e.target.elements.email.value.trim();
  const userPassword = e.target.elements.password.value.trim();
  if (userEmail === "" || userPassword === "") {
    alert("All form fields must be filled in");
  } else {
    console.log({
      email: userEmail,
      password: userPassword,
    });
    formEl.reset();
  }
});
