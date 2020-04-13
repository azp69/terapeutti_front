import React, { useState, useEffect } from "react";
import * as DieticianAPI from "../services/dieticianAPI";
import CustomModal from "./customModal";

export default function DieticianModal(props) {
	const [dieticianData, setDieticianData] = useState();

	useEffect(() => {
		if (props.dieticianId != null) {
			DieticianAPI.get(props.dieticianId).then((success) => {
				setDieticianData(success.data);
			});
		}
	}, [props.modalIsOpen]);

	if (dieticianData == null) return null;

	console.log("Dietician data: ", dieticianData);

	return (
		<>
			<CustomModal
				isOpen={props.modalIsOpen}
				setOpen={(x) => {
					props.setIsOpen(x);
				}}
			>
				<div className="modal-header">
					<h6 className="modal-title">Hakemus</h6>
				</div>
				<div className="modal-body">
					<div className="container">
						<div className="row">
							<div className="col-4 text-center">
								<h2>kuva</h2>
							</div>
							<div className="col-8">
								<div className="row">
									<div className="col">
										<label>
											<h6>Nimi</h6>
										</label>
									</div>
									<div className="col">
										<label>
											<h6>Toimipaikka</h6>
										</label>
									</div>
								</div>
								<div className="row">
									<div className="col">
										<label htmlFor="name">
											<h6>{dieticianData.name}</h6>
										</label>
									</div>
									<div className="col">
										<label>
											<h6>{dieticianData.place}</h6>
										</label>
									</div>
								</div>
								<hr />
								<div className="row">
									<div className="col">
										<label>
											<h6>Puhelin</h6>
										</label>
									</div>
									<div className="col">
										<label>
											<h6>Sähköposti</h6>
										</label>
									</div>
								</div>
								<div className="row">
									<div className="col">
										<label htmlFor="puhelin">
											<h6>{dieticianData.phone}</h6>
										</label>
									</div>
									<div className="col">
										<label htmlFor="email">
											<h6>{dieticianData.email}</h6>
										</label>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="modal-footer">
					<form>
						<button
							type="button"
							className="btn btn-secondary mr-1"
							onClick={() => props.setIsOpen(false)}
						>
							Sulje
						</button>
						<button
							type="button"
							className="btn btn-primary ml-1"
							onClick={() => props.approveDietician(props.dieticianId)}
						>
							Hyväksy
						</button>
					</form>
				</div>
			</CustomModal>
		</>
	);
}
