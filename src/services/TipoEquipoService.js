import { axiosConfig } from "../configuration/axiosConfig";

// obtener
const getTipoEquipos = (estado) => {
    return axiosConfig.get('tiposequipos?estado='+estado, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}


// crear
const createTipoEquipo = (data = {}) => {
    return axiosConfig.post('tiposequipos', data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

const editarTipoEquipo = (tipoId, data) => {
  return axiosConfig.put(`tiposequipos/${tipoId}`, data, {
   headers: {
      'Content-type': 'application/json'
   }
  });
}

// opcional
const borrarTipoEquipo = (tipoId) => {
  return axiosConfig.delete(`tipoequipos/${tipoId}`, {}, {
   headers: {
      'Content-type': 'application/json'
   }
  });
}


export {
    getTipoEquipos,
    createTipoEquipo,
    editarTipoEquipo,
    borrarTipoEquipo
}