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
const displayTotal = document.getElementById("displayTotal")
let ValorCompras = 0;
const comprar = document.getElementById("btn-finalizar")








function compras(){
    document.querySelectorAll(".adc").forEach((btn) =>{
        btn.addEventListener("click", () =>{
            var item = btn.closest(".pc")
            const desc = item.querySelector(".desc").innerText.trim();
            var price = item.querySelector(".preco-desconto").innerText;
            const preçoLimpo =parseFloat(price.replace("R$", "").replace(/\./g, "").replace(",", ".").trim()); // Apenas essa ultima parte eu precisei da IA
            
            


            const jaExiste = Array.from(listaCompras.querySelectorAll("span"))
                .some(span => span.textContent.trim() === (desc))
            
            if (!jaExiste){
                const li = document.createElement("li")
                const spanTexto = document.createElement("span")
                const remover = document.createElement("button")
                const preçoFinal = document.createElement("li")



                li.style.display = "flex"
                li.style.alignItems = "center"
                li.style.justifyContent = "space-between"
                remover.className = "btn-remover"
                remover.style.color = "white"
                remover.textContent = "X"
                spanTexto.textContent = desc;
                // TAVA DANDO ERRO PQ O CLIENT LIA COMO SE FOSSE PRODUTOX POR CAUSA DO BOTÃO,
                // AGORA TEM UM SPAN NO MEIO, ficando <span>texto</span> <button>
                remover.style.marginLeft = "160px"
                remover.style.marginTop = "14px"
                li.appendChild(spanTexto)
                li.appendChild(remover)
                
                ValorCompras += preçoLimpo
                displayTotal.textContent = `Total: ${ValorCompras.toLocaleString('pt-br',{style: 'currency', currency : 'BRL'})}`
                // USEI IA AQUI TAMBEM



                remover.addEventListener("click", function(){
                    listaCompras.removeChild(li)
                    ValorCompras -= preçoLimpo
                    
                    displayTotal.textContent = `Total: ${ValorCompras.toLocaleString('pt-br',{style: 'currency', currency : 'BRL'})}`
                })
                preçoFinal.textContent = ValorCompras
                preçoFinal.style.color = "black"
                
                preçoFinal.style.textAlign = "center"
                



                listaCompras.appendChild(li)
                listaCompras.appendChild(displayTotal)
                listaCompras.appendChild(comprar)
            }
            
            if (ValorCompras !== 0){
                displayTotal.style.borderTop= "1px solid gray"
            }
            


            
        })
    })
}
function finalizarCompra(){
    if (ValorCompras === 0){
        alert("Você não possui itens no carrinho ainda")
    }
     
}   



function adicionarCarrinho(){
    
    document.querySelectorAll(".carrin").forEach((btn) =>{
        btn.addEventListener("click", ()=>{
            const product = btn.closest(".itens")
            const sobre = product.querySelector(".sub").innerText.trim();
            const price = product.querySelector(".price").innerText.trim();
            const preçoLimpo = parseFloat(price.replace("R$", "").replace(/\./g, "").replace(",", ".").trim())

            const jaExiste = Array.from(listaCompras.querySelectorAll("span"))
                .some(span => span.textContent.trim() === (sobre))


            if (!jaExiste){
                const li = document.createElement("li")
                const spanTexto = document.createElement("span")
                const remover = document.createElement("button")
                const itensLi = document.querySelectorAll('#lista-caixa > li')
                
                
                
                li.style.display = "flex"
                li.style.alignItems = "center"
                li.style.justifyContent = "space-between"
                remover.className = "btn-remover"
                






                remover.textContent = "X"
                spanTexto.marginLeft = "-10px"
                spanTexto.style.textAlign = "center"
                spanTexto.textContent = sobre;
                remover.style.marginLeft = "160px"
                remover.style.marginTop = "14px"
                remover.style.color = "white"
                
                ValorCompras += preçoLimpo
                
                displayTotal.textContent = `Total: ${ValorCompras.toLocaleString('pt-br',{style: 'currency', currency : 'BRL'})}`





                li.appendChild(spanTexto)
                li.appendChild(remover)
                remover.addEventListener("click", function(){
                    listaCompras.removeChild(li)
                    ValorCompras -= preçoLimpo
                    displayTotal.textContent = `Total: ${ValorCompras.toLocaleString('pt-br',{style: 'currency', currency : 'BRL'})}`
                })
                

            
                listaCompras.appendChild(li)
                listaCompras.appendChild(displayTotal)
                listaCompras.appendChild(comprar)
                mostrarCarrinho();
            }
            if (ValorCompras !== 0){
                displayTotal.style.borderTop = "1px solid gray"
            }
            
        })
    })
}
function mostrarCarrinho(){
    
    listaCompras.style.display = "block"
    listaFavoritos.style.display = "none"
}





