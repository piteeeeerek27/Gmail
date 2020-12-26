import React from 'react';
import './styles/App.css';
import Header from './compo/Header';
import Sidebar from './compo/Sidebar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const App = () => {
	return (
		<Router>
			<div className='app'>
				<Header />
				<div className='app__body'>
					<Sidebar />

					<Switch></Switch>
				</div>
			</div>
		</Router>
	);
};

export default App;
