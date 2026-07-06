let carrinho = [];
let total = 0;

const botoes = document.querySelectorAll(".btn_card");

const lista = document.getElementById("listaProdutos");

const totalProdutos = document.getElementById("totalProdutos");

const valorFrete = document.getElementById("valorFrete");

const valorTotal = document.getElementById("valorTotal");

botoes.forEach(botao => {

    botao.addEventListener("click", () => {

        const card = botao.parentElement;

        const nome = card.querySelector(".tito_card").textContent;

        const preco = parseFloat(
            card.querySelector(".valor_card")
            .textContent
            .replace("R$", "")
            .replace(",", "")
        );

        const produto = carrinho.find(p => p.nome == nome);
const contador = card.querySelector(".contador");

if(produto){

    produto.quantidade++;
    contador.textContent = produto.quantidade;

}else{

    const novoProduto = {
        nome,
        preco,
        quantidade: 1
    };

    carrinho.push(novoProduto);
    contador.textContent = novoProduto.quantidade;

}

atualizarCarrinho();

        window.location.href = "#carrinho";
    });

});

function atualizarCarrinho(){

    lista.innerHTML="";

    total=0;

    carrinho.forEach(produto=>{

        total += produto.preco * produto.quantidade;

        lista.innerHTML += `
            <p>

            ${produto.nome}

            (${produto.quantidade})

            - R$

            ${(produto.preco*produto.quantidade).toFixed(2)}

            </p>
        `;

    });

    totalProdutos.textContent =
        "R$ "+total.toFixed(2);

    valorTotal.textContent =
        "R$ "+total.toFixed(2);

}
const btnFrete =
document.getElementById("btnFrete");

btnFrete.addEventListener("click", ()=>{

    const cep =
    document.getElementById("cep").value;

    let frete = 0;

    if(cep.startsWith("49")){

        frete = 20;

    }else{

        frete = 35;

    }

    valorFrete.textContent =
        "R$ "+frete.toFixed(2);

    valorTotal.textContent =
        "R$ "+(total+frete).toFixed(2);

});

const btnFinalizar =
document.getElementById("btnFinalizar");

btnFinalizar.addEventListener("click",()=>{

    if(carrinho.length==0){

        alert("Seu carrinho está vazio!");

        return;
    }

    alert("Compra realizada com sucesso!");

});