const form = document.querySelector(".form__feedbackForm");
const nameInput = document.querySelector(".form__nameInput");
const surnameInput = document.querySelector(".form__surnameInput");
const emailInput = document.querySelector(".form__emailInput");
const animation = document.getElementById("animation");
animation.classList.add("hidden");
const STORAGE_KEY = "users";
localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
/**/ 


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
    alert("Заполните все поля");
    return 
  }

  greetOnSubmit(name);

  evt.currentTarget.reset();
}


function greetOnSubmit(name) {
  const date = new Date();
  animation.classList.add("loader"); 
  animation.classList.remove("hidden");
  const text = document.getElementById("text");
  text.innerHTML = `${name}, ${date.toLocaleDateString()} знижка 120%  `;

  setTimeout(() => {
  animation.classList.remove("loader");
  animation.classList.add("hidden");   
}, 26000);
}
