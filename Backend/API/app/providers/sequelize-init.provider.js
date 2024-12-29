const Sequelize = require("sequelize");

const AutoresModel = require("../models/autores.model");
const MangasModel = require("../models/mangas.model");
const EstadosModel = require("../models/estados.model");
const GenerosModel = require("../models/generos.model");

const sequelize = new Sequelize("sqlite:" + process.env.database);

const Autores = AutoresModel(sequelize);
const Mangas = MangasModel(sequelize);
const Estados = EstadosModel(sequelize);
const Generos = GenerosModel(sequelize);

Autores.hasMany(Mangas, {foreignKey: 'autor', as: 'mangas'});
Mangas.belongsTo(Autores, {foreignKey: 'autor', as: 'autor_id'})

Estados.hasMany(Mangas, {foreignKey: 'estado', as: 'mangas'});
Mangas.belongsTo(Estados, {foreignKey: 'estado', as: 'estado_id'});

Generos.hasMany(Mangas, {foreignKey: 'genero', as: 'mangas'});
Mangas.belongsTo(Generos, {foreignKey: 'genero', as: 'genero_id'});

const iniciar = async(reset=false) => {
    try {
        await sequelize.sync({force: reset});
        console.log("Base de datos inicializada");
        if (reset) {
            /*
            Si se quisiera hacer una logica al resetear db
            await crearDatos()
            */
        }
    } catch (error) {
        console.log("Error en la base de datos" + error);
    }
};

const db = {iniciar, Autores, Mangas, Estados, Generos};
module.exports = db;