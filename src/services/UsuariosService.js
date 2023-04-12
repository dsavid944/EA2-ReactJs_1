import { axiosConfig } from "../configuration/axiosConfig";

// Obtener usuarios filtrados por estado
const getUsuarios = (estado) => {
    return axiosConfig.get('usuarios', {
        params: {
            estado: estado
        },
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

// Crear un nuevo usuario
const createUsuario = (data = {}) => {
    return axiosConfig.post('usuarios', data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export {
    getUsuarios,
    createUsuario,
}