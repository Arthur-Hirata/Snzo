function mostarSenha(){
    const senha = document.getElementById("senha")
    const olho=document.getElementById("olho") 
    if (senha.type === "password"){
        senha.type = "text"
        
        olho.classList="fas fa-eye-slash"
    } else{
        senha.type = "password"
        olho.classList = "fas fa-eye"
    }

}
function mostrarConfimação(){
    const confimar = document.getElementById("confirmar")
    const olho=document.getElementById("olho2") 
    if (confimar.type === "password"){
        confimar.type = "text"
        
        olho.classList="fas fa-eye-slash"
    } else{
        confimar.type = "password"
        olho.classList = "fas fa-eye"
    }
}
function criarConta(){
    event.preventDefault()
    const emailInput= document.getElementById("email")
    const erro = document.getElementById("erro")
    const mail = emailInput.value;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!regexEmail.test(mail)){
        erro.style.display= "block"
        emailInput.value = ""
        return false
    }else{
        erro.style.display = "none"
    }

    const password = document.getElementById("senha")
    const erro2 = document.getElementById("erro2")
    const senha = password.value;

    if (senha.length < 8 ){
        erro2.style.display = "block"
        password.value = ""
        return false
    } else {
        erro2.style.display = "none"
    }

    const confirm = document.getElementById("confirmar")
    const erro3 = document.getElementById("erro3")
    const confirmar = confirm.value;

    if (confirmar != senha) {
        erro3.style.display= "block";
        confirm.value = ""
        return false
    } else {
        erro3.style.display = "none"
    }
    window.location.href = "Snzo.html"
}