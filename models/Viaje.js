import Sequelize from "sequelize";
import db from '../config/db.js';//Lo necesitamos porque db tiene una instancia de Sequelize 

export const Viaje = db.define('viajes', {
    titulo: {
       type: Sequelize.STRING /*Le decimos que tipo de dato tiene lo que estamos extrayendo*/
    },
    precio: {
        type: Sequelize.STRING/*Podria ser de tipo numero, pero lo dejamos como string tambien*/
    },
    fecha_ida: {
        type: Sequelize.DATE
    },
    fecha_vuelta: {
        type: Sequelize.DATE
    },
    imagen: {
        type: Sequelize.STRING
    },
    descripcion: {
      type: Sequelize.STRING
    },
    disponibles: {
        type: Sequelize.STRING
    },
    slug: {
        type: Sequelize.STRING
    }

});//Aqui traemos toda la informacion de la base de datos