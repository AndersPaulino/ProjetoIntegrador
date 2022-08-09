const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordconfirmation = document.getElementById("passwordconfirmation");

let btn = document.querySelector(".fa-eye");
let btn2 = document.querySelector("#eye2");

form.addEventListener("input", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const emailValue = email.value;
  const passwordValue = password.value;
  const passwordconfirmationValue = passwordconfirmation.value;

  if (emailValue === "") {
    setErrorFor(email, "o email é obrigatório.");
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "Por favor, insira um email válido");
  } else {
    SetSuccessFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "A senha é obrigatória.");
  } else if (passwordValue.length < 8) {
    setErrorFor(password, "A senha é muito curta.");
  } else {
    SetSuccessFor(password);
  }

  if (passwordconfirmationValue === "") {
    setErrorFor(passwordconfirmation, "A confirmação da senha é obrigatória.");
  } else if (passwordconfirmationValue.length < 8) {
    setErrorFor(passwordconfirmation, "A senha é muito curta");
  } else if (passwordconfirmationValue != passwordValue) {
    setErrorFor(passwordconfirmation, "As senhas não são iguais.");
  } else {
    SetSuccessFor(passwordconfirmation);
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

btn.addEventListener("click", () => {
  if (password.getAttribute("type") == "password") {
    password.setAttribute("type", "text");
  } else {
    password.setAttribute("type", "password");
  }
});
btn2.addEventListener("click", () => {
  if (passwordconfirmation.getAttribute("type") == "password") {
    passwordconfirmation.setAttribute("type", "text");
  } else {
    passwordconfirmation.setAttribute("type", "password");
  }
});
