var express = require('express');
var body = require('body-parser'); 
var app = express();

// CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, token");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
    next();
});

// Body parser
// parse application/x-www-form-urlencoded
app.use(body.urlencoded({ extended: false }));
app.use(body.json());

// Rutas
app.use('/', require('./routes/index'));
app.use('/user', require('./routes/login'));
app.use('/user', require('./routes/users'));
app.use('/product', require('./routes/products'));

app.listen(3000, ()=> {
    console.log('Express corriendo en el puerto 3000');
})
