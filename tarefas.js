function adicionarTarefa() {
    var novaTarefa = document.getElementById("novaTarefa");
    var Tarefa = novaTarefa.value;
    if (Tarefa.trim() !== "") {
        var listaDeTarefas = document.getElementById("listaDeTarefas");
        var novaTarefaItem = document.createElement("li");
        novaTarefaItem.textContent = Tarefa;
        listaDeTarefas.appendChild(novaTarefaItem);
        salvarTarefasNoArmazenamentoLocal();
        novaTarefa.value = ""; // Limpar o campo de entrada depois de adicionar
    } else {
        alert("Por favor, digite o nome da tarefa.");
    }
}