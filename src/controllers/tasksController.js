import Task from '../models/task.model.js';
//Task controller

export const getTasks = async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks)
};

export const createTask = async (req, res) => {
    const { title, description, date } = req.body;

    const newTask = new Task({
        title, 
        descriptiom,
        date
    });
    const savedTask = await newTask.save();
    res.json(savedTask)
};

export const getTask = async (req, res) => {
    await Task.findById(req.params.id)
    if (!task) return res.status(404).json({message: 'Task not found'})
    res.json(task)
};

export const deleteTask = async (req, res) => {
    await Task.findByIdAndDelete(req.params.id)
    if (!task) return res.status(404).json({message: 'Task not found'})
    res.json(task)
};

export const updateTask = async (req, res) => {
    await Task.findByIdAndUpdate(req.params.id, req.body, { nre: true})
    if (!task) return res.status(404).json({message: 'Task not found'})
    res.json(task)
};

