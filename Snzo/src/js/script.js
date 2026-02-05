$(document).ready(function(){
     ScrollReveal().reveal('.pc', {
        origin: 'left',
        duration: 1500,
        distance: '20%'
    });
     ScrollReveal().reveal('.itens', {
        origin : 'left',
        duration : 2000,
        distance : '20%'

     })
      ScrollReveal().reveal('.itens', {
        origin : 'left',
        duration : 2000,
        distance : '20%'

     })
})

var listaCompras = document.getElementById("lista-caixa")

function compras(){
    document.querySelectorAll(".adc").forEach((btn) =>{
        btn.addEventListener("click", () =>{
            const item = btn.closest(".pc")
            const desc = item.querySelector(".desc").innerText;
           
            
            
            const jaExiste = Array.from(listaCompras.children)
                .some(li => li.textContent === (desc))
            
            if (!jaExiste){
                const li = document.createElement("li")
                li.textContent = desc;
                listaCompras.appendChild(li)

            
            }
        })
    })
}
function mostrarCarrinho(){
    listaCompras.style.display = "block";
}

var listaFavoritos = document.getElementById("lista")

function favoritar(){
    document.querySelectorAll(".favorito").forEach ((btn) =>{
        btn.addEventListener("click", ()=>{
            const produto = btn.closest(".pc");
            const desc = produto.querySelector(".desc").innerText;
            
            const jaExiste = Array.from(listaFavoritos.children)
                .some(li => li.textContent === (desc))
            
            if (!jaExiste){
                const li = document.createElement("li")
                li.textContent = desc;
                listaFavoritos.appendChild(li)

            }
        })
    })
}
function mostrarfavoritos(){
    listaFavoritos.style.display = "block";
}
var botaoRam= document.getElementById("ram")
var botaoTudo = document.getElementById('tudo')
var botaoCpu=document.getElementById('cpu')
var botaoGpu = document.getElementById('gpu')
var botaoArmazenamento = document.getElementById('ssd')
var botaoGabinete = document.getElementById('gabinetes')
var botaoplacaMae = document.getElementById('mthboard')

var gtx1650 = document.getElementById("gtx1650")
var gtx1660 = document.getElementById("gtx1660")
var rtx2080 = document.getElementById("rtx2080")
var ram1 = document.getElementById("ram1")
var ram2 =document.getElementById("ram2")
var ram3 = document.getElementById("ram3")
var cpu1 = document.getElementById("cpu1")
var cpu2 = document.getElementById("cpu2")
var cpu3 = document.getElementById("cpu3")



botaoTudo.addEventListener("click", function(){
    this.className = "clicado"
    botaoRam.classList = 'nao-clicado'
    botaoGpu.classList = 'nao-clicado'
    botaoCpu.className = "nao-clicado"
    botaoGabinete.classList = 'nao-clicado'
    botaoArmazenamento.classList = 'nao-clicado'
    botaoplacaMae.classList = 'nao-clicado'
    gtx1650.style.display = "block"
    gtx1660.style.display= "block"
    rtx2080.style.display = "block"
    ram1.style.display = "block"
    ram2.style.display ="block"
    ram3.style.display = "block"


})
botaoRam.addEventListener("click", function(){
    this.className = "clicado"
    botaoTudo.classList = 'nao-clicado'
    botaoGpu.classList = 'nao-clicado'
    botaoCpu.className = "nao-clicado"
    botaoGabinete.classList = 'nao-clicado'
    botaoArmazenamento.classList = 'nao-clicado'
    botaoplacaMae.classList = 'nao-clicado'
    gtx1650.style.display = "none"
    gtx1660.style.display= "none"
    rtx2080.style.display = "none"
    ram1.style.display = "block"
    ram2.style.display ="block"
    ram3.style.display = "block"
    cpu1.style.display =" none"
    cpu2.style.display =" none"
    cpu3.style.display =" none"
    cpu1.style.display =" block"
    cpu2.style.display =" block"
    cpu3.style.display =" block"
 
})
botaoCpu.addEventListener("click", function(){
    this.className = "clicado"
    botaoRam.classList = 'nao-clicado'
    botaoGpu.classList = 'nao-clicado'
    botaoTudo.className = "nao-clicado"
    botaoGabinete.classList = 'nao-clicado'
    botaoArmazenamento.classList = 'nao-clicado'
    botaoplacaMae.classList = 'nao-clicado'
    gtx1650.style.display = "none"
    gtx1660.style.display= "none"
    rtx2080.style.display = "none"
    ram1.style.display = "none"
    ram2.style.display ="none"
    ram3.style.display = "none"
    cpu1.style.display =" block"
    cpu2.style.display =" block"
    cpu3.style.display =" block"

})
botaoGpu.addEventListener("click", function(){
    this.className = "clicado"
    botaoRam.classList = 'nao-clicado'
    botaoTudo.classList = 'nao-clicado'
    botaoCpu.className = "nao-clicado"
    botaoGabinete.classList = 'nao-clicado'
    botaoArmazenamento.classList = 'nao-clicado'
    botaoplacaMae.classList = 'nao-clicado'
    gtx1650.style.display = "block"
    gtx1660.style.display= "block"
    rtx2080.style.display = "block"
    ram1.style.display= "none"
    ram2.style.display ="none"
    ram3.style.display = "none"
    cpu1.style.display =" none"
    cpu2.style.display =" none"
    cpu3.style.display =" none"

})
botaoplacaMae.addEventListener("click", function(){
    this.className = "clicado"
    botaoRam.classList = 'nao-clicado'
    botaoGpu.classList = 'nao-clicado'
    botaoCpu.className = "nao-clicado"
    botaoGabinete.classList = 'nao-clicado'
    botaoArmazenamento.classList = 'nao-clicado'
    botaoTudo.classList = 'nao-clicado'
    gtx1650.style.display = "none"
    gtx1660.style.display= "none"
    rtx2080.style.display = "none"
    ram1.style.display = "none"
    ram2.style.display ="none"
    ram3.style.display = "none"
    cpu1.style.display =" none"
    cpu2.style.display =" none"
    cpu3.style.display =" none"

})
botaoArmazenamento.addEventListener("click", function(){
    this.className = "clicado"
    botaoRam.classList = 'nao-clicado'
    botaoGpu.classList = 'nao-clicado'
    botaoCpu.className = "nao-clicado"
    botaoGabinete.classList = 'nao-clicado'
    botaoTudo.classList = 'nao-clicado'
    botaoplacaMae.classList = 'nao-clicado'
    gtx1650.style.display = "none"
    gtx1660.style.display= "none"
    rtx2080.style.display = "none"
    ram1.style.display = "none"
    ram2.style.display ="none"
    ram3.style.display = "none"
    cpu1.style.display =" none"
    cpu2.style.display =" none"
    cpu3.style.display =" none"

})
botaoGabinete.addEventListener("click", function(){
    this.className = "clicado"
    botaoRam.classList = 'nao-clicado'
    botaoGpu.classList = 'nao-clicado'
    botaoCpu.className = "nao-clicado"
    botaoTudo.classList = 'nao-clicado'
    botaoArmazenamento.classList = 'nao-clicado'
    botaoplacaMae.classList = 'nao-clicado'
    gtx1650.style.display = "none"
    gtx1660.style.display= "none"
    rtx2080.style.display = "none"
    ram1.style.display = "none"
    ram2.style.display ="none"
    ram3.style.display = "none"
    cpu1.style.display =" none"
    cpu2.style.display =" none"
    cpu3.style.display =" none"

})



