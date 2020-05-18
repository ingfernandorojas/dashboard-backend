const jwt = require('jwt-simple');
const secret = require('../config/secret');

function role(roles = []) {
   
    if (typeof roles === 'string') {
        roles = [roles];
    }

    return [
       
        (req, res, next) => {
           
            var decoded = jwt.decode(req.headers.token, secret);

            if(roles.length && !roles.includes(decoded.role)){
                    
                res.status(401).json({ message: 'Unauthorized' });
                
                return false;

            }

            next();

        }
    ];
}

module.exports = {
    role
}