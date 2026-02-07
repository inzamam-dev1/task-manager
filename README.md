Since we've built a professional "Enterprise-grade" version of the task manager, the README should reflect that same level of quality. It needs to clearly outline how the recruiter can run your code and highlights that you've met all the Functional Requirements and Evaluation Criteria.
+1

Create a file named README.md in your project's root folder and paste the following:

TaskCore v1.0 | Full-Stack Task Management Suite
A robust, enterprise-inspired Task Management application built to fulfill the Global Trend Full Stack Internship Assessment. This project demonstrates proficiency in the MERN stack, focusing on clean UI, efficient backend logic, and persistent data storage.
+1

🚀 Key Features

Full CRUD Operations: Create, View, Update, and Delete tasks seamlessly.


Responsive Enterprise UI: A minimalist, structured layout using React and advanced CSS for a professional user experience.


Persistent Storage: Integrated with MongoDB Atlas for secure, cloud-based data persistence.


Dynamic Status Tracking: Real-time updates for Task Status (Pending, In Progress, Completed).

🛠️ Tech Stack
Frontend: React.js (Hooks, Axios, Custom CSS)

Backend: Node.js & Express.js (RESTful API)

Database: MongoDB (Mongoose ODM)

Environment: Dotenv for secure configuration

📂 Project Structure
/client: The React frontend application.

/server: The Express backend, including API routes and MongoDB models.

⚙️ Setup & Installation
Follow these steps to run the application locally:

1. Prerequisites
Node.js installed on your machine.

A MongoDB Atlas connection string (provided in .env).

2. Backend Configuration
Navigate to the /server directory: cd server.

Install dependencies: npm install.

Ensure your .env file is configured with the correct MONGO_URI and PORT.

Start the server: node server.js.

3. Frontend Configuration
Navigate to the /client directory: cd client.

Install dependencies: npm install.

Start the development server: npm start.

📝 Functional Requirements Met

Frontend: Task list page with a clear "Add Task" form.


Fields: Every task includes a Title, Description, and Status.


Backend: Complete REST API using Node.js and Express.


Database: Persistent storage via MongoDB.
