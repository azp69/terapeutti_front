import axios from "axios";
import * as Helper from "../components/helper";

const devMode = process.env.NODE_ENV === "development" ? true : false;
const releaseUrl = "https://api.terapia.palikka.org/";
const devUrl = "http://localhost:3001/";

export function get(callBack, params) {
	const url = devMode
		? `${devUrl}api/bookings/${params}`
		: `${releaseUrl}api/bookings/${params}`;

	axios
		.get(url)
		.then((response) => {
			console.log("bookings API Response: ", response.data);
			callBack(response.data);
		})
		.catch((error) => {
			callBack(null);
			console.log(error);
		});
}

export function add(callBack, data) {
	const url = devMode ? `${devUrl}api/bookings` : `${releaseUrl}api/bookings`;

	axios
		.post(url, data, {
			headers: {
				"Content-Type": "application/json",
			},
		})
		.then((response) => {
			if (callBack != null) {
				callBack(response.data);
			}
		})
		.catch((error) => {
			console.log(error);
			// callBack(error.response.data);
		});
}

/*

export function update(callBack, params, data) {
	const url = devMode
		? `${devUrl}api/dieticians/${params}`
		: `${releaseUrl}api/dieticians/${params}`;

	axios
		.put(url, data)
		.then(response => {
			console.log("dietician API Response: ", response.data);
			callBack(response.data);
		})
		.catch(error => {
			console.log(error);
		});
}

export function remove(callBack, params, data) {
	const url = devMode
		? `${devUrl}api/dieticians/${params}`
		: `${releaseUrl}api/dieticians/${params}`;

	axios
		.delete(url)
		.then(response => {
			console.log("dietician API Response: ", response.data);
			callBack(response.data);
		})
		.catch(error => {
			console.log(error);
		});
}
*/
