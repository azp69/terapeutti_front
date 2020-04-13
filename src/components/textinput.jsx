import React, { useState, useEffect } from "react";
import "../css/textInput.css";

export default function TextInput({
	label,
	id,
	placeholder,
	type,
	error,
	onChange,
	value,
	defaultValue,
}) {
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
				onChange={onChange}
				value={value}
				defaultValue={defaultValue}
			/>
		</>
	);
}
