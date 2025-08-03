// 1. Definir o Tipo de Tarefa:
// Cria um type alias chamado Task para representar uma tarefa.
type Task = {
    id: number;
    description: string;
    status: "pending" | "completed"; // Tipo literal para o status
};

// 2. Lista de Tarefas:
// Cria uma variável global chamada tasks que será um array de objetos do tipo Task.
let tasks: Task[] = [];

// 3. Função para Adicionar Tarefa:
// Cria uma função chamada addTask que recebe a descrição como parâmetro.
function addTask(description: string): void {
    // Validação básica: Garante que a descrição não está vazia
    if (description.trim() === "") {
        console.log("Erro: A descrição da tarefa não pode ser vazia.");
        return; // Sai da função se a descrição estiver vazia
    }

    // Gera um ID único simples (tamanho do array + 1)
    const newId: number = tasks.length + 1;

    // Cria um novo objeto Task
    const newTask: Task = {
        id: newId,
        description: description.trim(), // Usa a descrição sem espaços extras
        status: "pending" // O status inicial é sempre pendente
    };

    // Adiciona a nova tarefa ao array tasks
    tasks.push(newTask);

    console.log(`Tarefa adicionada: "${newTask.description}" (ID: ${newTask.id})`);
}

// 4. Função para Listar Tarefas:
// Cria uma função chamada listTasks que lista todas as tarefas.
function listTasks(): void {
    console.log("\n--- Lista de Tarefas ---");

    // Verifica se o array tasks está vazio
    if (tasks.length === 0) {
        console.log("Nenhuma tarefa adicionada ainda.");
        console.log("------------------------");
        return; // Sai da função
    }

    // Itera sobre o array tasks e imprime cada tarefa
    tasks.forEach((task: Task) => {
        console.log(`ID: ${task.id} - ${task.description} (${task.status})`);
    });

    console.log("------------------------");
}

// 5. Execução Simples:
// Testando o programa chamando as funções
console.log("--- Gerenciador Simples de Tarefas (CLI) ---");

addTask("Comprar mantimentos");
addTask("Aprender fundamentos de TypeScript");
addTask("Correr");
addTask(""); // Testando a validação de descrição vazia

listTasks();

// --- Extensões Opcionais (conforme mencionado no desafio) ---

// // Opcional: Função para marcar uma tarefa como concluída
// function markTaskCompleted(id: number): void {
//     const taskToComplete = tasks.find(task => task.id === id);
//
//     if (taskToComplete) {
//         if (taskToComplete.status === "completed") {
//             console.log(`Tarefa ID ${id} já está concluída.`);
//         } else {
//             taskToComplete.status = "completed";
//             console.log(`Tarefa ID ${id} marcada como concluída.`);
//         }
//     } else {
//         console.log(`Tarefa com ID ${id} não encontrada.`);
//     }
// }

// // Opcional: Função para remover uma tarefa
// function removeTask(id: number): void {
//     const initialLength = tasks.length;
//     tasks = tasks.filter(task => task.id !== id);
//
//     if (tasks.length < initialLength) {
//         console.log(`Tarefa com ID ${id} removida.`);
//     } else {
//         console.log(`Tarefa com ID ${id} não encontrada para remoção.`);
//     }
// }

// // Testando funções opcionais
// markTaskCompleted(2);
// removeTask(1);
// listTasks(); // Lista novamente para ver as mudanças

console.log("\n--- Fim do Programa ---");
