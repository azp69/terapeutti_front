import React from "react";

export default function ExpertisesList({
	experties,
	selectedExperties,
	onChange,
}) {
	console.log("Selected experties: ", selectedExperties);
	console.log("All experties: ", experties);
	if (experties == null) return null;

	return experties.map((expertise) => {
		return (
			<div key={expertise.id} className="col-sm-12 col-md-6 col-lg-4">
				<label className="form-check-label">
					<input
						type="checkbox"
						className="form-check-input"
						id={expertise.id}
						name="expertise"
						checked={isSelectedExpertie(expertise, selectedExperties)}
						onChange={onChange}
					></input>
					{expertise.name}
				</label>
			</div>
		);
	});

	function isSelectedExpertie(expertie, selectedExperties) {
		if (selectedExperties == null) return false;
		for (let i = 0; i < selectedExperties.length; i++) {
			if (selectedExperties[i].id == expertie.id) return true;
		}
		return false;
	}
}
