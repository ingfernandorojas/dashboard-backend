const express = require('express');
const mysql = require('../datastore/mysql');

function loginService(data, callback){

    var sql = "SELECT * FROM usuarios WHERE email = ? AND password = ?";


    mysql.query(sql, [data.body.email, data.body.password], function (error, results) {

        if (error) throw error;
        
        return callback(results);
        

    });



}

module.exports = {
    loginService
}