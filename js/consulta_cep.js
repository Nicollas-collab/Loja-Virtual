//PEGANDO O INPUT CEP DO DOM
const inputCep = document.querySelector('#cep')

//CAPTURANDO O EVENTO AO PERDER O FOCO
inputCep.addEventListener('change', (evt)=>{
    //PEGANDO
    const numCep = evt.target.value.replace(/\D/g,'')

    if(numCep != 8){
        alert('CEP INVÁLIDO')
        return
    }

    buscaDadosCep(numCep)
})

//BUSCAR OS DADOS DOS CEP NO VIACEP

const buscaDadosCep = async (cep) => {
    //TENTA BUSCAR OS DADOS NO VIACEP

    try{
    
    //BUSCA OS DADOS NO VIA CEP
    const apiViaCep = `https://viacep.com.br/ws/01001000/json/`
    fetch(apiViaCep)
    .then(resp => resp.json())
    .then(dados => {
        exibeDados(dados)
    })


        const response = await fetch('https://viacep.com.br/ws/01001000/json/')
        /*.then(resp => resp.json())
        .then((dadosEndereco) =>{
            exibeDados(dadosEndereco)
        })*/

    //CONVERTE OS DADOS NO FORMATO json
        const dadosEndereco = response.json()
        console.log(dadosEndereco)

    //CHAMA A FUNÇÃO exibeDados
        exibeDados(dadosEndereco)

    //CASO HAJA ALGUM ERRO É CAPTURANDO PELO catch
    }catch(erro){
        console.log('ERRO APRESENTADO',erro.message)
    }
}

//OBJETO LITERAL CAMPOS QUE CRIA REPRESENTA OS INPUT DO DOM
const campos = {

    logradouro: document.querySelector('#logradouro'),
    bairro: document.querySelector('#bairro'),
    localidade: document.querySelector('#localidade'),
    uf: document.querySelector("#uf"),

}

//FUNÇÃO EXIBE DADOS
const exibeDados = (objDados) =>{

    //PEGA A DIV PAI DOS ELEMENTOS DO ENDEREÇO
    const divEndereco = document.querySelector('#div-dados-endereco')

    //REMOVE DA DIV O CLASS OCULTO
    divEndereco.classList.remove('oculto')

    //PERCORRE OBJETO, NO FORMATO JSON, DO VIDA CEP
    for(let chave in objDados) {
    //ATRIBUI O VALOR AO INPUT
        campos[chave].value
    }
}
