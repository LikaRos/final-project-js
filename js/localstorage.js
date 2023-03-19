const form = document.querySelector(".form__feedbackForm");
const nameInput = document.querySelector(".form__nameInput");
const surnameInput = document.querySelector(".form__surnameInput");
const emailInput = document.querySelector(".form__emailInput");

// const STORAGE_KEY = "feedback-form-state";
const STORAGE_KEY = "users";
localStorage.setItem(STORAGE_KEY, JSON.stringify([]));

// form.addEventListener("input", onInput);
form.addEventListener("submit", onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();
  const name = nameInput.value;
  const surname = surnameInput.value;
  const email = emailInput.value;
  const obj = {
    name,
    surname,
    email,
  };
  let users;

  users = JSON.parse(localStorage.getItem(STORAGE_KEY));
  users.push(obj);

  const data = localStorage.setItem(STORAGE_KEY, JSON.stringify(users));

  if (localStorage.getItem(STORAGE_KEY)) {
    const objValue = JSON.parse(localStorage.getItem(STORAGE_KEY));
    nameInput.value = objValue.name;
    surnameInput.value = objValue.surname;
    emailInput.value = objValue.email;
  }

  if (
    nameInput.value === "" ||
    surnameInput.value === "" ||
    emailInput.value === ""
  ) {
    return alert("Заполните все поля");
  }

  evt.currentTarget.reset();
}
