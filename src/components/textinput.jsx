import React, { useState, useEffect } from "react";

export default function TextInput({ label, id, placeholder, type, error }) {
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
