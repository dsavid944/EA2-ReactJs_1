import React, { useEffect, useState } from 'react';
import {getMarcas} from '../services/MarcasService';
import MarcaService from '../services/MarcasService';
export default function Marcas() {
  const [marcas, setMarcas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState(true);
  const [error, setError] = useState(false);
  const [marca, setMarca] = useState({
    nombre: ''
  });
  const [loadingSave, setLoadingSave] = useState(false);

  // Función para obtener todas las marcas
  const obtenerMarcas = async () => {
    setLoading(true);
    try {
      setError(false);
      const { data } = await getMarcas(query);
      setMarcas(data);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    obtenerMarcas();
  }, [query]);

  const cambiarSwitche = () => {
    setQuery(!query);
  };

  // Función para crear una nueva marca
  const crearNuevaMarca = async () => {
    setLoadingSave(true);
    try {
      const nombre = marca.nombre ? marca.nombre.toUpperCase() : '';
      const marcaDB = await MarcaService.crearMarca(nombre); // Llama al método crearMarca del servicio MarcaService
  
      if (marcaDB) {
        setMarcas(prevMarcas => [...prevMarcas, marcaDB]);
        setMarca({ nombre: '' });
      }
  
      setLoadingSave(false);
    } catch (e) {
      console.error(e);
      setLoadingSave(false);
    }
  };

  // Función para manejar cambios en el formulario
  const handleInputChange = e => {
    const { name, value } = e.target;
    setMarca(prevMarca => ({ ...prevMarca, [name]: value }));
  };

  return (
    <div>
      {/* Renderizar el contenido del modal */}
      {/* ... */}
      <h1>Formulario de Marcas</h1>
      <form>
        {/* Renderizar el contenido del formulario */}
        {/* ... */}
        <input
          type="text"
          className="form-control"
          id="nombre"
          name="nombre"
          value={marca.nombre}
          onChange={handleInputChange}
        />
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => crearNuevaMarca()} // Envolver la función dentro de una función de controlador de eventos
          disabled={loadingSave}
        >
          {loadingSave ? 'Creando...' : 'Crear Marca'}
        </button>
      </form>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckChecked"
          checked={query}
          onChange={cambiarSwitche}
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
          ( Inactivo / Activo )
        </label>
      </div>
      <h1>Listado de Marcas</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan="2">Cargando...</td>
            </tr>
          ) : error ? (
            <tr>
              <td colSpan="2">Error al obtener las marcas</td>
            </tr>
          ) : marcas.length === 0 ? (
            <tr>
              <td colSpan="2">No hay marcas</td>
            </tr>
          ) : (
            marcas.map((marca, index) => (
              <tr key={marca._id}>
                <th scope="row">{index + 1}</th>
                <td>{marca.nombre}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}