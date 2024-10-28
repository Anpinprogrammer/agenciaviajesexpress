import { Testimonial } from "../models/Testimoniales.js";

const guardarTestimonial = async (req, res) => {
    //Validacion del formulario

    const { nombre, correo, mensaje } = req.body;

    const errores = [];

    if(nombre.trim() === '') {
        errores.push({mensaje: 'El nombre esta vacio'});
    }

    if(correo.trim() === '') {
        errores.push({mensaje: 'El correo esta vacio'});
    }

    if(mensaje.trim() === '') {
        errores.push({mensaje: 'El mensaje esta vacio'});
    }

    if(errores.length > 0) {
        // Consulta los testimoniales de la BD
        const testimoniales = await Testimonial.findAll();

        //Muestra la vista con errores
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            errores,
            nombre,
            correo, 
            mensaje,
            testimoniales
        })
    } else {
        //Almacena la informacion en la base de datos usando el metodo post 

        try {
            await Testimonial.create({
                nombre, 
                correo, 
                mensaje
            });

            res.redirect('/testimoniales');
        } catch (error) {
            console.log(error);
        }
    }
        
}

export {
    guardarTestimonial
}