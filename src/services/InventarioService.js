import { axiosConfig } from "../configuration/axiosConfig";

// obtener
const getInventarios =  (data = {}) => {
    return axiosConfig.get('inventarios', data, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  };
  
  // Crear un nuevo inventario
  const createInventario = (data = {}) => {
    return axiosConfig.post('inventarios', data, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  };
  const updateInventarioByID= (data = {}) => {
    return axiosConfig.post('inventarios', data, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  };
  export {
    getInventarios,
    createInventario,
    updateInventarioByID

  };