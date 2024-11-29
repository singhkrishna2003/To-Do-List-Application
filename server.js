const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const toDoRoutes = require('./routes/ToDoRoutes');

const path = require('path');

// Middleware
require('dotenv').config();
const PORT = process.env.PORT || 9000; 


app.use(cors(
    {
        origin: ['https://todo-list-application-nine.vercel.app'],
        methods: ['GET', 'POST', 'PUT', 'DELETE','PATCH'],
        credentials: true  // Enable cookies in requests
    }
));

// Home route
app.get('/',(req,res)=>{
    res.json("Hello, world!");
});

app.use(express.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname,'client/build')));

// Import Routes
app.use('/api',authRoutes);
app.use('/api/todo',toDoRoutes);

mongoose.connect(process.env.DB_URL).then((result)=>{
    console.log("DB Connected Successfully!");
}).catch(err=>{
    console.log(err);
})

// Routes
app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
});
