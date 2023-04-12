import React from 'react';
import TipoEquipos from "./components/TipoEquipos";
import Marcas from "./components/Marcas";
import Estados from "./components/Estados";
import Usuario from './components/Usuarios';
import Inventario from './components/Inventario';
import AppRouter from "./routers/AppRouter";

function App() {
    const title = 'Tipo de Equipo'

    return (
        <div>
            <AppRouter />
        </div>
    );
}

export default App;