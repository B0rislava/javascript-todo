// State Management
let todos = [];
let nextId = 1;

// DOM Elements
const todoForm = document.getElementById('todoForm');
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');
const emptyState = document.getElementById('emptyState');
const totalCount = document.getElementById('totalCount');
const activeCount = document.getElementById('activeCount');
const completedCount = document.getElementById('completedCount');

// Form Submit Handler with preventDefault()
todoForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const text = todoInput.value.trim();
    if (text) {
        addTodo(text);
        todoInput.value = '';
        todoInput.focus();
    }
});

// Event Delegation for whole list
todoList.addEventListener('click', (e) => {
    const todoItem = e.target.closest('.todo-item');
    if (!todoItem) return;

    const id = parseInt(todoItem.dataset.id);

    if (e.target.classList.contains('delete-btn')) {
        deleteTodo(id);
    }

    else if (e.target.classList.contains('todo-text')) {
        toggleTodo(id);
    }
});

function addTodo(text) {
    const todo = {
        id: nextId++,
        text: text,
        completed: false,
        isNew: true
    };

    todos.push(todo);
    render();
}

function toggleTodo(id) {
    const todo = todos.find(t => t.id === id);
    if (todo) {
        todo.completed = !todo.completed;
        render();
    }
}

function deleteTodo(id) {
    const todoItem = document.querySelector(`[data-id="${id}"]`);

    if (todoItem) {
        todoItem.classList.add('fade-out-shrink');

        setTimeout(() => {
            todos = todos.filter(t => t.id !== id);
            render();
        }, 300);
    }
}

function updateStats() {
    const total = todos.length;
    const completed = todos.filter(t => t.completed).length;
    const active = total - completed;

    totalCount.textContent = `${total}`;
    activeCount.textContent = `${active}`;
    completedCount.textContent = `${completed}`;
}

// Conditional Rendering
function render() {
    if (todos.length === 0) {
        todoList.innerHTML = '';
        todoList.classList.add('hidden');


        setTimeout(() => {
            emptyState.classList.remove('hidden');
            requestAnimationFrame(() => {
                emptyState.classList.add('show');
            });
        }, 200);
    } else {
        emptyState.classList.remove('show');
        emptyState.classList.add('hidden');

        todoList.classList.remove('hidden');
        todoList.innerHTML = '';

        todos.forEach(todo => {
            const li = document.createElement('li');
            li.className = `todo-item ${todo.completed ? 'completed' : ''} ${todo.isNew ? 'fade-in-pop' : ''}`;
            li.dataset.id = todo.id;

            li.innerHTML = `
                <span class="todo-text">${escapeHtml(todo.text)}</span>
                <button class="delete-btn" aria-label="Изтрий">×</button>
            `;

            todoList.appendChild(li);

            if (todo.isNew) {
                setTimeout(() => {
                    todo.isNew = false;
                }, 400);
            }
        });
    }

    updateStats();
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}


render();