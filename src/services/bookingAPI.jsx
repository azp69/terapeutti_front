import axios from "axios";
import * as Helper from "../components/helper";

const devMode = process.env.NODE_ENV === "development" ? true : false;
const releaseUrl = "https://api.terapia.palikka.org/";
const devUrl = "http://localhost:3001/";

export function get(params) {
	const url = devMode
		? `${devUrl}api/bookings/${params}`
		: `${releaseUrl}api/bookings/${params}`;

	const request = axios.get(url, {
		headers: {
			AccessToken: Helper.getCookie("accesstoken"),
		},
	});

	return request;
	/*
		.then((response) => {
			console.log("bookings API Response: ", response.data);
			callBack(response.data);
		})
		.catch((error) => {
			callBack(null);
			console.log(error);
		});
		*/
}

export function add(data) {
	const url = devMode ? `${devUrl}api/bookings` : `${releaseUrl}api/bookings`;

	const request = axios.post(url, data, {
		headers: {
			"Content-Type": "application/json",
		},
	});

	return request;

	/*
		.then((response) => {
			if (callBack != null) {
				callBack(response.data);
			}
		})
		.catch((error) => {
			console.log("Error in bookings api: ", error);
			if (callBack != null) {
				callBack(error.response.data);
			}
			// callBack(error.response.data);
		});
		*/
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
*/

export function remove(params) {
	const url = devMode
		? `${devUrl}api/bookings/${params}`
		: `${releaseUrl}api/bookings/${params}`;

	const request = axios.delete(url, {
		headers: {
			AccessToken: Helper.getCookie("accesstoken"),
		},
	});

	return request;
}

export function cancelBookingByCustomer(params) {
	const url = devMode
		? `${devUrl}api/bookings/${params}`
		: `${releaseUrl}api/bookings/${params}`;

	const request = axios.delete(url, {
		headers: {
			AccessToken: Helper.getCookie("accesstoken"),
		},
	});

	return request;
}
