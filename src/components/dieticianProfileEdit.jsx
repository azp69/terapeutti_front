import React from "react";
import TextInput from "./textinput";
import ExpertiesList from "./expertiesList";

export default function DieticianProfileEdit({
	profile,
	dataChangeHandler,
	handleCancel,
	handleSubmitData,
	experties,
	handleExpertiesChange,
}) {
	if (profile == null) return null;

	return (
		<div className="row">
			<div className="col-sm-12 mt-5 card card-body bg-light">
				<h4>Omat tiedot</h4>
				<h5 className="text-danger">
					{profile.isPending ? "Profiilisi odottaa vahvistusta" : ""}
				</h5>
				<hr />

				<div className="container">
					<div className="row">
						<div className="col-4 text-center">
							<h2>kuva</h2>
						</div>
						{/*ekan rivin tiedot*/}
						<div className="col-8">
							<div className="row">
								<div className="col form-group">
									<label>
										<h6>Etunimi</h6>
									</label>
									<TextInput
										value={profile.name}
										id="name"
										onChange={dataChangeHandler}
									></TextInput>
								</div>

								<div className="col">
									<label>
										<h6>Toimipaikka</h6>
									</label>
									<select
										className="form-control"
										id="Place"
										onChange={dataChangeHandler}
										value={profile.place}
									>
										<RenderPlaces place={profile.place} />
									</select>
								</div>
							</div>

							<hr />

							{/*toisen rivin tiedot*/}
							<div className="row">
								<div className="col">
									<label>
										<h6>Puhelin</h6>
									</label>
									<TextInput
										value={profile.phone}
										id="phone"
										onChange={dataChangeHandler}
									></TextInput>
								</div>
								<div className="col">
									<label>
										<h6>Koulutus</h6>
									</label>
									<TextInput
										value={profile.education}
										id="education"
										onChange={dataChangeHandler}
									></TextInput>
								</div>
							</div>
						</div>

						<div className="row">
							<div className="col-sm-12">
								<hr />
								<h5>Erikoisosaamiset</h5>
							</div>
							<ExpertiesList
								experties={experties}
								selectedExperties={profile.expertises}
								onChange={handleExpertiesChange}
							/>
						</div>

						<div className="col-sm-12 text-center">
							<hr />
							<button
								type="button"
								className="btn btn-primary mr-1"
								onClick={handleSubmitData}
							>
								Tallenna
							</button>
							<button
								type="button"
								className="btn btn-danger ml-1"
								onClick={handleCancel}
							>
								Peruuta
							</button>
						</div>
					</div>
				</div>

				<hr />
			</div>
		</div>
	);

	function RenderPlaces({ place }) {
		const places = [
			{ id: 0, place: "Helsinki" },
			{ id: 1, place: "Espoo" },
			{ id: 2, place: "Kuopio" },
			{ id: 3, place: "Oulu" },
			{ id: 4, place: "Vantaa" },
			{ id: 5, place: "Turku" },
		];

		console.log("place ", place);

		const p = places.map((x) => {
			return <option key={`place_${x.id}`}>{x.place}</option>;
		});

		return p;
	}
}
