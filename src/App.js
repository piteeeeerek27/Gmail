import React, { useEffect } from "react";
import "./styles/App.css";
import Header from "./compo/Header";
import Sidebar from "./compo/Sidebar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Mail from "./compo/Mail";
import EmailList from "./compo/EmailList";
import SendMail from "./compo/SendMail";
import { selectSendMessageIsOpen } from "./features/mailSlice";
import { useDispatch, useSelector } from "react-redux";
import { login, selectUser } from "./features/userSlice";
import Login from "./compo/Login";
import { auth } from "./compo/firebase";

const App = () => {
	const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
	const user = useSelector(selectUser);
	const dispatch = useDispatch();

	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			if (user) {
				dispatch(
					login({
						displayName: user.displayName,
						email: user.email,
						photoUrl: user.photoURL,
					}),
				);
			} else {
			}
		});
	}, []);

	return (
		<Router>
			{!user ? (
				<Login />
			) : (
				<div className="app">
					<Header />
					<div className="app__body">
						<Sidebar />

						<Switch>
							<Route path="/mail">
								<Mail />
							</Route>
							<Route path="/">
								<EmailList />
							</Route>
						</Switch>
					</div>

					{sendMessageIsOpen && <SendMail />}
				</div>
			)}
		</Router>
	);
};

export default App;
