const jwt = require('jsonwebtoken');
const secret = require('../config/secret');

function verifyJWT(req, res, next){

    jwt.verify(req.headers.token, secret, function(err, decoded) {
        
        if(err){
            res.status(401).json({
                message: err
            });
            
            return false
        }
        
        next();
    });

}

module.exports = {
    verifyJWT
}