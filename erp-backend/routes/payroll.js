const express = require('express');
const { listPayroll, addPayroll, updatePayroll, deletePayroll } = require('../controllers/payrollController');
const authenticateJWT = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', authenticateJWT, listPayroll);
router.post('/', authenticateJWT, addPayroll);
router.put('/:id', authenticateJWT, updatePayroll);
router.delete('/:id', authenticateJWT, deletePayroll);

module.exports = router;
