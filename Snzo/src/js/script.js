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
      ScrollReveal().reveal('.placa', {
        origin : 'left',
        duration : 2000,
        distance : '20%'

     })
     ScrollReveal().reveal('.comentarios', {
        origin : 'left',
        duration : 2000,
        distance : '20%'

     })
     ScrollReveal().reveal('.merchan', {
        origin : 'rigth',
        duration : 2000,
        distance : '30%'

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
function adicionarCarrinho(){
    document.querySelectorAll(".carrin").forEach((btn) =>{
        btn.addEventListener("click", ()=>{
            const product = btn.closest(".itens")
            const sobre = product.querySelector(".sub").innerText;
            const jaExiste = Array.from(listaCompras.children)
                .some(li => li.textContent === (sobre))

            if (!jaExiste){
                const li = document.createElement("li")
                li.textContent = sobre;
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
function adicionarFavoritos(){
    document.querySelectorAll(".like").forEach((btn)=>{
        btn.addEventListener("click" , ()=>{
            const produtc =btn.closest(".itens");
            const abt = produtc.querySelector(".sub").innerText;

            const jaExiste = Array.from(listaFavoritos.children)
                .some(li => li.textContent === (abt))

            if (!jaExiste){
                const li = document.createElement("li")
                li.textContent = abt;
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
var placa1 = document.getElementById("placa1")
var placa2 = document.getElementById("placa2")
var placa3 = document.getElementById("placa3")
var ssd1 = document.getElementById("arm1")
var ssd2 = document.getElementById("arm2")
var ssd3 = document.getElementById("arm3")
var gab1 = document.getElementById("gab1")
var gab2 = document.getElementById("gab2")
var gab3 = document.getElementById("gab3")









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
    placa1.style.display ="block"
    placa2.style.display ="block"
    placa3.style.display ="block"
    ssd1.style.display ="block"
    ssd2.style.display ="block"
    ssd3.style.display ="block"
    gab1.style.display ="block"
    gab2.style.display ="block"
    gab3.style.display ="block"



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
    cpu1.style.display =" none"
    cpu2.style.display =" none"
    cpu3.style.display =" none"
    placa1.style.display ="none"
    placa2.style.display ="none"
    placa3.style.display ="none"
    ssd1.style.display ="none"
    ssd2.style.display ="none"
    ssd3.style.display ="none"
    gab1.style.display ="none"
    gab2.style.display ="none"
    gab3.style.display ="none"
 
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
    placa1.style.display ="none"
    placa2.style.display ="none"
    placa3.style.display ="none"
    ssd1.style.display ="none"
    ssd2.style.display ="none"
    ssd3.style.display ="none"
    gab1.style.display ="none"
    gab2.style.display ="none"
    gab3.style.display ="none"

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
    placa1.style.display ="none"
    placa2.style.display ="none"
    placa3.style.display ="none"
    ssd1.style.display ="none"
    ssd2.style.display ="none"
    ssd3.style.display ="none"
    gab1.style.display ="none"
    gab2.style.display ="none"
    gab3.style.display ="none"

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
    placa1.style.display ="block"
    placa2.style.display ="block"
    placa3.style.display ="block"
    ssd1.style.display ="none"
    ssd2.style.display ="none"
    ssd3.style.display ="none"
    gab1.style.display ="none"
    gab2.style.display ="none"
    gab3.style.display ="none"

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
    placa1.style.display ="none"
    placa2.style.display ="none"
    placa3.style.display ="none"
    ssd1.style.display ="block"
    ssd2.style.display ="block"
    ssd3.style.display ="block"
    gab1.style.display ="none"
    gab2.style.display ="none"
    gab3.style.display ="none"

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
    placa1.style.display ="none"
    placa2.style.display ="none"
    placa3.style.display ="none"
    ssd1.style.display ="none"
    ssd2.style.display ="none"
    ssd3.style.display ="none"
    gab1.style.display ="block"
    gab2.style.display ="block"
    gab3.style.display ="block"

})


const input = document.getElementById("input-pesquisa")
input.addEventListener("keyup", function(){
    const filtro = input.valeu.toLowerCase()
    const itens = document.querySelectorAll(".test .itens .sub")
    itens.forEach(item =>{
        item.style.display = item.textContent
            .toLowerCase()
            .includes(filtro) ? "" : "none";
    })
})



