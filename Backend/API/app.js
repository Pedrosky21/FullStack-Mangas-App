const express = require('express');
const cors = require('cors');

// Leer archivo de configuración
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

const db = require('./app/providers/sequelize-init.provider');

const autoresRoutes = require('./app/routes/autores.routes');
const mangasRoutes = require('./app/routes/mangas.routes');
const estadosRoutes = require('./app/routes/estados.routes');
const generosRoutes = require('./app/routes/generos.routes');

// Configuracion de rutas
app.use('/api/autores', autoresRoutes);
app.use('/api/mangas', mangasRoutes);
app.use('/api/estados', estadosRoutes);
app.use('/api/generos', generosRoutes);

// Retorno de imagenes
app.use('/images', express.static(process.env.images));

// Inicio del servidor
const port = process.env.port;
app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${port}`);
});

module.exports = app;
