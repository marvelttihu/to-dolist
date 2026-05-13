// Get DOM elements
const inputTask = document.getElementById('text');
const addTask = document.getElementById('add');
const taskList = document.getElementById('task-list');
const warningText = document.getElementById('warning');

// Add Task
addTask.addEventListener("click", () => {
    warningText.innerText = "";
    if (inputTask.value.trim() !== '') {
        const task = document.createElement('li');

        // Set task content
        task.innerHTML = `
            <span class="task-text">${inputTask.value}</span>
        `;

        // delete task button
        const deleteTask = document.createElement('button');
        deleteTask.innerHTML = '✕';
        deleteTask.addEventListener('click', (e) => {
            e.stopPropagation();
            task.remove();
        });

        // Toggle task completion
        task.addEventListener('click', () => {
            task.querySelector('.task-text').classList.toggle('done');
        });

        task.appendChild(deleteTask);
        taskList.appendChild(task);
        inputTask.value = '';
    } else {
        warningText.innerText = "Error: Please enter a task.";
    }
});

// Allow adding task with Enter key
inputTask.addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
        addTask.click();
    }
});