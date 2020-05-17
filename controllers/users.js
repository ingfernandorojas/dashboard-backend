const service = require('../services/users');


function register(req, res){

    if(

        req.body.nombre == null ||
        req.body.apellido == null ||
        req.body.email == null ||
        req.body.password == null ||
        req.body.role == null

    ){

        res.status(400).json({
            mensaje: "Faltan campos"
        });

    }else{
        service.registerService(req, function(data){
        
            if(data.affectedRows != 1){
                res.status(400).json({
                    mensaje: "Error al registrar usuario"
                });
            }else{
    
    
               res.status(200).json({
                    mensaje: "Usuario registrado correctamente"
               }); 
            }
           
        });
    }

}

module.exports = {
    register
}