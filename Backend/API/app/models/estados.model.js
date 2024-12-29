const { DataTypes, Model } = require("sequelize");

class Estados extends Model {}

const estados = (sequelize) => {
    return Estados.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            estado: {
                type: DataTypes.STRING
            }
        },
        {
            sequelize,
            modelName: "Estados",
            tableName: "estado",
            timestamps: false
        }
    )
}

module.exports = estados;