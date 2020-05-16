const express = require('express');
const router = express.Router();

router.get('/', index);

module.exports = router;

function index(req, res){
    res.status(200).json({
        mensaje: "Nodejs con Mysql"
    });
}