let nomePratoComida = '';
let valorPratoComida;
let nomeBebida = '';
let valorBebida;
let nomeSobremesa = '';
let valorSobremesa;
let somaValores;

// função para selecionar um card de comida
function selecionaCardComida(itenSelecionado) {

  //verifica se tem algum card selecionado dentro da opção de comidas
  const verificaCardSelecionado = document.querySelector(".opcoes-comidas .selecionado");

// se tiver, remove.
  if (verificaCardSelecionado !== null) {
    verificaCardSelecionado.classList.remove("selecionado");
  }

// adiciona classe selecionado no iten clicado
  const adicionaClasseSelecionado = itenSelecionado.classList.add("selecionado");

// pegamos o texto do nome do prato de comida
   nomePratoComida = document.querySelector('.selecionado .nome-comida').innerHTML

// pegamos o valor numérico do valor do prato de comida
  valorPratoComida = document.querySelector('.selecionado .valor-comida').innerHTML.replace('R$ ', '');

// como o usuário pode clicar nas escolhas em qualquer ordem, chamamos a função abaixo toda vez q ele realizar um click
  autorizaBotaoFecharPedido()

}

// função para selecionar um card de bebida
function selecionaCardBebida(itenSelecionado) {

//verifica se tem algum card selecionado dentro da seção de bebidas
  const verificaCardSelecionado = document.querySelector(".opcoes-bebidas .selecionado");
// se tiver, remove.
  if (verificaCardSelecionado !== null) {
    verificaCardSelecionado.classList.remove("selecionado");
  }

// adiciona classe selecionado no iten clicado
  const adicionaClasseSelecionado = itenSelecionado.classList.add("selecionado");

// pegamos o texto do nome da bebida
  nomeBebida = document.querySelector('.selecionado .nome-bebida').innerHTML

// pegamos o valor numérico do valor do prato de bebida
  valorBebida = document.querySelector('.selecionado .valor-bebida').innerHTML.replace('R$ ', '');  

// como o usuário pode clicar nas escolhas em qualquer ordem, chamamos a função abaixo toda vez q ele realizar um click
  autorizaBotaoFecharPedido();

}

// função para selecionar um card de comida
function selecionaCardSobremesa(itenSelecionado) {

//verifica se tem algum card selecionado dentro da opção de sobremesas
  const verificaCardSelecionado = document.querySelector(".opcoes-sobremesas .selecionado");

// se tiver, remove.
  if (verificaCardSelecionado !== null) {
    verificaCardSelecionado.classList.remove("selecionado");
  }

// adiciona classe selecionado no iten clicado
  const adicionaClasseSelecionado = itenSelecionado.classList.add("selecionado");

  
// pegamos o texto do nome da sobremesa
  nomeSobremesa = document.querySelector('.selecionado .nome-sobremesa').innerHTML

// pegamos o valor numérico do valor do prato de sobremesa
  valorSobremesa = document.querySelector('.selecionado .valor-sobremesa').innerHTML.replace('R$ ', '');  

// como o usuário pode clicar nas escolhas em qualquer ordem, chamamos a função abaixo toda vez q ele realizar um click
  autorizaBotaoFecharPedido();

}

// função para verificar se podemos habilitar o botão fechar pedido.
function autorizaBotaoFecharPedido() {
// se houver alguma card selecionada de comida, fica atribuída nessa variável
  const verificaCardSelecionadoComida = document.querySelector(".opcoes-comidas .selecionado");

// igualmente para bebida
  const verificaCardSelecionadoBebidas = document.querySelector(".opcoes-bebidas .selecionado");

// igualmente para sobremesa
  const verificaCardSelecionadoSobremesa = document.querySelector(".opcoes-sobremesas .selecionado");

// se as variáveis estiverem preenchidas (informando que as cards foram selecionadas)
  if (verificaCardSelecionadoComida !== null) {
    if (verificaCardSelecionadoBebidas !== null) {
      if (verificaCardSelecionadoSobremesa !== null) {
// adicionamos a classe hidden no botao e retiramos a classe hidden do botao fecha-pedido
        const someBotao = document.querySelector(".botao");

        someBotao.classList.add('hidden');

        const adicionaBotao = document.querySelector(".botao-fecha-pedido");

        adicionaBotao.classList.remove('hidden')
      }
    }
  }
}

