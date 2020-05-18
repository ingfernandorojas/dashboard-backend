const service = require('../services/login');
const jwt = require('jsonwebtoken');
const secret = require('../config/secret');

function login(req, res){

    service.loginService(req, function(data){
        
        if(data.length == 0){
            res.status(401).json({
                mensaje: "Combinación de email y contraseña incorrecto"
            });
        }else{

            var token = jwt.sign({
                nombre: data[0].nombre,
                apellido: data[0].apellido,
                username: data[0].username,
                email: data[0].email,
                role: data[0].role,
                createdAt: data[0].createdAt,
                updatedAt: data[0].updatedAt
            }, secret, { expiresIn: '1h' });


           res.status(200).json({
                token: token
           }); 
        }
       
    });

}

module.exports = {
    login
}