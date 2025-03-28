Task Tracker 📝
A simple Task Tracker web application built with HTML, CSS, JavaScript, and Node.js (Express & JSON Server). This app allows users to add, view, and delete tasks, with a real-time clock and pop-up notifications for due tasks.

📌 Features
✔️ Add new tasks
✔️ View all tasks
✔️ Delete tasks
✔️ Real-time clock display
✔️ Reminders for due tasks

🚀 Tech Stack
Frontend: HTML, CSS, JavaScript

Backend: Node.js, Express.js

Database: JSON Server

📂 Project Structure
taskTracker/
│── db.json          # Database file
│── index.html       # Main HTML file
│── style.css        # Stylesheet
│── client.js        # Frontend logic
│── server.js        # Backend (Express Server)
│── package.json     # Project dependencies
│── README.md        # Documentation

📦 Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/your-username/taskTracker.git
cd taskTracker
2️⃣ Install Dependencies
npm install
3️⃣ Start the Server
npm start
This will start the JSON Server and serve the frontend files.

📌 API Endpoints
Method	Endpoint	Description
GET	/tasks	Fetch all tasks
POST	/tasks	Add a new task
DELETE	/tasks/:id	Delete a task by ID
🌟 Usage
1️⃣ Open http://localhost:3000 in your browser.
2️⃣ Add tasks using the input field and button.
3️⃣ View and manage your tasks in the list.

🛠️ Troubleshooting
If port 3000 is already in use, stop any other process using:
lsof -i :3000
kill -9 <PID>
If styles are missing, check that style.css is linked correctly in index.html

📜 License
This project is open-source and available under the MIT License.
