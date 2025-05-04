const express = require('express')
const router = express.Router()

const {taskController } = require('../Controllers')


router.get('/tasks/', taskController.getAllTask)

router.delete('/tasks/:id', taskController.deleteTask);

router.post('/tasks', taskController.createTask)

router.put('/tasks/:id', taskController.updateTask);

module.exports = router;