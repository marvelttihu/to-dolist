const inputTask = document.getElementById('text');
const addTask = document.getElementById('add');
const taskList = document.getElementById('task-list');

addTask.addEventListener("click", () => {
    if (inputTask.value.trim() !== '') {
        const task = document.createElement('li');
        task.textContent = inputTask.value;

        const deleteTask = document.createElement('button');
        deleteTask.textContent = 'Delete';
        deleteTask.addEventListener('click', () => {
            task.remove();
        });
        
        task.appendChild(deleteTask);
        taskList.appendChild(task);
        inputTask.value = '';
    }
});

