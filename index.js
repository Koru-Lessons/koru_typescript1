"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let tasks = [];
// 3. Função para Adicionar Tarefa:
// Cria uma função chamada addTask que recebe a descrição como parâmetro.
function addTask(description) {
    if (description.trim() === "") {
        console.error("A descrição não pode ser vazia");
        return;
    }
    const newId = crypto.randomUUID();
    const newTask = {
        id: newId,
        description: description.trim(),
        status: "pending"
    };
    tasks.push(newTask);
    console.log(`Tarefa adicionada: "${newTask.description}" (ID: ${newTask.id})`);
}
// 4. Função para Listar Tarefas:
// Cria uma função chamada listTasks que lista todas as tarefas.
function listTasks() {
    console.log("--- Lista de tarefas ---");
    if (tasks.length === 0) {
        console.error("Nenhuma tarefa ainda adicionada");
        return;
    }
    tasks.forEach((task) => {
        console.log(`ID: ${task.id} - ${task.description}: ${task.status}`);
    });
}
// 5. Execução Simples:
// Testando o programa chamando as funções
addTask("Aprender TypeScript");
addTask("Lavar a louça");
addTask("Beber água");
addTask("");
listTasks();
// --- Extensões Opcionais (conforme mencionado no desafio) ---
// // Opcional: Função para marcar uma tarefa como concluída
// // Opcional: Função para remover uma tarefa
// // Testando funções opcionais
//# sourceMappingURL=index.js.map