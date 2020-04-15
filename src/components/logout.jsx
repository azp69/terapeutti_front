import React, { useState } from "react";
import * as Helper from "./helper";
import * as AuthAPI from "../services/authAPI";

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect,
} from "react-router-dom";

import {
	NotificationContainer,
	NotificationManager,
} from "react-notifications";

import "../css/welcome.css";
import "../css/textInput.css";

export default function Logout({ authenticationHandler }) {
	AuthAPI.logout().then((success) => {});

	Helper.setCookie("accesstoken", "", -1);
	Helper.setCookie("admin", "", -1);
	authenticationHandler({ admin: 0, auth: 0 });

	return (
		<div>
			<div className="row">
				<div className="col-sm-12 mt-5 card card-body bg-light">
					<div className="py-5 my-3 px-5 text-center">
						<h1>Olet nyt kirjautunut ulos palvelusta</h1>
					</div>
				</div>
			</div>
		</div>
	);
}
