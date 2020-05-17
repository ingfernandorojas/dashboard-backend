const express = require('express');
const router = express.Router();
const users = require('../controllers/users')
const verifyJWT = require ('../middlewares/jwt');


router.post('/register', verifyJWT.verifyJWT, users.register);


module.exports = router;