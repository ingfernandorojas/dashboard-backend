const express = require('express');
const router = express.Router();
const users = require('../controllers/users')
const verifyJWT = require ('../middlewares/jwt');
const verifyRole = require('../middlewares/role');
const roles = require('../config/roles');


router.post('/register', verifyJWT.verifyJWT, verifyRole.role(roles.admin), users.register);
router.put('/admin/updateUser', verifyJWT.verifyJWT, verifyRole.role(roles.admin), users.update);
router.delete('/admin/deleteUser', verifyJWT.verifyJWT, verifyRole.role(roles.admin), users.deleteUser);
router.get('/getAll', verifyJWT.verifyJWT, verifyRole.role(roles.admin), users.getAll);


module.exports = router;