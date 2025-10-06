const express = require('express');
const { listDocuments, addDocument } = require('../controllers/documentsController');
const authenticateJWT = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', authenticateJWT, listDocuments);
router.post('/', authenticateJWT, addDocument);

module.exports = router;
