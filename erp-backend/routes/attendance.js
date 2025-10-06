const express = require('express');
const { listAttendance, addAttendance } = require('../controllers/attendanceController');
const authenticateJWT = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', authenticateJWT, listAttendance);
router.post('/', authenticateJWT, addAttendance);

module.exports = router;
