import axios from "axios";
import * as Helper from "../components/helper";

const devMode = process.env.NODE_ENV === "development" ? true : false;
const releaseUrl = "https://api.terapia.palikka.org/";
const devUrl = "http://localhost:3001/";

export function get(searchParams) {
	const debugMode = false;

	const url = devMode
		? `${devUrl}api/expertises/`
		: `${releaseUrl}api/expertises/`;

	const request = axios.get(url);

	return request;
	/*
		.then((response) => {
			console.log("Experties API Response: ", response.data);
			callBack(response.data);
		})
		.catch((error) => {
			console.log(error);
		});
		*/
}
