const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const toDoRoutes = require('./routes/ToDoRoutes');

// Middleware
require('dotenv').config();
const PORT = process.env.PORT || 9000; 


app.use(cors());
app.use(express.json());

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