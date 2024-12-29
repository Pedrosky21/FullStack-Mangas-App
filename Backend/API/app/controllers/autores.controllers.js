const db = require("../providers/sequelize-init.provider")
const Autores = db.Autores;


// Obtener todos los autores
exports.findAll = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1; // Página actual, por defecto 1
        const limit = 10; // Registros por página, por defecto 10

        // Calcular el desplazamiento (offset)
        const offset = (page - 1) * limit;


        let autoresEncontrados = await db.Autores.findAll({
            attributes: [
                "id",
                "nombre",
                "fechaNacimiento"
            ],
            include: [{model: db.Mangas, as: "mangas"}],
            order: [["id", "ASC"]],
            offset: offset,
            limit: limit
        });

        if (autoresEncontrados) {
            res.status(200).json(autoresEncontrados);
        } else {
            res.status(204).send({
                message: "No se encontraron autores"
            });
        }
    } catch (error) {
        res.status(500).send({
            message: error.message || "Ocurrió un error al recuperar los autores"
        });
    }
};


// Obtener 1 autor
exports.findByPk = async (req, res) => {
    const id = req.params.id;

    try {
        let autorEncontrado = await db.Autores.findByPk(
            id, 
            {
                include: [{model: db.Mangas, as: "mangas"}]
            }
        );

        if (autorEncontrado) {
            res.status(200).json(autorEncontrado);
        } else {
            res.status(204).send({
                message: `No se encontró el autor de id ${id}`
            });
        }

    } catch (error) {
        res.status(500).send({
            message: error.message || `Ocurrió un error al recuperar el autor de id ${id}`
        });
    }
};


// Agregar 1 autor
exports.create = async (req, res) => {
    try{
        const {id, nombre, fechaNacimiento} = req.body;

        if (!id || !nombre || !fechaNacimiento ) {
            // Se retorna el error para que deje de ejecutar y de info
            return res.status(400).send({
                message: "El contenido no puede estar vacío"
            });
        }

        const datosAutor = {
            id: id,
            nombre: nombre,
            fechaNacimiento: fechaNacimiento
        };

        let autorCreado = await Autores.create(datosAutor);
        res.status(201).json(autorCreado);

    } catch (error) {
        res.status(500).send({
            message: error.message || "Ocurrió un error al crear el autor"
        });
    }
};


// Editar 1 autor
exports.update = async (req, res) => {
    try {
        const { id, nombre, fechaNacimiento } = req.body;

        if (!id || !nombre || !fechaNacimiento ) {
            return res.status(400).send({
                message: "El contenido no puede estar vacío y todos los campos son obligatorios"
            });
        }

        const datosNuevosAutor = {
            id: id,
            nombre: nombre,
            fechaNacimiento: fechaNacimiento
        };

        let autorModificado = await Autores.update(datosNuevosAutor, {
            where: {id: id}
        });

        if (autorModificado) {
            res.send({
                message: "El autor fue actualizado correctamente"
            })
        } else {
            res.status(400).send({
                message: `No pudo actualizarse el autor de id ${id}. Es posible que no exista`
            });
        }

    } catch (error) {
        res.status(500).send({
            message: error.message || `Ocurrió un error al intentar actualizar el autor de id ${id}`
        });
    }
};


// Eliminar 1 autor
exports.delete = async (req, res) => {
    try {
        const id = req.params.id;

        let autorEliminado = await Autores.destroy({
            where: {id: id}
        })

        if (autorEliminado) {
            res.send("El autor fue eliminado exitosamente");
        } else {
            res.status(400).send(`El autor de id ${id} no puedo eliminarse porque no se encontró`);
        }

    } catch (error) {
        res.status(500).send({
            message: error.message || `Ocurrió un error al intentar eliminar el autor de id ${id}`
        })
    }
};
