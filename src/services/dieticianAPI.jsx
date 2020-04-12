import axios from "axios";
import * as Helper from "../components/helper";

const devMode = process.env.NODE_ENV === "development" ? true : false;
const releaseUrl = "https://api.terapia.palikka.org/";
const devUrl = "http://localhost:3001/";

export function search(params) {
	const query = `?query=${params.searchparams.query}&expertises=[${params.searchparams.expertises}]`;
	console.log("search: ", query);

	const url = devMode
		? `${devUrl}api/dieticians/${query}`
		: `${releaseUrl}api/dieticians/${query}`;

	const request = axios.get(url);

	return request;
	/*
		.then((response) => {
			Helper.log(response.data);
			callBack(response.data);
		})
		.catch((error) => {
			console.log(error);
		});

		*/
}

export function getPendingDieticians() {
	const url = devMode
		? `${devUrl}api/dieticians/?isPending=true`
		: `${releaseUrl}api/dieticians/?isPending=true`;

	const request = axios.get(url);

	return request;
}

export function get(id) {
	const url = devMode
		? `${devUrl}api/dieticians/${id}`
		: `${releaseUrl}api/dieticians/${id}`;

	const request = axios.get(url);

	return request;
	/*
		.then((response) => {
			console.log("dietician API Response: ", response.data);
			callBack(response.data);
		})
		.catch((error) => {
			callBack(null);
			console.log(error);
		});
		*/
}

export function add(data) {
	const url = devMode
		? `${devUrl}api/dieticians`
		: `${releaseUrl}api/dieticians`;

	const request = axios.post(url, data, {
		headers: {
			"Content-Type": "application/json",
		},
	});

	return request;
}

export function update(callBack, params, data) {
	const url = devMode
		? `${devUrl}api/dieticians/${params}`
		: `${releaseUrl}api/dieticians/${params}`;

	axios
		.put(url, data)
		.then((response) => {
			console.log("dietician API Response: ", response.data);
			callBack(response.data);
		})
		.catch((error) => {
			console.log(error);
		});
}

export function remove(callBack, params, data) {
	const url = devMode
		? `${devUrl}api/dieticians/${params}`
		: `${releaseUrl}api/dieticians/${params}`;

	axios
		.delete(url)
		.then((response) => {
			console.log("dietician API Response: ", response.data);
			callBack(response.data);
		})
		.catch((error) => {
			console.log(error);
		});
}
