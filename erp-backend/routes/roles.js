const express = require('express');
const { listRoles, addRole, updateRole, deleteRole } = require('../controllers/rolesController');
const authenticateJWT = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', authenticateJWT, listRoles);
router.post('/', authenticateJWT, addRole);
router.put('/:id', authenticateJWT, updateRole);
router.delete('/:id', authenticateJWT, deleteRole);

module.exports = router;
