const express = require('express');
const { listAuditLogs, addAuditLog } = require('../controllers/auditlogController');
const authenticateJWT = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', authenticateJWT, listAuditLogs);
router.post('/', authenticateJWT, addAuditLog);

module.exports = router;
