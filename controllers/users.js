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

function update(req, res){

    if(

        req.body.nombre == null ||
        req.body.apellido == null ||
        req.body.email == null ||
        req.body.password == null ||
        req.body.role == null ||
        req.body.active == null ||
        req.body.username == null 

    ){

        res.status(400).json({
            mensaje: "Faltan campos"
        });

    }else{
        service.updateService(req, function(data){
        
            if(data.affectedRows != 1){
                res.status(400).json({
                    mensaje: "Error al actualizar usuario"
                });
            }else{

               res.status(200).json({
                    mensaje: "Usuario actualizado correctamente"
               }); 
            }
           
        });
    }

}

function deleteUser(req, res){

        service.deleteService(req, function(data){
        
            if(data.affectedRows != 1){
                res.status(400).json({
                    mensaje: "Error al eliminar usuario"
                });
            }else{

               res.status(200).json({
                    mensaje: "Usuario eliminado correctamente"
               }); 
            }
           
        });
    

}

function getAll(req,res){

    service.getAllService(req, function(data){

        res.json({data: data})

    });

}

module.exports = {
    register,
    update,
    deleteUser,
    getAll
}
