const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');
const path = require('path');

app.use(cors());
app.use(express.static('public')); // Sirve archivos estáticos desde la carpeta 'public'

app.use(express.json());

app.post('/agregarMascota', (req, res) => {
  const { name, edad, img } = req.body;

  // Crear objeto de mascota
  const mascota = {
    name,
    edad,
    img,
  };

  // Convertir el objeto a JSON
  const mascotaJSON = JSON.stringify(mascota);

  // Ruta donde se almacenará el archivo
  const rutaArchivo = path.join(__dirname, 'public', 'mascotas.json');

  // Escribir en el archivo
  fs.appendFileSync(rutaArchivo, `${mascotaJSON}\n`);

  res.json({ mensaje: 'Mascota agregada exitosamente' });
});

const puerto = 4000;
app.listen(puerto, () => {
  console.log(`Servidor escuchando en http://localhost:${puerto}`);
});