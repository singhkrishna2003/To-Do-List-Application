# TO-DO List Application

## Introduction
The **TO-DO List Application** is a simple yet efficient productivity tool designed to help users manage their tasks effectively. Built using the **MERN stack** (MongoDB, Express.js, React.js, and Node.js), this application allows users to add, edit, mark as complete, or delete tasks. It ensures a seamless and interactive experience while managing data securely and efficiently.

---

## Features
- **Add Tasks**: Create tasks with titles and descriptions.
- **Update Tasks**: Edit task details or modify their status.
- **Delete Tasks**: Remove tasks that are no longer needed.
- **Mark as Complete**: Track task completion status.
- **Responsive Design**: Fully functional on both desktop and mobile devices.
- **Serch Bar**: Search relevant tasks or particularl task.

---

## Technologies Used
- **Frontend**: React.js
- **Backend**: Node.js with Express.js
- **Database**: MongoDB
- **Styling**: CSS (or any library like Bootstrap/Material-UI as applicable)
- **API Testing**: Postman (for backend API testing)

---

## Prerequisites
Before running the application, ensure you have the following installed:
- **Node.js** (v14+)
- **npm** (v6+)
- **MongoDB** (local)

---

## Installation and Setup
Follow these steps to set up and run the application on your local system:

### Clone the Repository
```bash
git clone https://github.com/singhkrishna2003/To-Do-List-Application.git
```
### Install Dependencies
Install dependencies for both the client and server:
```bash
# For backend
npm install

# For frontend
cd client
npm install
```
### Set Up Environment Variables
Create a .env (or it given) file in the server folder with the following variables:
```bash
PORT = 9000
DB_URL = "mongodb://localhost:27017/todo"
JWT_SECRET = "test-secret-key"
```
### Start the Application
Run the backend and frontend servers:
```bash
# Start the backend
npm run dev 

# Start the frontend
cd client
npm start
```

---

## Project Overview

### Landing Page
![Screenshot 2024-11-28 110950](https://github.com/user-attachments/assets/74808788-7c89-4383-b9e8-3da2ca36e6e6)

### Registration Page 
![Screenshot 2024-11-28 111040](https://github.com/user-attachments/assets/bce250eb-6b92-4188-90eb-603edc051858)

### Login Page
![Screenshot 2024-11-28 111101](https://github.com/user-attachments/assets/a3f5f12b-fd9d-4c4f-8356-3dc71a334a9d)

## My Task Page (hold Incomplete Task)
![Screenshot 2024-11-28 111454](https://github.com/user-attachments/assets/302e7998-d2ff-4cb7-b8ba-638f8ba2ac4c)

## My Task Page (hold Completed Task)
![Screenshot 2024-11-28 111955](https://github.com/user-attachments/assets/0340183d-ee4a-49b2-8f6d-68a3b3e403b3)

## Add New Task Model
![Screenshot 2024-11-28 111647](https://github.com/user-attachments/assets/5d6fa6c1-94ec-4e62-a824-73680fdfd08a)

## Upadte Already available Task Model
![Screenshot 2024-11-28 112008](https://github.com/user-attachments/assets/923440aa-633a-4b93-af9b-777fc30dde42)

## Used Search Bar to search related tasks or particular task
![Screenshot 2024-11-28 112052](https://github.com/user-attachments/assets/abc768ca-35b3-4d85-bef2-bc2e46ce03f2)
