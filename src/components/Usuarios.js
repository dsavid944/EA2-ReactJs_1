import React, { useState, useEffect } from "react";
import { getUsuarios, createUsuario } from "../services/UsuariosService"; // Importar funciones de servicio de la API

const Usuario = () => {
  const [usuarios, setUsuarios] = useState([]); // Estado local para almacenar la lista de usuarios
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [estado, setEstado] = useState(true);

  useEffect(() => {
    // Cargar la lista de usuarios al montar el componente
    fetchUsuarios();
  }, []);

  const fetchUsuarios = () => {
    // Llamar a la función de servicio para obtener la lista de usuarios
    getUsuarios(estado)
      .then((response) => {
        setUsuarios(response.data); // Actualizar el estado local con la lista de usuarios obtenida
      })
      .catch((error) => {
        console.log("Error al obtener la lista de usuarios:", error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Crear un nuevo usuario
    createUsuario({ nombre, email, estado })
      .then((response) => {
        console.log("Usuario creado con éxito:", response.data);
        // Limpiar los campos del formulario y actualizar la lista de usuarios
        setNombre("");
        setEmail("");
        fetchUsuarios();
      })
      .catch((error) => {
        console.log("Error al crear el usuario:", error);
      });
  };

  return (
    <div>
      <h2>Lista de Usuarios</h2>
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario._id}>
            Nombre: {usuario.nombre}, Email: {usuario.email}, Estado:{" "}
            {usuario.estado ? "Activo" : "Inactivo"}
          </li>
        ))}
      </ul>
      <h2>Crear Usuario</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Estado:
          <select value={estado} onChange={(e) => setEstado(e.target.value)}>
            <option value={true}>Activo</option>
            <option value={false}>Inactivo</option>
          </select>
        </label>
        <br />
        <button type="submit">Crear Usuario</button>
      </form>
    </div>
  );
};

export default Usuario;