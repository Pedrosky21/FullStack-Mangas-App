const { DataTypes, Model } = require("sequelize");

class Generos extends Model {}

const generos = (sequelize) => {
    return Generos.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nombre: {
                type: DataTypes.STRING
            }
        },
        {
            sequelize,
            modelName: "Generos",
            tableName: "genero",
            timestamps: false
        }
    )
}

module.exports = generos;