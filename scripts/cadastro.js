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
