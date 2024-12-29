const db = require("../providers/sequelize-init.provider");
const Mangas = db.Mangas;

// Para los filtros del findAll
const { Op } = require("sequelize");

// Obtener todos los mangas
exports.findAll = async (req, res) => {
    try {
        // Logica filtrado
        let where = {}

        if (req.query.titulo != undefined && req.query.titulo !== "") {
            where.titulo = {
                [Op.like]: "%" + req.query.titulo + "%"
            };
        }

        if (req.query.autor != undefined && req.query.autor !== "") {
            where.autor = {
                [Op.eq]: req.query.autor
            };
        }

        if (req.query.estado != undefined && req.query.estado !== "") {
            where.estado = {
                [Op.eq]: req.query.estado
            }
        }

        if (req.query.genero != undefined && req.query.genero !== "") {
            where.genero = {
                [Op.eq]: req.query.genero
            }
        }
        // ------- Fin de filtrado

        // Logica paginacion
        const page = parseInt(req.query.page) || 1; // Página actual, por defecto 1
        const limit = 8; // Registros por página, por defecto 8

        // Calcular el desplazamiento (offset)
        const offset = (page - 1) * limit;
        // -------- Fin de paginacion

        let mangasEncontrados = await db.Mangas.findAll({
            attributes: [
                "id",
                "titulo",
                "fechaLanzamiento",
                "tomos",
                "estado",
                "genero",
                "autor",
                "img_url"
            ],
            order: [["titulo", "ASC"]],
            offset: offset,
            limit: limit,
            where
        });

        if (mangasEncontrados) {

            // Se cambia la URL de las imagenes antes de devolverlas
            const baseURL = `${process.env.url}:${process.env.port}/images/`;
            const mangasConURLsModificadas = mangasEncontrados.map(manga => {
                return {
                    ...manga.dataValues, // Extraer los valores del registro
                    img_url: manga.img_url ? `${baseURL}${manga.img_url}` : null // Construir la URL completa
                };
            });

            res.status(200).json(mangasConURLsModificadas);

        } else {
            res.status(204).send({
                message: "No se encontraron mangas"
            });
        }
    } catch (error) {
        res.status(500).send({
            message: error.message || "Ocurrió un error al recuperar los mangas"
        });
    }
};


// Obtener 1 manga
exports.findByPk = async (req, res) => {
    try {
        const id = req.params.id;

        let mangaEncontrado = await Mangas.findByPk(id);

        if (mangaEncontrado) {
            res.status(200).json(mangaEncontrado);
        } else {
            res.status(404).send({
                message: `El manga de id ${id} no fue encontrado`
            });
        }

    } catch (error) {
        res.status(500).send({
            message: error.message
        });
    }
};


// Agregar 1 manga
exports.create = async (req, res) => {
    try {
        console.log(req.body);
        const {titulo, fechaLanzamiento, tomos, estado, genero, autor} = req.body

        if (!titulo) {
            return res.status(400).send({ message: "El campo 'titulo' es obligatorio" });
        }
        if (!fechaLanzamiento) {
            return res.status(400).send({ message: "El campo 'fechaLanzamiento' es obligatorio" });
        }
        if (!tomos) {
            return res.status(400).send({ message: "El campo 'tomos' es obligatorio" });
        }
        if (!estado) {
            return res.status(400).send({ message: "El campo 'estado' es obligatorio" });
        }
        if (!genero) {
            return res.status(400).send({ message: "El campo 'genero' es obligatorio" });
        }

        const datosManga = {
            titulo: titulo,
            fechaLanzamiento: fechaLanzamiento,
            tomos: tomos,
            estado: estado,
            genero: genero,
            autor: autor,
            img_url: `${titulo.replace(/ /g, "").toLowerCase()}.jpg`
        }

        let mangaCreado = await Mangas.create(datosManga);
        res.status(201).json(mangaCreado);

    } catch (error) {
        res.status(500).send({
            message: error.message || "Ocurrió un error al intentar crear el manga"
        });
    }
}


// Modificar 1 manga
exports.update = async (req, res) => {
    try {
        const {id, titulo, fechaLanzamiento, tomos, estado, genero, autor} = req.body

        if (!id || !titulo || !fechaLanzamiento || !tomos || !estado || !genero ) {
            return res.status(400).send({
                message: "Los campos id, titulo, fecha de lanzamiento, tomos, estado y genero son obligatorios"
            })
        }

        const datosManga = {
            id: id,
            titulo: titulo,
            fechaLanzamiento: fechaLanzamiento,
            tomos: tomos,
            estado: estado,
            genero: genero,
            autor: autor,
            img_url: `${titulo.replace(/ /g, "").toLowerCase()}${id}.jpg`
        }

        mangaActualizado = await Mangas.update(datosManga, {
            where: {id: id}
        });
        
        if (mangaActualizado) {
            res.send({
                message: `El manga de id ${id} fue actualizado exitosamente`
            })
        } else {
            return res.status(400).send({
                message: `No pudo actualizarse el manga de id ${id}. Es posible que no exista`
            })
        }

    } catch (error) {
        res.status(500).send({
            message: error.message || `Ocurrió un error al intentar modificar el manga de id ${id}`
        });
    }
}


// Eliminar 1 manga
exports.delete = async (req, res) => {
    try {
        const id = req.params.id;

        let mangaEliminado = await Mangas.destroy({
            where: {id: id}
        });

        if (mangaEliminado) {
            res.status(200).send({
                message: "El manga fue eliminado exitosamente"
            });
        } else {
            res.status(400).send({
                message: "El manga no puedo eliminarse porque no se encontró"
            });
        }

    } catch (error) {
        res.status(500).send({
            message: error.message || `Ocurrió un error al intentar eliminar el manga de id ${id}`
        });
    }
}
