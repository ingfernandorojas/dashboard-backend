const service = require('../services/products');


function register(req, res){

    if(
        req.body.idproducto == null ||
        req.body.nombre == null ||
        req.body.stock == null ||
        req.body.costo == null ||
        req.body.precio == null ||
        req.body.iva == null

    ){

        res.status(400).json({
            mensaje: "Faltan campos"
        });

    }else{
        service.registerService(req, function(data){
        
            if(data.affectedRows != 1){
                res.status(400).json({
                    mensaje: "Error al registrar producto"
                });
            }else{

               res.status(200).json({
                    mensaje: "Producto registrado correctamente"
               }); 
            }
           
        });
    }

}

function update(req, res){

    if(

        req.body.idproducto == null ||
        req.body.nombre == null ||
        req.body.stock == null ||
        req.body.costo == null ||
        req.body.precio == null ||
        req.body.iva == null
    ){

        res.status(400).json({
            mensaje: "Faltan campos"
        });

    }else{
        service.updateService(req, function(data){
        
            if(data.affectedRows != 1){
                res.status(400).json({
                    mensaje: "Error al actualizar producto"
                });
            }else{

               res.status(200).json({
                    mensaje: "Producto actualizado correctamente"
               }); 
            }
           
        });
    }

}

function deleteUser(req, res){

        service.deleteService(req, function(data){
        
            if(data.affectedRows != 1){
                res.status(400).json({
                    mensaje: "Error al eliminar producto"
                });
            }else{

               res.status(200).json({
                    mensaje: "Producto eliminado correctamente"
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
