import React, { useState, useEffect } from "react";

export default function DropDownMenu(props) {
	console.log(props.data);
	try {
		const data = props.data.data.map((x, index) => {
			return (
				<option key={`option_${index}`} value={x.value}>
					{x.label}
				</option>
			);
		});

		return (
			<>
				<label htmlFor={props.id}>{props.label}</label>
				<select
					className="form-control"
					id={props.id}
					onChange={props.onChange}
				>
					{data}
				</select>
			</>
		);
	} catch {
		return null;
	}
}
