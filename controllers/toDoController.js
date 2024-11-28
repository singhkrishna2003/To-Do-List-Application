const ToDo = require("../models/ToDoList");


//Create a new ToDo
exports.createToDo = async (req,res)=>{
    try{
        const data = req.body;
        const todo = new ToDo(data);
        const result = await todo.save();
        console.log(result);
        res.status(201).send({message:"Task successfully created!"});

    }catch(err){
        console.log(err);
        res.status(err);
    }
}


// Get a list of tasks for a specific project
exports.getAllToDo = async (req,res)=>{
    let {userId} = req.params;

    try{
        const result = await ToDo.find({createdBy:userId});
        res.send(result);

    }catch(err){
        console.log(err);
        res.status(400).send(err);
    }

}


// Update a list of tasks for a specific project
exports.updateToDo = async (req,res)=>{
    try{
        const {id} = req.params;
        const data = req.body;
        const result = await ToDo.findByIdAndUpdate(id,{$set:data},{returnOriginal:false});
        console.log(result);
        res.send({message:'Your To-Do List Has Been Successfully Updated!'})
    }catch(err){
        console.log(err);
        res.status(400).send(err);
    }
}


// Delete a list of tasks for a specific project
exports.deleteToDo = async (req,res)=>{
    try{
        const {id} = req.params;
        const result = await ToDo.findByIdAndDelete(id);
        console.log(result);
        res.send({message:"ToDo Task Deleted!"});
    }catch(err){
        console.log(err);
        res.status(400).send(err);
    }
}