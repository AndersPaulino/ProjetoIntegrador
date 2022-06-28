var email = document.getElementById('email');
var senha = document.getElementById('password');
let btn = document.querySelector('.fa-eye');



email.addEventListener('focus',()=>{
    email.style.borderColor = "#1DB9C3";
})
email.addEventListener('blur',()=>{
    email.style.borderColor = "#ccc";
})
senha.addEventListener('focus',()=>{
    senha.style.borderColor = "#1DB9C3";
})
senha.addEventListener('blur',()=>{
    senha.style.borderColor = "#ccc";
})
btn.addEventListener('click',()=>{
    if(senha.getAttribute('type') == 'password'){
        senha.setAttribute('type', 'text')
    }else{
        senha.setAttribute('type', 'password')
    }
})

function logar(){
    if(senha.value == "admin" && email.value == "admin"){
        window.location.href="./PCadastro.html";
    }else{
        alert("Usuário ou Senha Incorretos!!");
    }
}