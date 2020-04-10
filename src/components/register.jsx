import React, { useState } from "react";
import * as DieticianAPI from "../services/dieticianAPI";
import TextInput from "./textinput";
import {
	NotificationContainer,
	NotificationManager,
} from "react-notifications";

import "../css/welcome.css";

export default function Register() {
	const [errors, setErrors] = useState({});

	const [userData, setUserData] = useState({
		FirstName: "",
		LastName: "",
		Place: "",
		Education: "",
		Phone: "",
		Email: "",
		Password: "",
		Agreement: false,
	});

	const [registered, setRegistered] = useState(false);

	if (registered) {
		NotificationManager.success("Rekisteröityminen onnistui");
		return (
			<div className="row">
				<div className="col-sm-12 mt-5 card card-body bg-light">
					<div className="py-5 my-3 px-5 text-center">
						<h1>Rekisteröityminen onnistui</h1>
						<h2>
							Ylläpitäjämme vahvistavat tilisti mahdollisimman pian. Saat
							sähköpostiisi ilmoituksen, kun tilisi on vahvistettu ja käytössä.
							Tervetuloa mukaan!
						</h2>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div>
			<div className="row">
				<div className="col-sm-12 mt-5 card card-body bg-light">
					<div className="py-5 my-3 px-5 text-center">
						<h1>Oletko laillistettu ravitsemusterapeutti?</h1>
						<h2>
							Rekisteröidy sivuillemme alla olevalla lomakkeella ja liity mukaan
							toimintaan!
						</h2>
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
											id="Firstname"
											label="Etunimi"
											placeholder="Syötä etunimi"
											error={errors.name ? errors.name : ""}
											onChange={handleInputChange}
										/>
									</div>

									<div className="col">
										<TextInput
											id="Lastname"
											label="Sukunimi"
											placeholder="Syötä sukunimi"
											error={errors.name ? errors.name : ""}
											onChange={handleInputChange}
										/>
									</div>
								</div>
							</div>

							<div className="form-group">
								<label htmlFor="Place">Toimipaikka</label>
								<select
									className="form-control"
									id="Place"
									onChange={handleInputChange}
								>
									<option>Helsinki</option>
									<option>Vantaa</option>
									<option>Espoo</option>
									<option>Kuopio</option>
									<option>Oulu</option>
								</select>
							</div>

							<div className="form-group">
								<TextInput
									id="Education"
									label="Koulutus"
									placeholder="Syötä koulutus"
									onChange={handleInputChange}
								/>
							</div>

							<div className="form-group">
								<TextInput
									id="Phone"
									label="Puhelinnumero"
									placeholder="Syötä puhelinnumero"
									onChange={handleInputChange}
								/>
							</div>

							<div className="form-group">
								<TextInput
									id="Email"
									label="Sähköposti"
									placeholder="Syötä sähköposti"
									error={errors.email ? errors.email : ""}
									onChange={handleInputChange}
								/>
							</div>

							<div className="form-group">
								<TextInput
									id="Password"
									label="Salasana"
									placeholder=""
									type="password"
									onChange={handleInputChange}
								/>
							</div>

							<div className="form-group">
								<div className="form-check">
									<input
										className="form-check-input"
										type="checkbox"
										value="hyvaksy1"
										id="Agreement"
										onChange={handleInputChange}
									/>
									<label className="form-check-label" htmlFor="hyvaksy1">
										Hyväksyn, että tietoni luovutetaan Venäjän mafialle.
									</label>
								</div>
							</div>

							<button
								type="submit"
								className="btn btn-primary"
								onClick={(e) => submitForm(e, queryDone)}
							>
								Rekisteröidy
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);

	function queryDone(response) {
		setErrors(response.errors);
	}

	function handleInputChange(e) {
		// const data = { ...userData, FirstName: "he" };
		switch (e.target.id) {
			case "Firstname":
				setUserData({ ...userData, FirstName: e.target.value });
				break;
			case "Lastname":
				setUserData({ ...userData, LastName: e.target.value });
				break;
			case "Education":
				setUserData({ ...userData, Education: e.target.value });
				break;
			case "Phone":
				setUserData({ ...userData, Phone: e.target.value });
				break;
			case "Email":
				setUserData({ ...userData, Email: e.target.value });
				break;
			case "Password":
				setUserData({ ...userData, Password: e.target.value });
				break;
			case "Place":
				setUserData({ ...userData, Place: e.target.value });
				break;
			case "Agreement":
				setUserData({ ...userData, Agreement: e.target.checked });
				break;
		}
	}

	function submitForm(e, queryDone) {
		e.preventDefault();

		if (userData.Agreement !== true) {
			NotificationManager.error("Sinun täytyy hyväksyä palvelun käyttöehdot");
			return;
		}

		var dietician = {
			name: `${userData.FirstName} ${userData.LastName}`,
			email: userData.Email,
			phone: userData.Phone,
			place: userData.Place,
			education: userData.Education,
			password: userData.Password,
		};

		console.log(dietician);

		/*
		const checkBoxes = e.target.parentElement.expertise;
		let checkedExperties = [];
	
		checkBoxes.forEach((c) => {
			if (c.checked) checkedExperties.push(c.id);
		});
	
		const searchParams = {
			searchparams : {
				query : e.target.parentElement.searchBox.value,
				expertises : checkedExperties
			}
		};
	
		*/

		// Helper.log(JSON.stringify(search));
		// Helper.log(checkedExperties);

		// DieticianSearchAPICall(profileDataUpdateFunction, e.target.parentElement.searchBox.value);
		// console.log("s", searchParams.searchparams.query);

		DieticianAPI.add(JSON.stringify(dietician)).then(
			(result) => {
				setRegistered(true);
			},
			(error) => {
				NotificationManager.error(
					"Rekisteröityminen ei onnistunut. Tarkista tiedot"
				);
				setErrors(error.response.data.errors);
				console.log(error.response.data.errors);
			}
		);
	}
}
