import axios from "axios";

const devMode = process.env.NODE_ENV === "development" ? true : false;
const releaseUrl = "https://api.terapia.palikka.org/";
const devUrl = "http://localhost:3001/";

export function login(callBack, data) {
	const url = devMode ? `${devUrl}api/login/` : `${releaseUrl}api/login/`;

	axios
		.post(url, data)
		.then((response) => {
			console.log("Login API Response: ", response.data);
			callBack(response.data);
		})
		.catch((error) => {
			callBack(null);
			console.log(error);
		});
}
