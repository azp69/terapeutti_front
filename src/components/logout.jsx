import React, { useState } from "react";
import * as Helper from "./helper";
import * as LoginAPI from "../services/loginAPI";
import {
	NotificationContainer,
	NotificationManager,
} from "react-notifications";

import "../css/welcome.css";
import "../css/textInput.css";

export default function Logout({ authenticationHandler }) {
	Helper.setCookie("accesstoken", "", -1);
	authenticationHandler(0);
	NotificationManager.success("Olet kirjautunut ulos");
	// window.location.reload();
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
