import React, { useState } from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect,
} from "react-router-dom";
import * as Helper from "./components/helper";

import Jumbotron from "./components/jumbotron";
import Nav from "./components/nav";
import Welcome from "./components/welcome";
import Services from "./components/services";
import WhyTherapy from "./components/whyTherapy";
import Contact from "./components/contact";
import ProfilePage from "./components/profilePage";
import Register from "./components/register";
import Login from "./components/login";
import UserControl from "./components/usercontrol";
import DieticianBookings from "./components/dieticianBookings";
import AdminControl from "./components/admincontrol";

function App() {
	const [authenticated, setAuthenticated] = useState(
		Helper.getCookie("accesstoken") ? 1 : 0
	);

	return (
		<Router>
			<Jumbotron />
			<Nav authenticated={authenticated} />
			<div className="container">
				<Switch>
					<Route path="/palvelut">
						<Services />
					</Route>

					<Route path="/miksi">
						<WhyTherapy />
					</Route>

					<Route path="/yhteys">
						<Contact />
					</Route>

					<Route path="/terapeutit">
						<ProfilePage />
					</Route>

					<Route path="/rekisteroidy">
						{authenticated ? <Redirect to="/varaukset" /> : <Register />}
					</Route>

					<Route path="/kirjaudu">
						{authenticated ? (
							<Redirect to="/varaukset" />
						) : (
							<Login authenticationHandler={authHandler} />
						)}
					</Route>

					<Route path="/kayttajahallinta">
						<UserControl />
					</Route>

					<Route path="/varaukset">
						<DieticianBookings />
					</Route>

					<Route path="/adminhallinta">
						<AdminControl />
					</Route>

					<Route path="/">
						<Welcome />
					</Route>
				</Switch>
			</div>
			<div className="mb-5"></div>
		</Router>
	);

	function authHandler() {
		setAuthenticated(1);
	}
}

export default App;
