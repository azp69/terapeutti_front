import React, { useState } from "react";
import * as Helper from "./helper";
import * as LoginAPI from "../services/loginAPI";
import {
	NotificationContainer,
	NotificationManager,
} from "react-notifications";

import "../css/welcome.css";
import "../css/textInput.css";

export default function Login(props) {
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
		const user = document.getElementById("Email").value;
		const pass = document.getElementById("Password").value;

		const data = {
			username: user,
			password: pass,
		};

		LoginAPI.login(handleLoginResponse, data);
	}

	function handleLoginResponse(response) {
		try {
			Helper.setCookie("accesstoken", response.AccessToken, 1);
			NotificationManager.success("Kirjautuminen onnistui");
			props.authenticationHandler(1);
		} catch {
			NotificationManager.error("Kirjautuminen epäonnistui");
		}
	}
}

function TextInput({ label, id, placeholder, type, error }) {
	const err = error ? " validationError" : "";
	const style = "form-control" + err;
	const typeOfInput = type === "password" ? "password" : "text";
	return (
		<>
			<label htmlFor={id}>{label}</label>
			<input
				type={typeOfInput}
				className={style}
				id={id}
				placeholder={error ? error : placeholder}
			/>
		</>
	);
}
