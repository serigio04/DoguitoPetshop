const listaClientes = () =>
  fetch("http://localhost:3000/perfil").then((respuesta) => respuesta.json());

const crearCliente = (nombre, email) => {
  return fetch("http://localhost:3000/perfil", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nombre, email, id: uuid.v4() }),
  });
};

const eliminarCliente = (id) => {
  return fetch(`http://localhost:3000/perfil/${id}`, {
    method: "DELETE",
  });
};

export const clientServices = {
  listaClientes,
  crearCliente,
  eliminarCliente,
};

// const listaClientes = () => {
//   const promise = new Promise((resolve, reject) => {
//     const http = new XMLHttpRequest();
//     http.open("GET", "http://localhost:3000/perfiles");

//     http.send();

//     http.onload = () => {
//       const response = JSON.parse(http.response);
//       if (http.status >= 400) {
//         reject(response);
//       } else {
//         resolve(response);
//       }
//     };
//   });
//   return promise;
// };