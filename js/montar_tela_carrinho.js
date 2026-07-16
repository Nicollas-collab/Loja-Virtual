import { listItens, removeItem, alterarQuantidade } from "./carrinho.js";

const montaTelaCarrinho = () => {
    const sectionItensCarrinho = document.querySelector('#itens-carrinho')

    sectionItensCarrinho.innerHTML= ''

    listItens().forEach((elem,i)=>{
    const sectionItem = document.createElement ('section')
    sectionItem.setAttribute('class', 'item')
    sectionItem.innerHTML = `<img src='${elem.caminho_da_imagem}' alt=${elem.descricao_produto}/> 
    <p class='descricao'>${elem.descricao_produto}</p> 
    <p class='vlr-unitario'>${elem.valor_unitario}</p> 
    <input type="number" min="1" step="1" name='quant${i}' id='quant${i}' class="input-item" value="${elem.quantidade}">
     <p class="tot-item">${(elem.valor_unitario * elem.quantidade).toFixed(2)}</p>
     <img src="../imagens/icones/remover.png" alt="" class="img-remover">`
    
     const inputQuantidade = sectionItem.querySelector(".input-item");

     inputQuantidade.addEventListener("input", (e) => {
     
         let quantidade = parseInt(e.target.value);
     
         if (isNaN(quantidade) || quantidade < 1) {
             quantidade = 1;
             e.target.value = 1;
         }
     
         alterarQuantidade(i, quantidade);
     
         montaTelaCarrinho();
     
     });

        const imgRemover = document.createElement('img')
        imgRemover.setAttribute('src', 'imagens/icones/imagem de remover.png')
        imgRemover.setAttribute('alt', 'Remover')
        imgRemover.setAttribute('class', 'img-remover')

        imgRemover.addEventListener('click',()=>{
            if(confirm(`Deseja remover ${elem.descricao_produto} da sua lista`)){
                removerItemCarrinho(i)
            }
            

        })

    sectionItem.appendChild(imgRemover)

    sectionItensCarrinho.appendChild(sectionItem)
});
}
const removerItemCarrinho = (pos) =>{
    removeItem(pos)

    montaTelaCarrinho()
}

montaTelaCarrinho()