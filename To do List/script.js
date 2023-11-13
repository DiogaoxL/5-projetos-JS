const button = document.querySelector('.add-task') // buscar no html a classe do botao
const input = document.querySelector('.input-task') // buscar no html a classe do input
let listaCompleta = document.querySelector('.list-tasks')

let minhaListaDeItens = []

function addNovaTarefa() {
  if (input.value === '') {
    alert('Adicione algum item ')
  } else {
    minhaListaDeItens.push({
      tarefa: input.value,
      concluida: false
    }) // push vai adicionar algum valor dentro da array

    input.value = ''

    mostrarTarefas()
  }
}

function mostrarTarefas() {
  let novaLi = ''

  minhaListaDeItens.forEach((item, posicao) => {
    novaLi =
      novaLi +
      `<li class="task ${item.concluida && 'done'}">
    <img src="./img/checked.png" alt="check-a-tarefa" onclick="concluirTarefa(${posicao})" >
    <p>${item.tarefa}</p>
    <img src="./img/trash.png" alt="mover-para-o-lixo" onclick = "daletarItem(${posicao})">
</li>
`
  })

  listaCompleta.innerHTML = novaLi

  localStorage.setItem('lista', JSON.stringify(minhaListaDeItens)) // JSON.stringify transforma tudo dentro do objeto em string
}

function concluirTarefa(posicao) {
  minhaListaDeItens[posicao].concluida = !minhaListaDeItens[posicao].concluida

  mostrarTarefas()
}

function daletarItem(posicao) {
  minhaListaDeItens.splice(posicao, 1)

  mostrarTarefas()
}

function recarregarTarefas() {
  const tarefaLocalStorege = localStorage.getItem('lista')

  if (tarefaLocalStorege) {
    minhaListaDeItens = JSON.parse(tarefaLocalStorege) //JSON.parse transforma a string em objeto novamente
  }

  mostrarTarefas()
}

recarregarTarefas()

button.addEventListener('click', addNovaTarefa) //essa função vai monitorar a const button que toda vez que for clicado ira avisar
