var email = document.getElementById('email');
var senha = document.getElementById('password');
var senha2 = document.getElementById('confirmPassword');
let btn = document.querySelector('.fa-eye');
let btn2 = document.querySelector('#eye2');  

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
senha2.addEventListener('focus',()=>{
    senha2.style.borderColor = "#1DB9C3";
})
senha2.addEventListener('blur',()=>{
    senha2.style.borderColor = "#ccc";
})
btn.addEventListener('click',()=>{
    if(senha.getAttribute('type') == 'password'){
        senha.setAttribute('type', 'text')
    }else{
        senha.setAttribute('type', 'password')
    }
})
btn2.addEventListener('click',()=>{
    if(senha2.getAttribute('type') == 'password'){
        senha2.setAttribute('type', 'text')
    }else{
        senha2.setAttribute('type', 'password')
    }
})