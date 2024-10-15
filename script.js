document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    const addTask = (e) => {
        e.preventDefault();

        const taskText = taskInput.value.trim();
        if (!taskText) return;

        const li = document.createElement('li');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', toggleTask);

        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', deleteTask);

        li.appendChild(checkbox);
        li.appendChild(taskSpan);
        li.appendChild(deleteBtn);

        taskList.appendChild(li);

        taskInput.value = '';
    };

    const toggleTask = (e) => {
        const listItem = e.target.parentElement;
        listItem.classList.toggle('completed');
    };

    const deleteTask = (e) => {
        const listItem = e.target.parentElement;
        taskList.removeChild(listItem);
    };

    taskForm.addEventListener('submit', addTask);
});
