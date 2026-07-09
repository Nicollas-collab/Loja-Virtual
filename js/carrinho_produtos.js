import { produtos } from "./produtos.js";

const section_cards = document.querySelector('#cards')

const listaProdutos = () =>{
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

listarProduto()

const listarSecoes = () => {
    const secoesFiltrada = new Map()

    produtos.forEach((elem,i) => {
        secoesFiltrada.set(elem.id_secao, elem) 
    })

    const secoesMenu = Array.from(secoesFiltrada.values())

    return secoesMenu

}

const montarSecoes = () => {
    const ulMenu = document.querySelector('#menu-secoes')

    listarSecoes().forEach((elem,i) => {
        const aSecao = document.createElement('li')
        aSecao.setAttribute('class', 'lnk-secao')
        aSecao.innerHTML = elem.nome_secao

        aSecao.addEventListener('click',() => {

        console.log(elem.id_secao)

    })

    liSecao.appendChild(aSecao)

    ulMenu.appendChild(liSecao)
    })


}

montarSecoes