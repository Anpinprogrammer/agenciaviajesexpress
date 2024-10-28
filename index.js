/*const express = require('express');Le decimos que traiga express del paquete que se ha instalado, esto es common.js*/
import express from 'express';//"type" : "module" en package.json
import router from './routes/index.js';
import db from './config/db.js';//Importamos el archivo que tiene la informacion para acceder a la base de datos 


const app = express();

//Conectar a la base de datos 
db.authenticate()
    .then( () => console.log('Base de datos conectada') )
    .catch( error => console.log(error) );

//Definir puerto
const port = process.env.PORT || 4000;//Variable de entorno

//Habilitar pug
app.set('view engine', 'pug');

//Creamos nuestro propio middleware
//Obtener el año actual
app.use( (req, res, next) => {
    const year = new Date();
    res.locals.currentYear = year.getFullYear(); //locals es un objeto que pertenece a la respuesta de la peticion 
    res.locals.nombreSitio = "Agencia de Viajes";
    return next();//para que se vaya al siguiente middleware
} )

//Agregar body parser para leer los datos del formulario
app.use(express.urlencoded({extend: true}));

//Definir la carpeta publica
app.use(express.static('public'));

//Agregar router
app.use('/', router);//.use soporta todos los verbos como get, post, patch, delete

app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`);
});