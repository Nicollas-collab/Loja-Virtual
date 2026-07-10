import { produtos } from "./produtos.js";

const cards = document.querySelector("#cards");
const linksSecao = document.querySelectorAll(".lnk-secao");

function mostrarProdutos(lista) {

    cards.innerHTML = "";

    lista.forEach(produto => {

        cards.innerHTML += `
            <div class="card">

                <img
                    src="${produto.caminho_da_imagem}"
                    alt="${produto.descricao_produto}"
                    class="img_card">

                <h2 class="titulo_card">
                    ${produto.descricao_produto}
                </h2>

                <h3 class="valor_card">
                    R$ ${produto.valor_unitario.toFixed(2).replace(".", ",")}
                </h3>

                <button
                    class="btn_card"
                    data-id="${produto.id_produto}">
                    Adicionar
                </button>

            </div>
        `;
    });

}

// Carrega todos ao abrir
mostrarProdutos(produtos);

// Clique nas categorias
linksSecao.forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        linksSecao.forEach(item => item.classList.remove("ativo"));

        this.classList.add("ativo");

        const secao = this.dataset.secao;

        if(secao === "Todos"){
            mostrarProdutos(produtos);
            return;
        }

        const filtrados = produtos.filter(produto =>
            produto.nome_secao === secao
        );

        mostrarProdutos(filtrados);

    });

});