var listaFavoritos = document.getElementById("lista")
var limparListaFavoritos = document.getElementById("limpar")



function favoritar(){
    document.querySelectorAll(".favorito").forEach ((btn) =>{
        btn.addEventListener("click", ()=>{
            const produto = btn.closest(".pc");
            const desc = produto.querySelector(".desc").innerText;
            const btnfav = produto.querySelector("#favorito")
            btnfav.className = ("fa-solid fa-heart")




            const jaExiste = Array.from(listaFavoritos.querySelectorAll("span"))
                .some(span => span.textContent.trim() === (desc))
            
            if (!jaExiste){
                const li = document.createElement("li")
                const spanTexto  = document.createElement("span")
                
                const remover = document.createElement("button")
                li.style.display = "flex"
                li.style.alignItems = "center"
                li.style.justifyContent = "space-between"
                remover.classList = "btn-remover"

                remover.textContent = "X"
                remover.style.color = "white"
                remover.style.marginLeft = "160px"
                remover.style.marginTop= "12px"
                spanTexto.textContent = desc;
                spanTexto.style.marginTop = "10xp"
                li.style.marginTop = "-5px"
                spanTexto.style.textAlign= "center"
                remover.addEventListener("click", function(){
                    listaFavoritos.removeChild(li)
                    btnfav.className = "fa-regular fa-heart"
                })





                li.appendChild(spanTexto)
                li.appendChild(remover)
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
            const cora = produtc.querySelector("#cora");
            cora.className = "fa-solid fa-heart"

            const jaExiste = Array.from(listaFavoritos.querySelectorAll("span"))
                .some(span => span.textContent.trim() === (abt))

            if (!jaExiste){
                const li = document.createElement("li")
                const spanTexto = document.createElement("span")
                const remover = document.createElement("button")

                li.style.display = "flex"
                li.style.alignItems = "center"
                li.style.justifyContent = "space-between"
                remover.classList = "btn-remover"

                remover.textContent = "X"
                remover.style.color = "white"
                remover.style.marginLeft = "160px"
                remover.style.marginTop= "12px"
                spanTexto.textContent = abt;
                spanTexto.style.marginTop = "-10xp"
                spanTexto.style.textAlign= "center"

                li.appendChild(spanTexto)
                li.appendChild(remover)

                remover.addEventListener("click", function(){
                    listaFavoritos.removeChild(li)
                    cora.className = "fa-regular fa-heart"
                })



                
                listaFavoritos.prepend(li)
                
            }
        })
    })
}


function mostrarfavoritos(){
    listaFavoritos.style.display = "block";
    listaCompras.style.display = "none";
    
}
function limparLista(){
    listaFavoritos.replaceChildren("")
    listaFavoritos.replaceChildren(limparListaFavoritos)

    const coraçoes = document.querySelectorAll("#cora")
    coraçoes.forEach( cora=>{
        cora.className = "fa-regular fa-heart"
    })
    const coraçoes2 = document.querySelectorAll("#favorito")
    coraçoes2.forEach(btnfav =>{
        btnfav.className = "fa-regular fa-heart"
    })
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



