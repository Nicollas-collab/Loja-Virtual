//criando o array de itens do carrinho
const itensCarrinho = JSON.parse(localStorage.getItem('ItensSessao')) || []

//criando ARROW ITEM
const fObItem = (objProduto) => {
    const item = {
        id_produto: objProduto.id_produto,
        descricao_produto:objProduto.descricao_produto,
        caminho_da_imagem: objProduto.caminho_da_imagem,
        valor_unitario: objProduto.valor_unitario,
        quantidade: 1
    }
    return item
}

//pegando o indice do array
console.log("índice do array >>> ",itensCarrinho.findIndex(elem => elem.id_produto == 2))

//função para adicionar o item no array
const addItem = (objItem)=>{
    itensCarrinho.push(fObItem(objItem))

    localStorage.setItem('itensSessao', JSON.stringify(itensCarrinho))

}

//listar itens do carrinho
const listItens = () => {
    //const const itensSelecionados = JSON.stringify(localStorage.getItem('itensSessao')
    const itensSelecionados = JSON.parse(localStorage.getItem('itensSessao')) || []

    return itensSelecionados
}

const removeItem = (pos) =>{
    itensCarrinho.splice(pos,1)

    localStorage.setItem('itensSessao', JSON.stringify(itensCarrinho))
}




export{addItem, listItens, removeItem}






























































































