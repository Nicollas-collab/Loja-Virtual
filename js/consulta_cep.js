//PEGANDO O INPUT CEP DO DOM
const inputCep = document.querySelector('#cep')

//CAPTURANDO O EVENTO AO PERDER O FOCO
inputCep.addEventListener('change', (evt)=>{
    //PEGANDO OS NÚMEROS DO INPUT NÃO PERMITINDO OUTRO TIPO DE DADOS QUE NÃO SEJA DIGITO
    const numCep = evt.target.value.replace(/\D/g,"")

    if(numCep !== 8){
        alert('CEP INVÁLIDO')
        return
    }

    buscaDadosCep(numCep)
})

//BUSCAR OS DADOS DOS CEP NO VIACEP

const buscaDadosCep = async (cep) => {
    //comando ASYNC: se pede algo que precisa aguarda, ele permite que o comando continue rodando e não interrompa o sistema.

    //TENTA BUSCAR OS DADOS NO VIACEP

    try{
    
    //BUSCA OS DADOS NO VIA CEP
    const apiViaCep = `https://viacep.com.br/ws/01001000/json/`
    fetch(apiViaCep)
    .then(resp => resp.json())
    .then(dados => {
        exibeDados(dados)
    })

    //comando fetch: busca algum dado que está fora do sistema java
    //comando await: faz esperar o fetch trazer algo
        const response = await fetch('https://viacep.com.br/ws/01001000/json/')
        /*.then(resp => resp.json())
        .then((dadosEndereco) =>{
            exibeDados(dadosEndereco)
        })*/

    //CONVERTE OS DADOS NO FORMATO json
        const dadosEndereco = await response.json()
        console.log(dadosEndereco)

    //CHAMA A FUNÇÃO exibeDados
        exibeDados(dadosEndereco)

    //CASO HAJA ALGUM ERRO É CAPTURANDO PELO catch
    }catch(erro){
        console.log('ERRO APRESENTADO',erro.message)
    }
}

//OBJETO LITERAL CAMPOS QUE CADA CHAVE REPRESENTA OS INPUT DO DOM
const campos = {

    logradouro: document.querySelector('#logradouro').value = objDados.logradouro,
    bairro: document.querySelector('#bairro').value = objDados.bairro,
    localidade: document.querySelector('#localidade').value = objDados.localidade,
    uf: document.querySelector("#uf").value = objDados.uf

}

//FUNÇÃO EXIBE DADOS
const exibeDados = (objDados) => {
    //PEGA A DIV PAI DOS ELEMENTOS DO ENDEREÇO
    const divEndereco = document.querySelector('#div-dados-endereco')

    //REMOVE DA DIV O CLASS OCULTO
    divEndereco.classList.remove('oculto')

    //PERCORRE O OBJETO, NO FORMATO JSON, DO VIDA CEP
    for (let chave in campus) {
        //ATRIBUI O VALOR AO INPUT
        campos[chave].value = objDados[chave]

        //BLOQUEIA OS INPUTS. NÃO PERMITE QUE O USUÁRIO APAGUE OS VALORES
        campos[chave].disable = objDados[chave]
    }
    document.querySelector

}
formPessoa.addEventListener('reset',() =>{
    //PEGA A DIV PAI DOS ELEMENTOS DO ENDEREÇO
    const divEndereco = document.querySelector('#div-dados-endereco')
    
})