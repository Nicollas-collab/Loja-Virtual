import { listItens, removeItem, alterarQuantidade } from "./carrinho.js";

const calcularTotal = () => {

    let totalProdutos = 0;

    listItens().forEach(item => {
        totalProdutos += item.valor_unitario * item.quantidade;
    });

    document.querySelector("#totalProdutos").innerHTML =
        "R$ " + totalProdutos.toFixed(2).replace(".", ",");

    const textoFrete =
        document.querySelector("#valorFrete").innerHTML;

    const frete = parseFloat(
        textoFrete
            .replace("R$", "")
            .replace(".", ".")
            .replace(",", ".")
            .trim()
    ) || 0;

    const total = totalProdutos + frete;

    document.querySelector("#valorTotal").innerHTML =
        "R$ " + total.toFixed(2).replace(".", ",");

}

const montaTelaCarrinho = () => {
    const sectionItensCarrinho = document.querySelector('#itens-carrinho')

    sectionItensCarrinho.innerHTML= ''

    listItens().forEach((elem,i)=>{
    const sectionItem = document.createElement ('section')
    sectionItem.setAttribute('class', 'item')
    sectionItem.innerHTML = `<img src='${elem.caminho_da_imagem}' alt=${elem.descricao_produto}/> 
    <p class='descricao'>${elem.descricao_produto}</p> 
    <p class='vlr-unitario'>${elem.valor_unitario.toFixed(2)}</p> 
    <input type="number" min="1" step="1" name='quant${i}' id='quant${i}' class="input-item" value="${elem.quantidade}">
     <p class="tot-item">${(elem.valor_unitario * elem.quantidade.toFixed(2)).toFixed(2)}</p>
     <img src="imagens/icones/imagem de remover.png" alt="" class="img-remover">`
    
     const inputQuantidade = sectionItem.querySelector(".input-item");

     inputQuantidade.addEventListener("input", (e) => {
     
        let quantidade = parseInt(e.target.value);

    if (quantidade < 1 || !quantidade) {
    quantidade = 1;
    }
     
         alterarQuantidade(i, quantidade);
     
         montaTelaCarrinho();
     
     });

        const imgRemover = sectionItem.querySelector(".img-remover");

        imgRemover.addEventListener('click',()=>{
            if(confirm(`Deseja remover ${elem.descricao_produto} da sua lista`)){
                removerItemCarrinho(i)
            }
            
        })

    sectionItensCarrinho.appendChild(sectionItem)
});
}
const removerItemCarrinho = (pos) =>{
    removeItem(pos)

    montaTelaCarrinho()
}

montaTelaCarrinho()

calcularTotal();