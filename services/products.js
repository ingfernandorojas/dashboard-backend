const express = require('express');
const mysql = require('../datastore/mysql');

function registerService(data, callback){

    var sql = "INSERT INTO productos VALUES(?,?,?,?,?,?,?,?)";


    mysql.query(sql, 

        [
            data.body.idproducto,
            data.body.nombre,
            data.body.stock,
            data.body.costo,
            data.body.precio,
            data.body.iva,
            getDateTime(),
            getDateTime(),
        ], 
        
        function (error, results) {

        if (error) throw error;
        
        return callback(results);
        

    });

}

function updateService(data, callback){

    var sql = "UPDATE productos SET nombre = ?, stock = ?, costo = ?, precio = ?, iva = ?, updatedAt = ? WHERE idproducto = ?";


    mysql.query(sql, 

        [
            data.body.nombre,
            data.body.stock,
            data.body.costo,
            data.body.precio,
            data.body.iva,
            getDateTime(),
            data.body.idproducto
        ], 
        
        function (error, results) {

        if (error) throw error;
        
        return callback(results);
        

    });

}

function deleteService(data, callback){

    var sql = "DELETE FROM productos WHERE idproducto = ?";


    mysql.query(sql, 

        [
            data.params.idproducto
        ], 
        
        function (error, results) {

        if (error) throw error;
        
        return callback(results);
        

    });

}

// La llamada debe realizarse de la siguiente manera
// Si queremos todos los datos => /product/admin/getAllProducts/nosearch
// Si queremos buscar => /product/admin/getAllProducts/terminoDeBusqueda

function getAllService(data, callback){

	if(data.params.search == "nosearch"){
		var sql = "SELECT * FROM productos";
		mysql.query(sql, 
        
        function (error, results) {

        if (error) throw error;
        
        return callback(results);
        

    	});
	}else{
		var sql = "SELECT * FROM productos WHERE idproducto LIKE ? OR nombre LIKE ?";
		mysql.query(sql, 
        [
            '%'+data.params.search+'%',
            '%'+data.params.search+'%'
        ],
        function (error, results) {

        if (error) throw error;
        
        return callback(results);
        

    	});
	}

    

}


function getOneService(data, callback){

		var sql = "SELECT * FROM productos WHERE idproducto = ?";
		mysql.query(sql, 
        [
            data.params.idproducto
        ],
        function (error, results) {

        if (error) throw error;
        
        return callback(results);
        

    	});

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
    getAllService,
    getOneService
}
