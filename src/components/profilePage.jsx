import React, { useState, useEffect } from "react";
import * as DieticianAPI from "../services/dieticianAPI";
import * as ExpertiesAPI from "../services/expertiesAPI";
import { Calendar } from "./calendar";

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useRouteMatch,
	useParams,
} from "react-router-dom";
import { NotificationManager } from "react-notifications";

export default function ProfilePage() {
	const match = useRouteMatch();
	return (
		<Switch>
			<Route path={`${match.path}/:Id`}>
				<RenderProfile />
			</Route>
		</Switch>
	);

	function RenderExperties(experties, allExperties) {
		if (allExperties == null) return null;

		const x = allExperties.map((x) => {
			return parseExpertises(x, experties) ? x : null;
		});

		const y = x.filter((x) => x != null);

		try {
			return y.map((expertie) => {
				return <li key={expertie.id}>{expertie.name}</li>;
			});
		} catch {
			return <p>Ei määriteltyjä erikoisosaamisia.</p>;
		}
	}

	function parseExpertises(expertie, experties) {
		for (let i = 0; i < experties.length; i++) {
			if (experties[i].id == expertie.id) return true;
		}
		return false;
	}

	function RenderProfile() {
		const [profile, setProfile] = useState();
		const [experties, setExperties] = useState();

		const { Id } = useParams();

		//
		useEffect(() => {
			DieticianAPI.get(Id).then(
				(success) => {
					setProfile(success.data);
				},
				(error) => {
					NotificationManager.error(
						"Terapeutin tietojen haussa tapahtui virhe"
					);
				}
			);
		}, [Id]);

		// Experties

		useEffect(() => {
			ExpertiesAPI.get().then(
				(success) => {
					setExperties(success.data);
				},
				(error) => {
					NotificationManager.error("Erikoisosaamisten haussa tapahtui virhe");
				}
			);
		}, [Id]);

		if (profile != null) {
			console.log("Profile", profile);

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
								<ul>{RenderExperties(profile.expertises, experties)}</ul>
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
