import { produtos } from "./produtos.js";

const section_cards = document.querySelector('#cards')

const listarProdutos = () =>{
    section_cards.innerHTML = ''

    produtos.forEach((elem,i) =>{
        const divCard = document.createElement('div')
        divCard.setAttribute('class','card')

        const imgProduto = document.createElement('img')
        imgProduto.setAttribute('src',elem.caminho_da_imagem)
        imgProduto.setAttribute('alt', elem.descricao_produto)
        imgProduto.setAttribute('class', 'img_card')

        const h2Titulo = document.createElement('h2')
        h2Titulo.innerHTML = elem.descricao_produto

        const h3Valor = document.createElement('h3')
        h3Valor.setAttribute('class', 'valor_card')
        h3Valor.innerHTML = `R$ ${parseFloat(elem.valor_unitario).toFixed(2).replace
        ('.','.')}`

        const btnCard = document.createElement('button')    
        btnCard.setAttribute('class', 'btn_card')
        btnCard.innerHTML = 'Adicionar'    

            divCard.appendChild(imgProduto)
            divCard.appendChild(h2Titulo)
            divCard.appendChild(h3Valor) 
            divCard.appendChild(btnCard)
            
            section_cards.appendChild(divCard)
    })

}

//filtrando as seções com a coleção map
listarProdutos()

const listarSecoes = () => {
    const secoesFiltrada = new Map()

    produtos.forEach((elem,i) => {
        secoesFiltrada.set(elem.id_secao, elem) 
    })

    const secoesMenu = Array.from(secoesFiltrada.values())

    return secoesMenu

}
//montando os links
const montarSecoes = () => {
    //pegando o elemento do dom
    const ulMenu = document.querySelector('#menu-secoes')
    //Limpando 
    listarSecoes().forEach((elem,i) => {

        const liSecao = document.createElement('li')
        const aSecao = document.createElement('a')
        aSecao.setAttribute('href', '#')
        aSecao.setAttribute('class', 'lnk-secao')
        aSecao.innerHTML = elem.nome_secao

        aSecao.addEventListener('click',() => {

        console.log(elem.id_secao)

    })

    liSecao.appendChild(aSecao)

    ulMenu.appendChild(liSecao)
    })


}

montarSecoes()

const produtosFiltrados = (idSecao) => {
    return produtos.filter(elem => elem.id_secao === idSecao) 
}

const montandoCards = (objProdutos) =>{
    
} 