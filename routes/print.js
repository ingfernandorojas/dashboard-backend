const express = require('express');
const router = express.Router();
const print = require('../controllers/print')

const verifyJWT = require ('../middlewares/jwt');
const verifyRole = require('../middlewares/role');
const roles = require('../config/roles');


router.post('/print', print.print);


module.exports = router;