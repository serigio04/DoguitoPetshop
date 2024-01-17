const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');
const path = require('path');

app.use(cors());
app.use(express.static('public'));

app.use(express.json());

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.post('/agregarPet', (req, res) => {
  try{
    const { name, edad, img } = req.body;
    const mascota = {
      name,
      edad,
      img,
    };
    const mascotaJSON = JSON.stringify(mascota);
    const rutaArchivo = path.join(__dirname, 'public', 'mascotas.json');
    fs.appendFileSync(rutaArchivo, `${mascotaJSON}\n`);
    res.status(200).json({ message: 'Mascota agregada correctamente' });
  } catch (error){
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }

});

const puerto = 5500;
app.listen(puerto, () => {
  console.log(`Servidor escuchando en http://localhost:${puerto}`);
});
