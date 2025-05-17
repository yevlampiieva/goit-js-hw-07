const inputEl = document.querySelector("#name-input");
const inputOutputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", (e) => {
  if (e.target.value.trim()) {
    inputOutputEl.textContent = e.target.value.trim();
  } else {
    inputOutputEl.textContent = "Anonymous";
  }
});
