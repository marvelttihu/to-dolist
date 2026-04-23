const inputTask = document.getElementById('text');
const addTask = document.getElementById('add');
const taskList = document.getElementById('task-list');
const warningText = document.getElementById('warning');

// Add task button event handling
addTask.addEventListener("click", () => {
    warningText.innerText = "";
    if (inputTask.value.trim() !== '') {
        const task = document.createElement('li');
        task.textContent = inputTask.value;

        task.innerHTML = `
            <label class="checkbox-wrapper">
                <input type="checkbox" class="task-checkbox">
                <span class="custom-box"></span>
                <span class="task-text">${inputTask.value}</span>
            </label>
        `;

        // Delete task button
        const deleteTask = document.createElement('button');
        deleteTask.textContent = 'Delete';
        deleteTask.addEventListener('click', () => {
            task.remove();
        });
        
        task.appendChild(deleteTask);
        taskList.appendChild(task);
        inputTask.value = '';
    } else {
        // Warning-text
        warningText.innerText = "Error: Please enter a task.";
    }
});

// This is for enter button
inputTask.addEventListener('keydown', (event) => {  
    if(event.key === "Enter") {
        addTask.click();
    }
}) 

