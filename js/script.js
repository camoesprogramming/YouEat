
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