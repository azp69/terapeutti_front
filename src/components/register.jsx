import React, { useState } from "react";
import * as DieticianAPI from "../services/dieticianAPI";

import "../css/welcome.css";
import "../css/textInput.css";

export default function Register() {
	const [errors, setErrors] = useState({
		Name: "",
		Place: "",
		Education: "",
		Phone: "",
		Email: ""
	});

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
										/>
									</div>

									<div className="col">
										<TextInput
											id="Lastname"
											label="Sukunimi"
											placeholder="Syötä sukunimi"
											error={errors.name ? errors.name : ""}
										/>
									</div>
								</div>
							</div>

							<div className="form-group">
								<label htmlFor="FormControlSelect1">Toimipaikka</label>
								<select className="form-control" id="FormControlSelect1">
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
								/>
							</div>

							<div className="form-group">
								<TextInput
									id="Phone"
									label="Puhelinnumero"
									placeholder="Syötä puhelinnumero"
								/>
							</div>

							<div className="form-group">
								<TextInput
									id="Email"
									label="Sähköposti"
									placeholder="Syötä sähköposti"
									error={errors.email ? errors.email : ""}
								/>
							</div>

							<div className="form-group">
								<TextInput
									id="Password"
									label="Salasana"
									placeholder=""
									type="password"
								/>
							</div>

							<div className="form-group">
								<div className="form-check">
									<input
										className="form-check-input"
										type="checkbox"
										value="hyvaksy1"
										id="hyvaksy1"
									/>
									<label className="form-check-label" htmlFor="hyvaksy1">
										Hyväksyn jotain jotain
									</label>
								</div>
							</div>

							<button
								type="submit"
								className="btn btn-primary"
								onClick={e => submitForm(e, queryDone)}
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

function submitForm(e, queryDone) {
	e.preventDefault();
	// console.log(e.target.parentElement.searchBox.value);
	var elements = document.getElementsByClassName("form-control");
	var name =
		document.getElementById("Firstname").value +
		" " +
		document.getElementById("Lastname").value;
	var email = document.getElementById("Email").value;
	var phone = document.getElementById("Phone").value;
	var place = document.getElementById("FormControlSelect1").value;
	var password = document.getElementById("Password").value;
	var education = document.getElementById("Education").value;

	var dietician = {
		name,
		email,
		phone,
		place,
		education,
		password
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

	DieticianAPI.add(queryDone, JSON.stringify(dietician));
}
