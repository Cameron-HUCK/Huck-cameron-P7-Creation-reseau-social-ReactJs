// Route creation and user connection
const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
// get email to userId
router.get('/email', userCtrl.getUserEmail);

module.exports = router;