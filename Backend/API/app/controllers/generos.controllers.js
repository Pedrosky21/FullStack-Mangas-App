const db = require("../providers/sequelize-init.provider");
const Generos = db.Generos;

exports.findAll = async (req, res) => {
    try {
        let generosEncontrados = await Generos.findAll({
            attributes: [
                "id",
                "nombre"
            ]
        });

        if (generosEncontrados) {
            res.status(200).json(generosEncontrados);
        } else {
            res.status(204).send({
                message: 'No se encontraron generos'
            });
        }

    } catch (error) {
        res.status(500).send({
            message: error.message || 'Ocurrio un error al obtener los generos'
        });
    }
}
