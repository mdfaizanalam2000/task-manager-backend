const express = require("express");
const router = express.Router();
const Task = require("./models/TaskSchema");

router.post("/addTask", async (req, res) => {
    try {
        const task = new Task(req.body);
        const response = await task.save();
        res.send(response);
    } catch (error) {
        res.status(500).send(error)
    }
})

router.get("/getTasks", async (req, res) => {
    try {
        const response = await Task.find();
        res.send(response);
    } catch (error) {
        res.status(500).send(error)
    }
})

router.put("/editTask", async (req, res) => {
    try {
        const id = req.header("task-id");
        const response = await Task.findByIdAndUpdate(id, req.body);
        res.send(response);
    } catch (error) {
        res.status(500).send(error)
    }
})

router.delete("/deleteTask", async (req, res) => {
    try {
        const id = req.header("task-id");
        const response = await Task.findByIdAndDelete(id);
        res.send(response);
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router;