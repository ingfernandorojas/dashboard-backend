const express = require('express');
const mysql = require('../datastore/mysql');

function registerService(data, callback){

    var sql = "INSERT INTO usuarios VALUES(?,?,?,?,?,?,?,?,?,?)";


    mysql.query(sql, 

        [
            null,
            data.body.nombre,
            data.body.apellido,
            data.body.email,
            username(),
            data.body.password,
            data.body.role,
            getDateTime(),
            getDateTime(),
            1
        ], 
        
        function (error, results) {

        if (error) throw error;
        
        return callback(results);
        

    });

}

function updateService(data, callback){

    var sql = "UPDATE usuarios SET nombre = ?, apellido = ?, email = ?, password = ?, role = ?, updatedAt = ?, active = ? WHERE username = ?";


    mysql.query(sql, 

        [
            data.body.nombre,
            data.body.apellido,
            data.body.email,
            data.body.password,
            data.body.role,
            getDateTime(),
            1,
            data.body.username
        ], 
        
        function (error, results) {

        if (error) throw error;
        
        return callback(results);
        

    });

}

function deleteService(data, callback){

    var sql = "DELETE FROM usuarios WHERE username = ?";


    mysql.query(sql, 

        [
            data.params.username
        ], 
        
        function (error, results) {

        if (error) throw error;
        
        return callback(results);
        

    });

}

function getAllService(data, callback){

    var sql = "SELECT nombre,apellido,email,username,role FROM usuarios";


    mysql.query(sql, 
        
        function (error, results) {

        if (error) throw error;
        
        return callback(results);
        

    });

}

function username(){

    var rand = Math.floor(Math.random() * 10000000);

    return 'user'+rand;

}

function getDateTime() {

    var date = new Date();

    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;

    var min  = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;

    var sec  = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;

    var year = date.getFullYear();

    var month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;

    var day  = date.getDate();
    day = (day < 10 ? "0" : "") + day;

    return year + ":" + month + ":" + day + ":" + hour + ":" + min + ":" + sec;

}

module.exports = {
    registerService,
    updateService,
    deleteService,
    getAllService
}
