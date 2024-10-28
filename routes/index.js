import express from 'express';
import { 
    paginaInicio, 
    paginaNostros, 
    paginaViajes, 
    paginaTestimoniales, 
    paginaDetalleViaje } from '../controllers/paginasController.js';

import { guardarTestimonial } from '../controllers/testimonialController.js';    

const router = express.Router();//Se usa la misma instancia de express pero se esta extendiendo o usando su router

//Utilizamos la peticion get 
router.get('/', paginaInicio);

router.get('/nosotros', paginaNostros);

router.get('/viajes', paginaViajes);
router.get('/viajes/:slug', paginaDetalleViaje);//Se crea un comodin para almacenar dinamicamente los detalles de los viajes

router.get('/testimoniales', paginaTestimoniales);
router.post('/testimoniales', guardarTestimonial);//La usamos con el metodo post para recibir la informacion que enviamos desde el formulario

export default router;