// função para habilitar tela de confirmação de pedido
function confirmaPedido() {
  // mudamos as informações do quadro de pedidos
  preencheQuadroPedidos();

// achamos a div da tela de confirmacao
  const abreTelaConfirmacao = document.querySelector('.tela-confirmacao');

// removemos a class hidden
  abreTelaConfirmacao.classList.remove('hidden')

}

// função para preencher informações no quadro de pedidos.
function preencheQuadroPedidos() {

// selecionamos as divs que vamos mudar e inserimos um novo valor html nelas, conforme as variáveis globais declaradas anteriormente, que puxam os valores selecionados
  const mudaPratoComida = document.querySelector('.nome-prato-comida');
  mudaPratoComida.innerHTML = nomePratoComida; 
  

  const mudaValorPratoComida = document.querySelector('.valor-prato-comida');
  mudaValorPratoComida.innerHTML = valorPratoComida;

  const mudaNomeBebida = document.querySelector('.nome-bebida-escolhida');
  mudaNomeBebida.innerHTML = nomeBebida;
  
  const mudaValorBebida = document.querySelector('.valor-bebida-escolhida');
  mudaValorBebida.innerHTML = valorBebida;

  const mudaNomeSobremesa = document.querySelector('.nome-sobremesa-escolhida');
  mudaNomeSobremesa.innerHTML = nomeSobremesa;

  const mudaValorSobremesa = document.querySelector('.valor-sobremsa-escolhida');
  mudaValorSobremesa.innerHTML = valorSobremesa;

// chamamos a função soma
  soma();

// trocamos o valor do total pela variável somaValores adquirida da função soma
  const mudaValorSoma = document.querySelector('.soma-valores');
  mudaValorSoma.innerHTML = somaValores;
  


}

// função para fazer pedido pro WhatsApp
function chamaWhatsApp() {
  nome = prompt('Por favor digite seu nome:');
  address = prompt('Por favor digite seu endereço')

  const mensagem = 'Olá, gostaria de fazer o pedido:\n' +
  '- Prato: '+nomePratoComida+'\n' +
  '- Bebida: '+nomeBebida+'\n' +
  '- Sobremesa: '+nomeSobremesa+'\n' +
  'Total: R$ '+ somaValores + '\n' +
  '\n' +
  'Nome: '+nome+'\n'+
  'Endereço: '+address

  const numerowpp = '+5562982166640'

  const mensagem_link = encodeURIComponent(mensagem)

  let link = 'https://api.whatsapp.com/send?phone='+numerowpp+'&text=%20'+mensagem_link
  window.open(link, 'YouEat');
  

}


// função para cancelar pedido e consequentemente voltar a tela anterior.
function cancelarPedido() {

// achamos a div da tela de confirmacao
  const fechaTelaConfirmacao = document.querySelector('.tela-confirmacao');

// adicionamos a class hidden
  fechaTelaConfirmacao.classList.add('hidden')
}

// vamos somar os valores e entregar o valor na variável global soma já em string
function soma() {

// primeiro trocamos a virgula por ponto e transformamos em numero cada um dos valores
  const valorNumericoComida = Number(valorPratoComida.replace(',','.'));

  const valorNumericoBebida = Number(valorBebida.replace(',','.'));

  const valorNumericoSobremesa = Number(valorSobremesa.replace(',','.'));

// fazemos a soma fixando para 2 casas decimais
  let soma = (valorNumericoBebida + valorNumericoComida + valorNumericoSobremesa).toFixed(2);

// atribuímos a variável global ja em forma de string e transformando o '.' em ',' conforme solicitado pelo design
  somaValores = 'R$ ' + soma.toString().replace('.',',');
  
}