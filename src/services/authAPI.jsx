import axios from "axios";
import * as Helper from "../components/helper";

const devMode = process.env.NODE_ENV === "development" ? true : false;
const releaseUrl = "https://api.terapia.palikka.org/";
const devUrl = "http://localhost:3001/";

export function login(data) {
	const url = devMode ? `${devUrl}api/auth/` : `${releaseUrl}api/auth/`;

	const request = axios.post(url, data);
	return request;
}

export function logout() {
	const url = devMode ? `${devUrl}api/auth/` : `${releaseUrl}api/auth/`;

	const request = axios.delete(url, {
		headers: {
			AccessToken: Helper.getCookie("accesstoken"),
		},
	});
	return request;
}
