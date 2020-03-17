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

/* 
$(document).ready(function() {
	$('[data-toggle="popover"]').popover();
});
 */
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

		const tyovuorot = [
			{
				id: "0",
				alku: "2020-03-02 11:00:00",
				loppu: "2020-03-02 12:00:00",
				kohde: "Asiakas 1",
				eiVarattavissa: "true"
			},
			{
				id: "1",
				alku: "2020-03-03 12:00:00",
				loppu: "2020-03-03 13:00:00",
				kohde: "Asiakas 2"
			},
			{
				id: "2",
				alku: "2020-03-04 11:00:00",
				loppu: "2020-03-04 12:00:00",
				kohde: "Asiakas 3"
			},
			{
				id: "3",
				alku: "2020-01-12 11:00:00",
				loppu: "2020-01-10 18:00:00",
				kohde: "Kahvila"
			},
			{
				id: "4",
				alku: "2020-01-13 11:00:00",
				loppu: "2020-01-10 18:00:00",
				kohde: "Ravintola"
			},
			{
				id: "5",
				alku: "2020-01-20 11:00:00",
				loppu: "2020-01-10 18:00:00",
				kohde: "Kahvila"
			},
			{
				id: "6",
				alku: "2020-01-21 11:00:00",
				loppu: "2020-01-10 18:00:00",
				kohde: "Ravintola"
			},
			{
				id: "7",
				alku: "2020-01-22 11:00:00",
				loppu: "2020-01-10 18:00:00",
				kohde: "Myymälä"
			},
			{
				id: "8",
				alku: "2020-01-23 11:00:00",
				loppu: "2020-01-10 18:00:00",
				kohde: "Ravintola"
			},
			{
				id: "9",
				alku: "2020-01-24 11:00:00",
				loppu: "2020-01-10 18:00:00",
				kohde: "Kahvila"
			},
			{
				id: "10",
				alku: "2020-02-01 13:00:00",
				loppu: "2020-02-01 21:00:00",
				kohde: "Kahvila"
			},
			{
				id: "11",
				alku: "2020-02-04 15:00:00",
				loppu: "2020-02-04 23:00:00",
				kohde: "Kahvila"
			},
			{
				id: "12",
				alku: "2020-02-10 11:00:00",
				loppu: "2020-02-10 19:00:00",
				kohde: "Kahvila"
			},
			{
				id: "13",
				alku: "2020-02-11 08:00:00",
				loppu: "2020-02-11 16:00:00",
				kohde: "Kahvila"
			},
			{
				id: "14",
				alku: "2020-02-12 08:00:00",
				loppu: "2020-02-12 16:00:00",
				kohde: "Ravintola"
			}
		];

		console.log(profile);
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
						<Calendar calEvents={tyovuorot} />
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
