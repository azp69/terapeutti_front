import React, { useState, useEffect } from "react";
import * as DieticianAPI from "../services/dieticianAPI";
import { Calendar } from "./calendar";

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useRouteMatch,
	useParams
} from "react-router-dom";

export default function ProfilePage() {
	const match = useRouteMatch();
	return (
		<Switch>
			<Route path={`${match.path}/:Id`}>
				<RenderProfile />
			</Route>
		</Switch>
	);

	function RenderExperties(experties) {
		console.log(experties);
		try {
			return experties.map(expertie => {
				return <li key={expertie.id}>{expertie.name}</li>;
			});
		} catch {
			return <p>Ei määriteltyjä erikoisosaamisia.</p>;
		}
	}

	function RenderProfile() {
		const [profile, setProfile] = useState();
		const { Id } = useParams();

		useEffect(() => {
			DieticianAPI.get(setProfile, Id);
		}, [Id]);

		if (profile != null) {
			return (
				<div className="row">
					<div className="col-sm-12 text-center my-5 card card-body bg-light py-5">
						<div className="card profileCard">
							<div className="card-body text-left">
								<p className="text-center">
									{profile.name ? profile.name : ""}
								</p>
								<p>Koulutus: {profile.education ? profile.education : ""}</p>
								<p>Paikkakunta: {profile.place ? profile.place : ""}</p>
								<p>Puhnro: {profile.phone ? profile.phone : ""}</p>
								<p>Sähköposti: {profile.email ? profile.email : ""}</p>
								<ul>{RenderExperties(profile.experties)}</ul>
							</div>
						</div>
					</div>

					<div className="col-sm-12 mb-5 text-center card card-body">
						<h1>Varaa aika alla olevasta kalenterista</h1>
						<Calendar dieticianId={Id} />
					</div>
				</div>
			);
		} else {
			return (
				<div className="row">
					<div className="col-sm-12 text-center my-5 card card-body bg-light py-5">
						<div className="card profileCard">
							<div className="card-body text-left">
								<p>Ladataan tietoja</p>
							</div>
						</div>
					</div>

					<div className="col-sm-12 mb-5 text-center card card-body punchline">
						<h1>Tutustutaan!</h1>
					</div>
					<div className="col-sm-12 col-md-4 text-center">
						<p>Matti Meikäläinen</p>
						<p>matti@meikalainen.fi</p>
						<p>050-123123123</p>
					</div>
					<div className="col-sm-12 col-md-4 text-center">
						<p>Matti Meikäläinen</p>
						<p>matti@meikalainen.fi</p>
						<p>050-123123123</p>
					</div>
					<div className="col-sm-12 col-md-4 text-center">
						<p>Matti Meikäläinen</p>
						<p>matti@meikalainen.fi</p>
						<p>050-123123123</p>
					</div>
				</div>
			);
		}
	}
}
