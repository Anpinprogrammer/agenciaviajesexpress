import Sequelize from "sequelize";
import dotenv from 'dotenv';
dotenv.config();

//Creamos la variable db y una instancia de Sequelize y le pasamos los siguientes parametros
//1. Nombre de la base de datos 
//2. Nombre de usuario de nuestra base de datos que usualmente es root
//3. Contraseña para que pueda acceder a la base de datos que usualmente va vacia 
//4. Agregamos un objeto que va a tener: nombre del host, puerto de la base de datos, dialecto que es mysql y se agrega el define que es una configuracion de sequelize necesaria y copiar todo lo que esta despues del define tal cual se muestra
const db = new Sequelize(process.env.DATABASE_URL, {
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorAliases: false

});

export default db