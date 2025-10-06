const express = require('express');
const { listLeave, addLeave } = require('../controllers/leaveController');
const authenticateJWT = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', authenticateJWT, listLeave);
router.post('/', authenticateJWT, addLeave);

module.exports = router;
