async function fetchTasks() {
    try {
        const response = await fetch('http://localhost:3000/tasks');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const tasks = await response.json();
        
        console.log('Fetched Tasks:', tasks);
        renderTasks(tasks);
    } catch (error) {
        console.error('Error fetching tasks:', error);
    }
}

function renderTasks(tasks) {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = "";
    
    tasks.forEach(task => {
        const li = document.createElement("li");
        li.classList.add("task-item");
        
        if (task.priority === 1) li.classList.add("high");
        else if (task.priority === 2) li.classList.add("medium");
        else li.classList.add("low");

        li.innerHTML = `
            <div class="task-info">
                <p class="task-title">${task.title}</p>
                <p class="due-date">Due: ${new Date(task.dueDate).toLocaleString()}</p>
            </div>
            <div class="task-actions">
                <button class="btn btn-delete" onclick="deleteTask(${task.id})">Delete</button>
            </div>
        `;

        taskList.appendChild(li);
    });
}

async function addTask() {
    const title = document.getElementById("task-input").value.trim();
    const dueDate = document.getElementById("due-date").value;
    const priority = document.getElementById("priority").value;

    if (!title || !dueDate) return;

    const newTask = {
        id: Date.now(),
        title,
        completed: false,
        dueDate: new Date(dueDate).toISOString(),
        priority: parseInt(priority),
        reminderTime: 60
    };

    try {
        await fetch('http://localhost:3000/tasks', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newTask)
        });
        document.getElementById("task-input").value = "";
        document.getElementById("due-date").value = "";
        fetchTasks();
    } catch (error) {
        console.error('Error adding task:', error);
    }
}

async function deleteTask(id) {
    try {
        await fetch(`http://localhost:3000/tasks/${id}`, {
            method: 'DELETE'
        });
        fetchTasks();
    } catch (error) {
        console.error('Error deleting task:', error);
    }
}

document.addEventListener("DOMContentLoaded", fetchTasks);