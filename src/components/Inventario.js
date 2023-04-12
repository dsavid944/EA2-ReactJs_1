import React, { useEffect, useState } from 'react';
import { getInventarios, createInventario } from '../services/InventarioService'; // Importa las funciones para comunicarte con la API

const Inventario = () => {
  const [inventarios, setInventarios] = useState([]);
  const [nuevoInventario, setNuevoInventario] = useState({ serial: '', modelo: '' });

  // Obtén los inventarios al cargar la pantalla
  useEffect(() => {
    obtenerInventarios();
  }, []);

  const obtenerInventarios = async () => {
    try {
      const response = await getInventarios(); // Llama a la función para obtener los inventarios desde la API
      setInventarios(response.data); // Actualiza el estado con los inventarios obtenidos
    } catch (error) {
      console.error('Error al obtener los inventarios', error);
    }
  };

  const crearInventario = async () => {
    try {
      const response = await createInventario(nuevoInventario); // Llama a la función para crear un nuevo inventario en la API
      console.log('Inventario creado', response.data); // Muestra la respuesta del servidor en la consola
      setNuevoInventario({ serial: '', modelo: '' }); // Limpia el estado del nuevo inventario
    } catch (error) {
      console.error('Error al crear el inventario', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNuevoInventario((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1>Inventario</h1>
      {/* Renderiza la lista de inventarios */}
      <ul>
        {inventarios.map((inventario) => (
          <li key={inventario._id}>{inventario.serial}</li>
        ))}
      </ul>
      {/* Formulario para crear un nuevo inventario */}
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          name="serial"
          value={nuevoInventario.serial}
          onChange={handleChange}
          placeholder="Serial"
        />
        <input
          type="text"
          name="modelo"
          value={nuevoInventario.modelo}
          onChange={handleChange}
          placeholder="Modelo"
        />
        {/* Otros campos del formulario */}
        <button type="submit" onClick={crearInventario}>
          Crear Inventario
        </button>
      </form>
    </div>
  );
};

export default Inventario;