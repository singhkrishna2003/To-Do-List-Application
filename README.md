# TO-DO List Application

## Introduction
The **TO-DO List Application** is a simple yet efficient productivity tool designed to help users manage their tasks effectively. Built using the **MERN stack** (MongoDB, Express.js, React.js, and Node.js), this application allows users to add, edit, mark as complete, or delete tasks. It ensures a seamless and interactive experience while managing data securely and efficiently.

---

## Features
- **Add Tasks**: Create tasks with titles and descriptions.
- **Update Tasks**: Edit task details or modify their status.
- **Delete Tasks**: Remove tasks that are no longer needed.
- **Mark as Complete**: Track task completion status.
- **Persist Data**: All tasks are stored securely in a MongoDB database.
- **Responsive Design**: Fully functional on both desktop and mobile devices.

---

## Technologies Used
- **Frontend**: React.js
- **Backend**: Node.js with Express.js
- **Database**: MongoDB
- **Styling**: CSS (or any library like Bootstrap/Material-UI as applicable)
- **State Management**: React State/Context API/Redux (if applicable)
- **API Testing**: Postman (for backend API testing)

---

## Prerequisites
Before running the application, ensure you have the following installed:
- **Node.js** (v14+)
- **npm** (v6+)
- **MongoDB** (local or cloud-based)

---

## Installation and Setup
Follow these steps to set up and run the application on your local system:

### Clone the Repository
```bash
git clone https://github.com/singhkrishna2003/To-Do-List-Application.git
```
###Install Dependencies
Install dependencies for both the client and server:
```bash
# For backend
npm install

# For frontend
cd client
npm install
```
###Set Up Environment Variables
Create a .env (or it given) file in the server folder with the following variables:
```bash
PORT = 9000
DB_URL = "mongodb://localhost:27017/todo"
JWT_SECRET = "test-secret-key"
```
###Start the Application
Run the backend and frontend servers:
```bash
# Start the backend
npm run dev 

# Start the frontend
cd client
npm start
