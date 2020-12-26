import React from 'react';
import './styles/App.css';
import Header from './compo/Header';
import Sidebar from './compo/Sidebar';

const App = () => {
	return (
		<div className='app'>
			<Header />
			<Sidebar />
		</div>
	);
};

export default App;
