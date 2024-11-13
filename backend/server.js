const express = require('express');
const db = require('./db'); // Conexión a la base de datos desde db.js
require('dotenv').config(); // Cargar las variables de entorno desde .env

const app = express();
app.use(express.json()); // Permite el manejo de JSON en las solicitudes

// Ruta para obtener todos los animales
app.get('/api/animales', (req, res) => {
    db.query('SELECT * FROM Animales', (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Error al obtener los animales' });
        } else {
            res.json(results);
        }
    });
});

// Ruta para agregar un nuevo animal
app.post('/api/animales', (req, res) => {
    const { Nombre, Raza, Edad, Descripcion, Foto, Peso, Tamaño, Vacunado, Esterilizado, ID_Refugio, ID_Usuario } = req.body;
    const query = 'INSERT INTO Animales (Nombre, Raza, Edad, Descripcion, Foto, Peso, Tamaño, Vacunado, Esterilizado, ID_Refugio, ID_Usuario) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    db.query(query, [Nombre, Raza, Edad, Descripcion, Foto, Peso, Tamaño, Vacunado, Esterilizado, ID_Refugio, ID_Usuario], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Error al agregar el animal' });
        } else {
            res.json({ id: result.insertId, message: 'Animal agregado correctamente.' });
        }
    });
});

// Iniciar el servidor en el puerto especificado en el archivo .env o en el puerto 3001 por defecto
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
