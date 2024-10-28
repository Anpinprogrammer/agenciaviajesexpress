import Sequelize from "sequelize";
import db from '../config/db.js';//Lo necesitamos porque db tiene una instancia de Sequelize 

export const Testimonial = db.define('testimoniales', {
    nombre: {
       type: Sequelize.STRING /*Le decimos que tipo de dato tiene lo que estamos extrayendo*/
    },
    correo: {
        type: Sequelize.STRING/*Podria ser de tipo numero, pero lo dejamos como string tambien*/
    },
    mensaje: {
        type: Sequelize.STRING
    }

});//Aqui traemos toda la informacion de la base de datos