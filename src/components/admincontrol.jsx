import React, { useState, useEffect } from "react";
import * as DieticianAPI from "../services/dieticianAPI";
import CustomModal from "./customModal";

import Modal from "./modal.jsx";

import "../css/welcome.css";
import "../css/textInput.css";

export default function AdminControl(props) {
	const [pendingDieticians, setPendingDieticians] = useState();
	const [modalIsOpen, setIsOpen] = useState(true);

	useEffect(() => {
		DieticianAPI.getPendingDieticians().then((success) => {
			setPendingDieticians(success.data);
		});
	}, []);

	if (pendingDieticians == null) return null;

	console.log(pendingDieticians);

	const pending = pendingDieticians.map((x) => {
		return (
			<div class="card w-100">
				<div class="card-body">
					<div class="row">
						<div class="col-sm-9">
							<p class="card-text">{x.name}</p>
						</div>
						<div class="col">
							<a
								href="#"
								data-toggle="modal"
								data-target="#HyvaksyttavaTerapeutti"
								class="btn btn-info"
							>
								Tarkastele
							</a>
						</div>
						<div class="col">
							<a href="#" class="btn btn-danger">
								Peru
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	});

	return (
		<>
			<CustomModal
				isOpen={modalIsOpen}
				setOpen={(x) => {
					setIsOpen(x);
				}}
			>
				adsds
			</CustomModal>

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
						<h4>Korjauspyynnöt?</h4>
						<hr />

						<div class="card w-100">
							<div class="card-body">
								<div class="row">
									<div class="col-sm-9">
										<p class="card-text">Tietoja pyynnöstä</p>
									</div>
									<div class="col">
										<a
											href="#"
											data-toggle="modal"
											data-target="#KorjauspyyntModal"
											class="btn btn-info"
										>
											Tarkastele
										</a>
									</div>
									<div class="col">
										<a href="#" class="btn btn-danger">
											Poista
										</a>
									</div>
								</div>
							</div>
						</div>

						<div class="card w-100">
							<div class="card-body">
								<div class="row">
									<div class="col-sm-9">
										<p class="card-text">Tietoja pyynnöstä</p>
									</div>
									<div class="col">
										<a
											href="#"
											data-toggle="modal"
											data-target="#KorjauspyyntModal"
											class="btn btn-info"
										>
											Tarkastele
										</a>
									</div>
									<div class="col">
										<a href="#" class="btn btn-danger">
											Poista
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-sm-12 mt-5 card card-body bg-light">
						<div className="row">
							<div class="col-8">
								<h4>Terapeutit ja asiakkaat?</h4>
							</div>
							<div class="col">
								<h5>Hae käyttäjiä</h5>
							</div>
							<div class="col">
								<input type="text" class="form-control" id="Kayttajahaku" />
							</div>
						</div>
						<hr />

						<div class="card w-100">
							<div class="card-body">
								<div class="row">
									<div class="col-sm-10">
										<p class="card-text">Käyttäjän nimi yms</p>
									</div>
									<div class="col">
										<a
											href="#"
											data-toggle="modal"
											data-target="#Poistomodal"
											class="btn btn-info"
										>
											Tarkastele
										</a>
									</div>
								</div>
							</div>
						</div>

						<div class="card w-100">
							<div class="card-body">
								<div class="row">
									<div class="col-sm-10">
										<p class="card-text">Käyttäjän nimi yms</p>
									</div>
									<div class="col">
										<a
											href="#"
											data-toggle="modal"
											data-target="#Poistomodal"
											class="btn btn-info"
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
