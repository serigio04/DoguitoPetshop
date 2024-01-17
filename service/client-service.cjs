const express = require('express');
const app = express();

const { v4: uuid } = require('uuid');

app.use((req, res, next) => {
  if (req.url.endsWith('.js')) {
    res.type('application/javascript');
  }
  next();
});

const listaClientes = () => fetch("http://localhost:3300/perfil").then((respuesta) => respuesta.json());

const crearCliente = (nombre, email) => {
  return fetch("http://localhost:3300/perfil", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nombre, email, id: uuid() }),
  });
};

const eliminarCliente = (id) => {
  return fetch(`http://localhost:3300/perfil/${id}`, {
    method: "DELETE",
  });
};

module.exports = {
  listaClientes,
  crearCliente,
  eliminarCliente,
};

const puerto = 3300;
app.listen(puerto, () => {
  console.log(`Servidor escuchando en http://localhost:${puerto}`);
});