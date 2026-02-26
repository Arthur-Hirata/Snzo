$(document).ready(function(){
     ScrollReveal().reveal('.pc', {
        origin: 'left',
        duration: 1500,
        distance: '20%'
    });
     // tirei o scroll reveal dos '.itens' pq não tava funcionando corretamente
     /*ScrollReveal().reveal('.itens', {
        origin: 'left',
        duration: 1500,
        distance: '20%'
     }) */
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
            let preçoLimpo =parseFloat(price.replace("R$", "").replace(/\./g, "").replace(",", ".").trim()); // Apenas essa ultima parte eu precisei da IA
            
            const check = document.createElement("i")
            check.className = "fa-solid fa-circle-check"
            check.style.color = "green"
            check.style.fontSize = "20px"
            check.style.marginTop = "3px"
            btn.textContent = ""
            btn.appendChild(check)
            
            const msgDefault = "Adicionar ao carrinho."
            const car = document.createElement("i")
            car.className = "fa-solid fa-basket-shopping"
            car.style.color = "yellow"

            const jaExiste = Array.from(listaCompras.querySelectorAll("span"))
                .some(span => span.textContent.trim() === (desc))
            
            if (!jaExiste){
                const li = document.createElement("li")
                const spanTexto = document.createElement("span")
                const remover = document.createElement("button")
                const preçoFinal = document.createElement("li")
                const btnadc = document.createElement("button")
                
                btnadc.className = "btnadc"
                btnadc.textContent = "+"
                
                const quantidade = document.createElement("p")
                let i = 1;
                quantidade.textContent = i + "x";
                quantidade.className = "quantidade"

                const preçoUnitario = preçoLimpo;

                btnadc.addEventListener("click", function(){
                    i++
                    quantidade.textContent = i + "x"
                    ValorCompras = preçoUnitario * i;
                    displayTotal.textContent = `Total: ${ValorCompras.toLocaleString('pt-br',{style: 'currency', currency : 'BRL'})}`
                })
                
                li.style.display = "flex"
                li.style.alignItems = "center"
                li.style.justifyContent = "space-between"
                remover.className = "btn-remover"
                remover.style.color = "white"
                remover.textContent = "X"
                spanTexto.textContent = desc;
                // TAVA DANDO ERRO PQ O CLIENT LIA COMO SE FOSSE PRODUTOX POR CAUSA DO BOTÃO,
                // AGORA TEM UM SPAN NO MEIO, ficando <span>texto</span> <button>
                remover.style.marginLeft = "180px"
                remover.style.marginTop = "14px"
                
                li.appendChild(spanTexto)
                li.appendChild(remover)
                li.appendChild(btnadc)
                li.appendChild(quantidade)
               
                ValorCompras += preçoLimpo
                displayTotal.textContent = `Total: ${ValorCompras.toLocaleString('pt-br',{style: 'currency', currency : 'BRL'})}`
                // USEI IA AQUI TAMBEM
                
                remover.addEventListener("click", function(){
                    if (i > 1 ){
                        i--
                        quantidade.textContent = i + "x"
                        ValorCompras = ValorCompras - preçoUnitario;
                        displayTotal.textContent = `Total: ${ValorCompras.toLocaleString('pt-br',{style: 'currency', currency : 'BRL'})}`
                    }else {
                        listaCompras.removeChild(li)
                        ValorCompras = ValorCompras - preçoUnitario;
                        btn.textContent = msgDefault;
                        btn.appendChild(car)
                        displayTotal.textContent = `Total: ${ValorCompras.toLocaleString('pt-br',{style: 'currency', currency : 'BRL'})}`
                    }
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
const alerta = document.getElementById("customAlert")
function finalizarCompra(){
    if (ValorCompras === 0){
        alerta.style.display = "block"
    }
     
} 
function fecharAlert(){
    alerta.style.display = "none"
}

function adicionarCarrinho(){
    
    document.querySelectorAll(".carrin").forEach((btn) =>{
        btn.addEventListener("click", ()=>{
            listaCompras.style.display = "block"
            const product = btn.closest(".itens")
            const sobre = product.querySelector(".sub").innerText.trim();
            const price = product.querySelector(".price").innerText.trim();
            const preçoLimpo = parseFloat(price.replace("R$", "").replace(/\./g, "").replace(",", ".").trim())
            const check = document.createElement("i")
            check.className = "fa-solid fa-circle-check"
            check.style.color = "green"
            check.style.fontSize = "20px"
            check.style.marginTop = "3px"
            btn.textContent = ""
            btn.appendChild(check)
            
            const msgDefault = "Adicionar ao carrinho."
            const car = document.createElement("i")
            car.className = "fa-solid fa-basket-shopping"
            car.style.color = "yellow"

            const jaExiste = Array.from(listaCompras.querySelectorAll("span"))
                .some(span => span.textContent.trim() === (sobre))


            if (!jaExiste){
                const li = document.createElement("li")
                const spanTexto = document.createElement("span")
                const remover = document.createElement("button")
                const itensLi = document.querySelectorAll('#lista-caixa > li')
                let btnadc = document.createElement("button")
                
                btnadc.className = "btnadc"
                btnadc.textContent = "+"
                
                let quantidade = document.createElement("p")
                let i = 1;
                quantidade.textContent = i + "x";
                quantidade.className = "quantidade"

                const preçoUnitario = preçoLimpo;

                btnadc.addEventListener("click", function(){
                    i++
                    quantidade.textContent = i + "x"
                    ValorCompras = preçoUnitario * i;
                    displayTotal.textContent = `Total: ${ValorCompras.toLocaleString('pt-br',{style: 'currency', currency : 'BRL'})}`
                })

                li.style.display = "flex"
                li.style.alignItems = "center"
                li.style.justifyContent = "space-between"
                remover.className = "btn-remover"
            
                remover.textContent = "X"
                spanTexto.marginLeft = "-10px"
                spanTexto.style.textAlign = "center"
                spanTexto.textContent = sobre;
                remover.style.marginLeft = "180px"
                remover.style.marginTop = "14px"
                remover.style.color = "white"
                
                ValorCompras += preçoLimpo
                
                displayTotal.textContent = `Total: ${ValorCompras.toLocaleString('pt-br',{style: 'currency', currency : 'BRL'})}`

                li.appendChild(spanTexto)
                li.appendChild(remover)
                li.appendChild(btnadc)
                li.appendChild(quantidade)
                remover.addEventListener("click", function(){
                    if (quantidade > 1){
                        i--
                        quantidade = i + "x"
                        ValorCompras -= preçoUnitario;
                        displayTotal.textContent = `Total: ${ValorCompras.toLocaleString('pt-br',{style: 'currency', currency : 'BRL'})}`
                    } else {
                        listaCompras.removeChild(li)
                        ValorCompras -= preçoLimpo
                        displayTotal.textContent = `Total: ${ValorCompras.toLocaleString('pt-br',{style: 'currency', currency : 'BRL'})}`
                        btn.textContent = msgDefault;
                        btn.appendChild(car)
                    }
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
    if(listaCompras.style.display === "none"){
        listaCompras.style.display = "block"
        listaFavoritos.style.display = "none"
    } else{
        listaCompras.style.display = "none"
    }
    
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
                li.style.marginTop = "5px"
                spanTexto.style.textAlign= "center"
                remover.addEventListener("click", function(){
                    listaFavoritos.removeChild(li)
                    btnfav.className = "fa-regular fa-heart"
                })

                li.appendChild(spanTexto)
                li.appendChild(remover)
                listaFavoritos.prepend(li)
                
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
    if (listaFavoritos.style.display === "none"){
        listaFavoritos.style.display = "block";
        listaCompras.style.display = "none";
    } else {
        listaFavoritos.style.display = "none"
    } 
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

botaoTudo.addEventListener("click", function (){
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

function buscarProduto(){
    const inputpesquisa = document.getElementById("input-pesquisa").value.toLowerCase();
    let itens = document.getElementsByClassName('itens')

    for (let a = 0; a <itens.length; a++ ){
        let subTexto = itens[a].querySelector(".sub")
    
        if (subTexto){
            let conteudo = subTexto.textContent || subTexto.innerText;
            
            if (conteudo.toLowerCase().indexOf(inputpesquisa)> -1 ){
                itens[a].style.display = ""
            } else {
                itens[a].style.display = "none"
                const itemNaoEncontrado = document.getElementById("item-nao-encontrado")
                
                itemNaoEncontrado.style.display = "block"

                
            }
        }
    }
    
}
document.getElementById("apagar").addEventListener("click", function(){
    const input = document.getElementById("input-pesquisa")
    input.value = ""
    buscarProduto();
})
function mostrarTudo(){
    let itens = document.querySelectorAll(".itens")
    itens.forEach(item =>{
        item.style.display = "block"
    })
}
function produtosPromocao(){
    let itens = document.querySelectorAll(".itens")
    itens.forEach(item =>{
        let estaPromocao = item.querySelector(".preco-org") !== null;
        if (estaPromocao){
            item.style.display = "block"
        } else{
            item.style.display = "none"
        }
    })
}
function produtosMaisComprados(){
    let itens = document.querySelectorAll(".itens")
    itens.forEach(item =>{
        let estaPromocao = item.querySelector(".maisComprados") !== null;
        if (estaPromocao){
            item.style.display = "block"
        } else{
            item.style.display = "none"
        }
    })
}
function custoBeneficio(){
let itens = document.querySelectorAll(".itens")
    itens.forEach(item =>{
        let estaPromocao = item.querySelector(".custoBenficio") !== null;
        if (estaPromocao){
            item.style.display = "block"
        } else{
            item.style.display = "none"
        }
    })
}
function menorPreco(){
    let itens = document.querySelectorAll(".itens")
    for (let p = 0; p <itens.length ; p++){
        let preco= itens[p].querySelector(".price").textContent
        let numberPrice = parseFloat(preco.replace(",", ".").trim())
        if (numberPrice < 1000){
            itens[p].style.display = "block"
        } else {
            itens[p].style.display = "none"
        }
    }
}