import { Viaje } from '../models/Viaje.js';

import { Testimonial } from '../models/Testimoniales.js';

const paginaInicio = async (req, res) => {
    //Cosultar 3 viajes del modelo Viaje

    const promiseDB = [];//Utilizamos el promise para ejecutar las dos consutas a la base de datos al tiempo

    promiseDB.push( Viaje.findAll({ limit: 3 }) );//Limitamos el array a solo tres elementos 
    promiseDB.push( Testimonial.findAll({ limit: 3 }) );


    try {
        const resultado = await Promise.all( promiseDB );

        res.render('inicio', {
            pagina: 'Inicio', 
            clase: 'home',
            viajes: resultado[0],
            testimoniales: resultado[1]
        });
    } catch (error) {
        console.log(error);
    }

    
    /*.send: Se utiliza para mostrar algo en la pantalla*/
    /*.json: Retorna una respuesta tipo JSON*/
    /*.render: Muestra una vista*/
}//req es lo que solicitamos y res es lo que responde el sistema o lo que nosotros le asignemos a la respuesta

const paginaNostros = (req, res) => {

    res.render('nosotros', {
       pagina: 'Nosotros'
    });
}

const paginaViajes = async (req, res) => {

    //Consultar BD
    const viajes = await Viaje.findAll();//trae todos los datos de la tabla 

    res.render('viajes', {
       pagina: 'Proximos Viajes',
       viajes, /*Le pasamos la variable viajes a la vista*/
    });
}

const paginaTestimoniales = async (req, res) => {

    try {
        // Consulta los testimoniales de la BD
        const testimoniales = await Testimonial.findAll();

        res.render('testimoniales', {
           pagina: 'Testimoniales',
           testimoniales
        });
    } catch (error) {
        console.log(error);
    }
    
}

//Muestra cada viaje por su slug
const paginaDetalleViaje = async (req, res) => {
    const { slug } = req.params;/*Utilizamos la variable viaje porque asi la definimos en el comodin del router*/

    try {
        const viaje = await Viaje.findOne({ where : {slug} });/*Objeto slug : slug*/

        res.render('viaje', {
            pagina: 'Informacion Viaje',
            viaje
        })
    } catch (error) {
        console.log(error);
    }
}



export {
    paginaInicio, 
    paginaNostros,
    paginaViajes,
    paginaDetalleViaje,
    paginaTestimoniales
}