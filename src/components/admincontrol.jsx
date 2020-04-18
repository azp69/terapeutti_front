import React, { useState, useEffect } from "react";
import * as DieticianAPI from "../services/dieticianAPI";
import CustomModal from "./customModal";
import DieticianModal from "./dieticianModal";
import TextInput from "./textinput";
import * as Helper from "./helper";

import Modal from "./modal.jsx";

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect,
} from "react-router-dom";

import "../css/welcome.css";
import "../css/textInput.css";
import { NotificationManager } from "react-notifications";

export default function AdminControl(props) {
	const [pendingDieticians, setPendingDieticians] = useState();
	const [selectedDietician, setSelectedDietician] = useState();
	const [dieticianSearch, setDieticianSearch] = useState();
	const [dieticianSearchResult, setDieticianSearchResult] = useState();

	const [modalIsOpen, setIsOpen] = useState(false);

	useEffect(() => {
		getPendingDieticians();
	}, []);

	if (pendingDieticians == null) return null;

	console.log(pendingDieticians);

	const pending = pendingDieticians.map((x, index) => {
		return (
			<div className="card w-100" key={`${index}__${x.id}`}>
				<div className="card-body">
					<div className="row">
						<div className="col-sm-9">
							<p className="card-text">{x.name}</p>
						</div>
						<div className="col">
							<button
								className="btn btn-info"
								onClick={() => openModalAndSetDietician(x.id)}
							>
								Tarkastele
							</button>
						</div>
						<div className="col">
							<a href="#" className="btn btn-danger">
								Peru
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	});

	const dieticians =
		dieticianSearchResult != null
			? dieticianSearchResult.map((x, index) => {
					return (
						<div className="card w-100" key={`${index}__${x.id}`}>
							<div className="card-body">
								<div className="row">
									<div className="col-sm-9">
										<p className="card-text">{x.name}</p>
									</div>
									<div className="col">
										<button
											className="btn btn-info"
											onClick={() => openModalAndSetDietician(x.id)}
										>
											Tarkastele
										</button>
									</div>
									<div className="col">
										<a href="#" className="btn btn-danger">
											Poista
										</a>
									</div>
								</div>
							</div>
						</div>
					);
			  })
			: null;

	function openModalAndSetDietician(dieticianId) {
		setSelectedDietician(dieticianId);
		setIsOpen(true);
		console.log(selectedDietician);
	}

	function getPendingDieticians() {
		DieticianAPI.getPendingDieticians().then(
			(success) => {
				setPendingDieticians(success.data);
			},
			(error) => {
				if (error.response.status === 401) {
					NotificationManager.error("Autentikointivirhe. Kirjaudu sisään.");
					Helper.setCookie("dieticianId", "", -1);
					Helper.setCookie("admin", "", -1);
					Helper.setCookie("accesstoken", "", -1);
					props.authenticationHandler({ admin: 0, auth: 0 });
					setTimeout(() => window.location.assign("/kirjaudu"), 2000);
				}
			}
		);
	}

	function approveDietician(dieticianId) {
		console.log("Approving dietician: ", dieticianId);
		DieticianAPI.approveDietician(dieticianId).then(
			(success) => {
				NotificationManager.success("Terapeutti on nyt aktiivinen");
				setIsOpen(false);
				getPendingDieticians();
			},
			(error) => {
				NotificationManager.error("Jokin meni pieleen");
			}
		);
	}

	function deactivateDietician(dieticianId) {
		console.log("Approving dietician: ", dieticianId);
		DieticianAPI.deactivateDietician(dieticianId).then(
			(success) => {
				NotificationManager.success("Terapeutti on nyt deaktivoitu");
				setIsOpen(false);
				getPendingDieticians();
			},
			(error) => {
				NotificationManager.error("Jokin meni pieleen");
			}
		);
	}

	function handleDieticianSearch(e) {
		const searchParams = {
			searchparams: {
				query: e.target.value,
				expertises: [],
			},
		};
		DieticianAPI.search(searchParams).then(
			(success) => {
				setDieticianSearchResult(success.data);
			},
			(error) => {
				console.log("Error: ", error);
			}
		);
	}

	return (
		<>
			<DieticianModal
				modalIsOpen={modalIsOpen}
				setIsOpen={setIsOpen}
				dieticianId={selectedDietician}
				approveDietician={approveDietician}
				deactivateDietician={deactivateDietician}
			/>

			<div>
				<div className="row">
					<div className="col-sm-12 mt-5 card card-body bg-light">
						<div className="py-5 my-3 px-5 text-center">
							<h1>Käyttäjähallinta</h1>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-sm-12 mt-5 card card-body bg-light">
						<h4>Hyväksyntää odottavat terapeutit</h4>
						<hr />
						{pending}
					</div>
				</div>

				<div className="row">
					<div className="col-sm-12 mt-5 card card-body bg-light">
						<div className="row">
							<div className="col-8">
								<h4>Terapeutit ja asiakkaat?</h4>
							</div>
							<div className="col">
								<h5>Hae käyttäjiä</h5>
							</div>
							<div className="col">
								<TextInput onChange={handleDieticianSearch} />
							</div>
						</div>
						<hr />

						<div className="card w-100">
							<div className="card-body">
								<div className="row">
									<div className="col-sm-12">{dieticians}</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
