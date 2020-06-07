const express = require('express');
const router = express.Router();
const products = require('../controllers/products')
const verifyJWT = require ('../middlewares/jwt');
const verifyRole = require('../middlewares/role');
const roles = require('../config/roles');


router.post('/admin/registerProduct', verifyJWT.verifyJWT, verifyRole.role(roles.admin), products.register);
router.put('/admin/updateProduct', verifyJWT.verifyJWT, verifyRole.role(roles.admin), products.update);
router.delete('/admin/deleteProduct/:idproducto', verifyJWT.verifyJWT, verifyRole.role(roles.admin), products.deleteUser);
router.get('/admin/getAllProducts/:search', verifyJWT.verifyJWT, verifyRole.role(roles.admin), products.getAll);
router.get('/user/getOneProduct/:idproducto', verifyJWT.verifyJWT, verifyRole.role([roles.user, roles.admin]), products.getOne);


module.exports = router;
