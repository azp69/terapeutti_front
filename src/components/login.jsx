import React, { useState } from "react";
import * as Helper from "./helper";
import * as AuthApi from "../services/authAPI";
import TextInput from "./textinput";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect,
	useHistory,
	useLocation,
} from "react-router-dom";

import {
	NotificationContainer,
	NotificationManager,
} from "react-notifications";

import "../css/welcome.css";

export default function Login(props) {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();

	return (
		<div>
			<div className="row">
				<div className="col-sm-12 mt-5 card card-body bg-light">
					<div className="py-5 my-3 px-5 text-center">
						<h1>Kirjaudu palveluun</h1>
					</div>
				</div>
			</div>

			<div className="row">
				<div className="col-sm-12 mt-5 card card-body bg-light">
					<div className="py-5 my-3 px-5 text-center">
						<form>
							<div className="form-group">
								<div className="row">
									<div className="col">
										<TextInput
											id="Email"
											label="Sähköposti"
											placeholder="Syötä sähköposti"
											onChange={handleChange}
										/>
									</div>
								</div>
							</div>

							<div className="form-group">
								<TextInput
									id="Password"
									label="Salasana"
									placeholder=""
									type="password"
									onChange={handleChange}
								/>
							</div>

							<button
								type="submit"
								className="btn btn-primary"
								onClick={handleLogin}
							>
								Kirjaudu
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);

	function handleLogin(e) {
		e.preventDefault();

		AuthApi.login({ username: email, password }).then(
			(success) => {
				Helper.setCookie("accesstoken", success.data.AccessToken, 1);
				Helper.setCookie("dieticianId", success.data.dieticianId, 1);
				props.authenticationHandler(1);
			},
			(error) => {
				NotificationManager.error("Kirjautuminen epäonnistui");
			}
		);
	}

	function handleChange(e) {
		if (e.target.id === "Email") setEmail(e.target.value);
		if (e.target.id === "Password") setPassword(e.target.value);
	}
}
