document.addEventListener("DOMContentLoaded", () => {
    fetchTasks();
    updateClock();
    setInterval(updateClock, 1000);
    checkReminders();
    setInterval(checkReminders, 30000);
});
app.use(express.static(path.join(__dirname, 'public')));

function updateClock() {
    document.getElementById("clock").textContent = new Date().toLocaleString("en-US", { timeZone: "UTC" });
}

async function fetchTasks() {
    const response = await fetch('/tasks');
    const tasks = await response.json();
    renderTasks(tasks);
}
