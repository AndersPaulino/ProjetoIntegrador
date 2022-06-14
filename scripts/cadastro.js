var email = document.getElementById("email");
var senha = document.getElementById("password");
var senha2 = document.getElementById("confirmPassword");
let btn = document.querySelector(".fa-eye");
let btn2 = document.querySelector("#eye2");

email.addEventListener("focus", () => {
  email.style.borderColor = "#1DB9C3";
});
email.addEventListener("blur", () => {
  email.style.borderColor = "#ccc";
});
senha.addEventListener("focus", () => {
  senha.style.borderColor = "#1DB9C3";
});
senha.addEventListener("blur", () => {
  senha.style.borderColor = "#ccc";
});
senha2.addEventListener("focus", () => {
  senha2.style.borderColor = "#1DB9C3";
});
senha2.addEventListener("blur", () => {
  senha2.style.borderColor = "#ccc";
});
btn.addEventListener("click", () => {
  if (senha.getAttribute("type") == "password") {
    senha.setAttribute("type", "text");
  } else {
    senha.setAttribute("type", "password");
  }
});
btn2.addEventListener("click", () => {
  if (senha2.getAttribute("type") == "password") {
    senha2.setAttribute("type", "text");
  } else {
    senha2.setAttribute("type", "password");
  }
});

//confirmação de email

const form = document.getElementById("form");
const email = document.getElementById("email");

form.addEventListener("input", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const emailValue = email.value;

  if (emailValue === "") {
    setErrorFor(email, "o email é obrigatório.");
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "Por favor, insira um email válido");
  } else {
    SetSuccessFor(email);
  }
}

function setErrorFor(input, message) {
  const form = input.parentElement;
  const small = form.querySelector("small");

  //adcionar mensagem
  small.innerText = message;

  //Adicionar a classe de erro
  form.className = "form error";
}

function SetSuccessFor(input) {
  const form = input.parentElement;

  //adicionar a classe de sucesso
  form.className = "form success";
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
