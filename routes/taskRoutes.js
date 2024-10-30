// backend/routes/taskRoutes.js
const express = require('express');
const { createTask, getTasks, updateTask, deleteTask } = require('../controllers/taskController.js');
const { authMiddleware } = require('../middleware/authMiddleware.js');
const router = express.Router();

router.post('/', authMiddleware, createTask);
router.get('/', authMiddleware, getTasks);
router.put('/:id', authMiddleware, updateTask);
router.delete('/:id', authMiddleware, deleteTask);

module.exports = router;
