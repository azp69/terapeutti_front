import React, { useState, useEffect } from "react";
import * as DieticianAPI from "../services/dieticianAPI";
import CustomModal from "./customModal";
import DieticianModal from "./dieticianModal";

import Modal from "./modal.jsx";

import "../css/welcome.css";
import "../css/textInput.css";
import { NotificationManager } from "react-notifications";

export default function AdminControl(props) {
	const [pendingDieticians, setPendingDieticians] = useState();
	const [selectedDietician, setSelectedDietician] = useState();
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

	function openModalAndSetDietician(dieticianId) {
		setSelectedDietician(dieticianId);
		setIsOpen(true);
		console.log(selectedDietician);
	}

	function getPendingDieticians() {
		DieticianAPI.getPendingDieticians().then((success) => {
			setPendingDieticians(success.data);
		});
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

	return (
		<>
			<DieticianModal
				modalIsOpen={modalIsOpen}
				setIsOpen={setIsOpen}
				dieticianId={selectedDietician}
				approveDietician={approveDietician}
			/>

			<div>
				<div className="row">
					<div className="col-sm-12 mt-5 card card-body bg-light">
						<div className="py-5 my-3 px-5 text-center">
							<h1>Admin control</h1>
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
								<input type="text" className="form-control" id="Kayttajahaku" />
							</div>
						</div>
						<hr />

						<div className="card w-100">
							<div className="card-body">
								<div className="row">
									<div className="col-sm-10">
										<p className="card-text">Käyttäjän nimi yms</p>
									</div>
									<div className="col">
										<a
											href="#"
											data-toggle="modal"
											data-target="#Poistomodal"
											className="btn btn-info"
										>
											Tarkastele
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
