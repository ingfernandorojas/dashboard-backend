var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'admin',
  password : '123',
  database : 'node'
});

module.exports = connection;