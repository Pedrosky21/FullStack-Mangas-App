const db = require("../providers/sequelize-init.provider");
const Estados = db.Estados;

// Obtener todos los estados
exports.findAll = async (req, res) => {
    try {
        let estadosEncontrados = await Estados.findAll({
            attributes: [
                "id",
                "nombre"
            ]
        })

        if (estadosEncontrados) {
            res.status(200).json(estadosEncontrados);
        } else {
            res.status(204).send({
                message: "No se encontraron estados"
            });
        }

    } catch (error) {
        res.status(500).send({
            message: error.message || "Ocurrió un error al recuperar los estados"
        });
    }
}