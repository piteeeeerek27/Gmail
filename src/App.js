import React from 'react';
import './styles/App.css';
import Header from './compo/Header';
import Sidebar from './compo/Sidebar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Mail from './compo/Mail';
import EmailList from './compo/EmailList';
import SendMail from './compo/SendMail';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { useSelector } from 'react-redux';

const App = () => {
	const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
	return (
		<Router>
			<div className='app'>
				<Header />
				<div className='app__body'>
					<Sidebar />

					<Switch>
						<Route path='/mail'>
							<Mail />
						</Route>
						<Route path='/'>
							<EmailList />
						</Route>
					</Switch>
				</div>

				{sendMessageIsOpen && <SendMail />}
			</div>
		</Router>
	);
};

export default App;
