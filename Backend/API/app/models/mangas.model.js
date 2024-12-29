const { DataTypes, Model } = require("sequelize");

class Mangas extends Model {}

const mangas = (sequelize) => {
    return Mangas.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            titulo: {
                type: DataTypes.STRING
            },
            fechaLanzamiento: {
                type: DataTypes.DATE
            },
            tomos: {
                type: DataTypes.INTEGER
            },
            estado: {
                type: DataTypes.INTEGER
            },
            genero: {
                type: DataTypes.INTEGER
            },
            autor: {
                type: DataTypes.INTEGER
            },
            img_url: {
                type: DataTypes.STRING
            }
        },
        {
            sequelize,
            modelName: "Mangas",
            tableName: "mangas",
            timestamps: false
        }
    )
};

module.exports = mangas;