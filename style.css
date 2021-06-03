const listaOrdenada = document.querySelector('#lista-tarefas');
const botaoCriarTask = document.getElementById('criar-tarefa');
const inputField = document.querySelector('#texto-tarefa');
const botaoRemoveTudo = document.querySelector('#apaga-tudo');
const botaoRemoveFinalizados = document.querySelector('#remover-finalizados');
const botaoSalvarTarefas = document.querySelector('#salvar-tarefas');
const botaoRemoveSeleccionado = document.querySelector('#remover-selecionado');
const botaoMoveBaixo = document.querySelector('#mover-baixo');
const botaoMoveCima = document.querySelector('#mover-cima');

function criaTarefa() {
  const inputTask = inputField.value;
  if (inputTask === '') {
    return null;
  }
  const elementoDaLista = document.createElement('li');
  elementoDaLista.innerHTML = inputTask;
  elementoDaLista.className = 'tarefa';
  listaOrdenada.appendChild(elementoDaLista);
  inputField.value = '';
}

botaoCriarTask.addEventListener('click', criaTarefa);

// Matheus Camillo me ajudou a reduzir este código, por capricho, atribuíndo estilo na classe selected no CSS e não aqui no JS.
function coloreItem(origem) {
  const itemSelecionado = document.querySelector('.selected');
  if (origem.target.className === 'tarefa') {
    origem.target.classList.add('selected');
    if (itemSelecionado !== null) {
      itemSelecionado.classList.remove('selected');
    }
  }
}

listaOrdenada.addEventListener('click', coloreItem);

function riscaItem(origem) {
  if (origem.target.classList.contains('completed') === false) {
    origem.target.classList.add('completed');
  } else if (origem.target.classList.contains('completed')) {
    origem.target.classList.remove('completed');
  }
}

listaOrdenada.addEventListener('dblclick', riscaItem);

function apagaTudo() {
  while (listaOrdenada.lastElementChild !== null) {
    listaOrdenada.removeChild(listaOrdenada.lastElementChild);
  }
}

botaoRemoveTudo.addEventListener('click', apagaTudo);

function removeFinalizados() {
  const finalizados = document.querySelectorAll('.completed');
  for (let index = 0; index < finalizados.length; index += 1) {
    if (finalizados[index].classList.contains('completed')) {
      listaOrdenada.removeChild(finalizados[index]);
    }
  }
}

botaoRemoveFinalizados.addEventListener('click', removeFinalizados);

function salvarTarefas() {
  const htmlDaLista = listaOrdenada.innerHTML;
  localStorage.setItem('listaSalva', htmlDaLista);
}

function recuperaTarefas() {
  const listaSalva = localStorage.getItem('listaSalva');
  if (listaSalva !== null) {
    listaOrdenada.innerHTML = listaSalva;
  }
}

recuperaTarefas();

// Para criar este evento corretamente utilizei estas literaturas: https://stackabuse.com/storing-data-in-the-browser-with-localstorage , https://blog.logrocket.com/localstorage-javascript-complete-guide/ , https://projects.raspberrypi.org/en/projects/cd-intermediate-javascript-sushi/7 (esta última sem a necessidade das funções com JSON pois usei a string de HTML diretamente aplicada à Inner html), https://tableless.com.br/guia-f%C3%A1cil-sobre-usar-localstorage-com-javascript/, https://www.w3schools.com/jsref/met_storage_setitem.asp, https://www.w3schools.com/jsref/met_storage_getitem.asp

botaoSalvarTarefas.addEventListener('click', salvarTarefas);

function removeSelecionado() {
  const selecionado = document.querySelector('.selected');
  if (selecionado !== null) {
    listaOrdenada.removeChild(selecionado);
  }
}

botaoRemoveSeleccionado.addEventListener('click', removeSelecionado);

function moveParaBaixo() {
  const selecionado = document.querySelector('.selected');
  if (selecionado !== null) {
    const elementoDeBaixo = selecionado.nextElementSibling;
    if (selecionado !== listaOrdenada.lastChild) {
      listaOrdenada.insertBefore(selecionado, elementoDeBaixo.nextElementSibling);
    }
  }
}

// Para acionar este evento corretamente, utilizei estas literaturas https://developer.mozilla.org/pt-BR/docs/Web/API/Node/insertBefore e https://www.w3schools.com/jsref/prop_element_previouselementsibling.asp

botaoMoveBaixo.addEventListener('click', moveParaBaixo);

function moveParaCima() {
  const selecionado = document.querySelector('.selected');
  if (selecionado !== null) {
    const elementoDeCima = selecionado.previousElementSibling;
    if (selecionado !== listaOrdenada.firstChild) {
      listaOrdenada.insertBefore(selecionado, elementoDeCima);
    }
  }
}

botaoMoveCima.addEventListener('click', moveParaCima);
