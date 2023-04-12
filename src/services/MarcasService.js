import { axiosConfig } from "../configuration/axiosConfig";

// obtener
const getMarcas = (estado) => {
    return axiosConfig.get('marcas?estado='+estado, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}


// crear
const MarcaService = {
    createMarca: async (nombre) => {
      try {
        const response = await axiosConfig.post('marcas', { nombre }, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        return response.data; // Devuelve los datos de la respuesta
      } catch (error) {
        console.error(error);
        throw new Error('No se pudo crear la marca'); // Lanza un error si no se pudo crear la marca
      }
    }
  };
  export default MarcaService;


export {
    getMarcas,
}
