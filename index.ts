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
        showError("Erro: A descrição da tarefa não pode ser vazia.");
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

    hideError();
    renderTasks();
}

// 4. Função para Listar Tarefas (adaptada para web):
// Atualiza a interface web com as tarefas
function renderTasks(): void {
    const tasksList = document.getElementById('tasksList');
    if (!tasksList) return;

    // Verifica se o array tasks está vazio
    if (tasks.length === 0) {
        tasksList.innerHTML = '<div class="no-tasks">Nenhuma tarefa adicionada ainda.</div>';
        return;
    }

    // Gera o HTML para cada tarefa
    const tasksHTML = tasks.map((task: Task) => `
        <div class="task-item ${task.status}">
            <div class="task-info">
                <div class="task-id">ID: ${task.id}</div>
                <div class="task-description ${task.status}">${task.description}</div>
                <span class="task-status ${task.status}">${task.status === 'pending' ? 'Pendente' : 'Concluída'}</span>
            </div>
            <div class="task-actions">
                ${task.status === 'pending' ? 
                    `<button class="complete" onclick="markTaskCompleted(${task.id})">Concluir</button>` : 
                    ''
                }
                <button class="remove" onclick="removeTask(${task.id})">Remover</button>
            </div>
        </div>
    `).join('');

    tasksList.innerHTML = tasksHTML;
}

// 5. Funções Auxiliares para Web:
// Função para mostrar mensagens de erro
function showError(message: string): void {
    const errorElement = document.getElementById('errorMessage');
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
}

// Função para esconder mensagens de erro
function hideError(): void {
    const errorElement = document.getElementById('errorMessage');
    if (errorElement) {
        errorElement.style.display = 'none';
    }
}

// Função para adicionar tarefa a partir do input
function addTaskFromInput(): void {
    const taskInput = document.getElementById('taskInput') as HTMLInputElement;
    if (taskInput) {
        addTask(taskInput.value);
        taskInput.value = ''; // Limpa o input após adicionar
    }
}

// 6. Funções Opcionais (ativadas para web):
// Função para marcar uma tarefa como concluída
function markTaskCompleted(id: number): void {
    const taskToComplete = tasks.find(task => task.id === id);

    if (taskToComplete) {
        if (taskToComplete.status === "completed") {
            showError(`Tarefa ID ${id} já está concluída.`);
        } else {
            taskToComplete.status = "completed";
            hideError();
            renderTasks();
        }
    } else {
        showError(`Tarefa com ID ${id} não encontrada.`);
    }
}

// Função para remover uma tarefa
function removeTask(id: number): void {
    const initialLength = tasks.length;
    tasks = tasks.filter(task => task.id !== id);

    if (tasks.length < initialLength) {
        hideError();
        renderTasks();
    } else {
        showError(`Tarefa com ID ${id} não encontrada para remoção.`);
    }
}

// 7. Inicialização:
// Adiciona evento para pressionar Enter no input
document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput') as HTMLInputElement;
    if (taskInput) {
        taskInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                addTaskFromInput();
            }
        });
    }
    
    // Adiciona algumas tarefas de exemplo para demonstração
    addTask("Comprar mantimentos");
    addTask("Aprender fundamentos de TypeScript");
    addTask("Correr");
});
