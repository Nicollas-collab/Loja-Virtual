//criando o array de itens do carrinho
const itensCarrinho = JSON.parse(localStorage.getItem('ItensSessao')) || []

//função para adicionar o item no array
const addItem = (objItem)=>{
    itensCarrinho.push(objItem)

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






























































































