import React from "react";
import "../css/profileCard.css";

import Nainen from "../images/nainen.webp";

const imgPath = "../images/";

export default function ProfileCard({
	id,
	name,
	place,
	education,
	email,
	phone,
	imageUrl,
	expertises,
	allExperties,
}) {
	const renderedExperties = RenderExperties(expertises, allExperties);

	return (
		<div className="card profileCard">
			<div className="card-body text-left">
				{RenderImage()}
				<p className="text-center">{name}</p>
				<p>Koulutus: {education}</p>
				<p>Paikkakunta: {place}</p>
				<p>Puhnro: {phone}</p>
				<p>Sähköposti: {email}</p>
				<p>Pätevyydet</p>
				<ul>{renderedExperties}</ul>
				<p className="text-center">
					<a href={`/terapeutit/${id}`} className="btn btn-primary">
						Varaa aika
					</a>
				</p>
			</div>
		</div>
	);

	function RenderImage() {
		try {
			return (
				<img
					src={require("../images/" + imageUrl)}
					className="card-img-top"
				></img>
			);
		} catch {
			return;
		}
	}

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
}
