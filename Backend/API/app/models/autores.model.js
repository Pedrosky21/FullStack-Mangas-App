const { DataTypes, Model } = require("sequelize");

class Autores extends Model {}

const autores = (sequelize) => {
    return Autores.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nombre: {
                type: DataTypes.STRING
            },
            fechaNacimiento: {
                type: DataTypes.DATE
            }
        },
        {
            sequelize,
            modelName: "Autores",
            tableName: "autor",
            timestamps: false
        }
    )
};

module.exports = autores;