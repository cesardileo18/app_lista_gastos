import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import WebFont from 'webfontloader';
import Contenedor from './elementos/Contenedor';
import { Route, Switch, HashRouter} from 'react-router-dom';
import EditarGasto from './componentes/EditarGasto';
import GastosPorCategoria from './componentes/GastosPorCategoria';
import InicioSesion from './componentes/InicioSesion';
import ListaDeGastos from './componentes/ListaDeGastos';
import RegistroUsuarios from './componentes/RegistroUsuarios';
import {Helmet} from "react-helmet";
import favicon from './imagenes/logo.png';
import Fondo from './elementos/Fondo';
import {AuthProvider} from './contextos/AuthContext';
import RutaPrivada from './componentes/RutaPrivada';
import {TotalGastadoProvider} from './contextos/TotalGastadoEnElMesContext';

WebFont.load({
  google: {
    families: ['Work Sans:400,500,700', 'sans-serif']
  }
});

const Index = () => {
  return (
	<>
		<Helmet>
			<link rel="shortcut icon" href={favicon} type="image/x-icon"/>
		</Helmet>

		<AuthProvider>
			<TotalGastadoProvider>
				<HashRouter>
					<Contenedor>
						<Switch>
							<Route path="/iniciar-sesion" component={InicioSesion}/>
							<Route path="/crear-cuenta" component={RegistroUsuarios}/>
							
							<RutaPrivada path="/categorias">
								<GastosPorCategoria />
							</RutaPrivada>
							<RutaPrivada path="/lista">
								<ListaDeGastos />
							</RutaPrivada>
							<RutaPrivada path="/editar/:id">
								<EditarGasto />
							</RutaPrivada>
							<RutaPrivada path="/">
								<App />
							</RutaPrivada>
							
						</Switch>
					</Contenedor>
			</HashRouter>
			</TotalGastadoProvider>
		</AuthProvider>

		<Fondo />
	</>
  );
}

ReactDOM.render(<Index />, document.getElementById('root'));