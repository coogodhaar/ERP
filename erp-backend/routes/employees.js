const express = require('express');
const { listEmployees, addEmployee, updateEmployee, deleteEmployee } = require('../controllers/employeeController');
const authenticateJWT = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', authenticateJWT, listEmployees);
router.post('/', authenticateJWT, addEmployee);
router.put('/:id', authenticateJWT, updateEmployee);
router.delete('/:id', authenticateJWT, deleteEmployee);

module.exports = router;
