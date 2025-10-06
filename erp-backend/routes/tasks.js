const express = require('express');
const { listTasks, addTask, updateTask, deleteTask } = require('../controllers/taskController');
const authenticateJWT = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', authenticateJWT, listTasks);
router.post('/', authenticateJWT, addTask);
router.put('/:id', authenticateJWT, updateTask);
router.delete('/:id', authenticateJWT, deleteTask);

module.exports = router;
