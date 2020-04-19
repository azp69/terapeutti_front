import React, { useState, useEffect } from "react";
import * as BookingAPI from "../services/bookingAPI";
import * as DieticianAPI from "../services/dieticianAPI";
import * as ExpertiesAPI from "../services/expertiesAPI";
import DieticianProfileEdit from "./dieticianProfileEdit";
import { Calendar } from "./calendar";

import * as Helper from "./helper";
import ExpertiesList from "./expertiesList";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect,
} from "react-router-dom";

import {
	getHoursAndMinutesFromDate,
	getDayMonthYear,
	getNameOfDay,
} from "./calendar";

import {
	NotificationContainer,
	NotificationManager,
} from "react-notifications";

import "../css/welcome.css";
import TextInput from "./textinput";

export default function DieticianBookings(props) {
	const [reservationData, setReservationData] = useState();
	const [dieticianData, setDieticianData] = useState();
	const [experties, setExperties] = useState();
	const [customerData, setCustomerData] = useState();
	const [openModal, setOpenModal] = useState(false);
	const [oldBookingId, setOldBookingId] = useState();

	const dieticianId = Helper.getCookie("dieticianId");
	const today = convertDate(new Date());

	useEffect(() => {
		getBookings();
	}, []);

	useEffect(() => {
		DieticianAPI.get(dieticianId).then((success) => {
			setDieticianData(success.data);
			console.log("vastaus: ", success.data);
		});
	}, []);

	useEffect(() => {
		ExpertiesAPI.get().then((success) => {
			setExperties(success.data);
		});
	}, []);

	if (reservationData == null)
		return (
			<div className="col-sm-12 mt-5 card card-body bg-light">
				<div className="py-5 my-3 px-5 text-center">
					<h1>Ladataan tietoja...</h1>
				</div>
			</div>
		);

	let resData = [...reservationData].sort(compareDates);

	let resDataToday = resData
		.filter((x) => convertDate(x.startsAt) == convertDate(today))
		.sort(compareDates);

	// resDataToday = resDataToday.sort(x.startsAt);

	const resDataTomorrow = resData
		.filter((x) => convertDate(x.startsAt) == convertDate(addDays(today, 1)))
		.sort(compareDates);

	console.log("Res today: ", resDataToday);
	console.log("Res tomorrow", resDataTomorrow);

	const reservationsToday = resDataToday.map((x, index) => {
		return (
			<tr
				key={`resTodayRow_1_${index}`}
				className={x.id == oldBookingId ? `bg-dark text-light` : ``}
			>
				<td key={`resTodayCell_1_${index}`}>
					{getNameOfDay(x.startsAt)} {getDayMonthYear(x.startsAt)}{" "}
					{getHoursAndMinutesFromDate(x.startsAt)} -{" "}
					{getHoursAndMinutesFromDate(x.endsAt)}
				</td>
				<td key={`resTodayCell_2_${index}`}>
					{x.hasOwnProperty("customer") ? (
						<a href={"mailto:" + x.customer.email}>{x.customer.name}</a>
					) : (
						""
					)}
				</td>
				<td key={`resTodayCell_3_${index}`}>{x.description}</td>
				<td key={`resTodayCell_4_${index}`} className="text-right">
					<button
						className="btn btn-info mr-2"
						onClick={() => handleOnBookingEdit(x.id)}
					>
						Muokkaa
					</button>

					<button
						className="btn btn-danger mr-2"
						onClick={() => deleteBooking(x.id)}
					>
						Peruuta
					</button>
				</td>
			</tr>
		);
	});

	const reservationTomorrow = resDataTomorrow.map((x, index) => {
		console.log("varausid ", x.id);
		return (
			<tr
				key={`resTomorrowRow_1_${index}`}
				className={x.id == oldBookingId ? `bg-dark text-light` : ``}
			>
				<td key={`resTomorrowRow_1_${index}`}>
					{getNameOfDay(x.startsAt)} {getDayMonthYear(x.startsAt)}{" "}
					{getHoursAndMinutesFromDate(x.startsAt)} -{" "}
					{getHoursAndMinutesFromDate(x.endsAt)}
				</td>
				<td key={`resTomorrowRow_2_${index}`}>
					{x.hasOwnProperty("customer") ? (
						<a href={"mailto:" + x.customer.email}>{x.customer.name}</a>
					) : (
						""
					)}
				</td>
				<td key={`resTomorrowRow_3${index}`}>{x.description}</td>
				<td key={`resTomorrowRow_4_${index}`} className="text-right">
					<button
						className="btn btn-info mr-2"
						onClick={() => handleOnBookingEdit(x.id)}
					>
						Muokkaa
					</button>

					<button
						className="btn btn-danger mr-2"
						onClick={() => deleteBooking(x.id)}
					>
						Peruuta
					</button>
				</td>
			</tr>
		);
	});

	const reservationRest = resData.map((x, index) => {
		return (
			<tr
				key={`resRow_1_${index}`}
				className={x.id == oldBookingId ? `bg-dark text-light` : ``}
			>
				<td key={`resCell_1_${index}`}>
					{getNameOfDay(x.startsAt)} {getDayMonthYear(x.startsAt)}{" "}
					{getHoursAndMinutesFromDate(x.startsAt)} -{" "}
					{getHoursAndMinutesFromDate(x.endsAt)}
				</td>
				<td key={`resCell_2_${index}`}>
					{x.hasOwnProperty("customer") ? (
						<a href={"mailto:" + x.customer.email}>{x.customer.name}</a>
					) : (
						""
					)}
				</td>
				<td key={`resCell_3_${index}`}>{x.description}</td>
				<td key={`resCell_4_${index}`} className="text-right">
					<button
						className="btn btn-info mr-2"
						onClick={() => handleOnBookingEdit(x.id)}
					>
						Muokkaa
					</button>

					<button
						className="btn btn-danger mr-2"
						onClick={() => deleteBooking(x.id)}
					>
						Peruuta
					</button>
				</td>
			</tr>
		);
	});

	console.log("Dietician data ", dieticianData);

	if (dieticianData == null) return null;

	return (
		<>
			<DieticianProfileEdit
				profile={dieticianData}
				dataChangeHandler={handleChangeDieticianValues}
				handleSubmitData={handleSubmitData}
				handleCancel={handleCancel}
				experties={experties}
				handleExpertiesChange={handleExpertiesChange}
			/>
			<div className="row">
				<div className="col-sm-12 mt-4 px-0">
					<div className="card">
						<div className="card-body bg-light">
							<h1>Varauskalenterisi</h1>
							<Calendar
								dieticianId={dieticianData.id}
								onUpdate={onReservationUpdate}
								customerData={customerData}
								openModal={openModal}
							/>
						</div>
					</div>
				</div>

				<div className="col-sm-12 mt-4 px-0">
					<div className="card">
						<div className="card-body bg-light">
							<h1>Varaukset tänään</h1>
							<table className="table">
								<thead>
									<tr>
										<th>Ajankohta</th>
										<th>Asiakas</th>
										<th>Viesti</th>
										<th></th>
									</tr>
								</thead>
								<tbody>{reservationsToday}</tbody>
							</table>
						</div>
					</div>
				</div>

				<div className="col-sm-12 mt-4 px-0">
					<div className="card">
						<div className="card-body bg-light">
							<h1>Varaukset huomenna</h1>
							<table className="table">
								<thead>
									<tr>
										<th>Ajankohta</th>
										<th>Asiakas</th>
										<th>Viesti</th>
										<th></th>
									</tr>
								</thead>
								<tbody>{reservationTomorrow}</tbody>
							</table>
						</div>
					</div>
				</div>

				<div className="col-sm-12 mt-4 px-0">
					<div className="card">
						<div className="card-body bg-light">
							<h1>Varaukset seuraavat 2 viikkoa</h1>
							<table className="table">
								<thead>
									<tr>
										<th>Ajankohta</th>
										<th>Asiakas</th>
										<th>Viesti</th>
										<th></th>
									</tr>
								</thead>

								<tbody>{reservationRest}</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</>
	);

	function onReservationUpdate() {
		if (oldBookingId != null) {
			BookingAPI.remove(oldBookingId).then((success) => {});
		}
		getBookings();
		setCustomerData(null);
		setOldBookingId(null);
	}

	function handleChangeDieticianValues(e) {
		if (e.target.id == "name")
			setDieticianData({ ...dieticianData, name: e.target.value });

		if (e.target.id == "phone")
			setDieticianData({ ...dieticianData, phone: e.target.value });

		if (e.target.id == "education")
			setDieticianData({ ...dieticianData, education: e.target.value });

		if (e.target.id == "Place")
			setDieticianData({ ...dieticianData, place: e.target.value });
	}

	function handleCancel() {
		DieticianAPI.get(dieticianId).then((success) => {
			setDieticianData(success.data);
			NotificationManager.success("Tekemäsi muutokset peruutettiin");
		});
	}

	function handleOnBookingEdit(bookingId) {
		if (oldBookingId == bookingId) {
			setOldBookingId(null);
			setCustomerData(null);
			return;
		}

		setOldBookingId(bookingId);
		console.log("Booking id:", bookingId);
		const cust = reservationData.filter((x) => x.id == bookingId);
		console.log("custo ", cust);
		setCustomerData({ ...cust[0].customer, description: cust[0].description });
		setOpenModal(true);
	}

	function handleExpertiesChange(e) {
		for (let i = 0; i < dieticianData.expertises.length; i++) {
			if (dieticianData.expertises[i].id == e.target.id) {
				let exp = dieticianData.expertises;
				exp.splice(i, 1);

				setDieticianData({ ...dieticianData, expertises: exp });
				return;
			}
		}

		let exp = dieticianData.expertises;
		exp.push({ id: e.target.id });

		setDieticianData({ ...dieticianData, expertises: exp });
	}

	function handleSubmitData(e) {
		e.preventDefault();

		let checkedExperties = [];

		try {
			dieticianData.expertises.forEach((c) => {
				checkedExperties.push(parseInt(c.id));
			});
		} catch {}

		console.log("Expertises to submit: ", checkedExperties);
		console.log("DieticianData to submit: ", dieticianData);

		DieticianAPI.update(dieticianId, {
			...dieticianData,
			expertises: checkedExperties,
		}).then(
			(success) => {
				NotificationManager.success("Tiedot päivitettiin onnistuneesti.");
				DieticianAPI.get(dieticianId).then((success) => {
					setDieticianData(success.data);
				});
			},

			(error) => {
				console.log("virhettä pukkaa");
				if (error.response.status === 401) {
					NotificationManager.error("Autentikointivirhe. Kirjaudu sisään.");
					Helper.setCookie("dieticianId", "", -1);
					Helper.setCookie("admin", "", -1);
					Helper.setCookie("accesstoken", "", -1);
					props.authenticationHandler({ admin: 0, auth: 0 });
					setTimeout(() => window.location.assign("/kirjaudu"), 2000);
				}
			}
		);
	}
	function compareDates(a, b) {
		if (a.startsAt > b.startsAt) return 1;
		if (a.startsAt < b.startsAt) return -1;
		return 0;
	}

	function getBookings() {
		console.log("Getting booking data");
		console.log("token: ", Helper.getCookie("accesstoken"));
		console.log("dieticianId: ", Helper.getCookie("dieticianId"));
		const today = convertDate(new Date());
		const endDate = convertDate(addDays(new Date(), 14));
		BookingAPI.get(
			`?dieticianId=${dieticianId}&startDate=${today}&endDate=${endDate}`
		).then(
			(success) => {
				console.log("Got response from booking api");
				setReservationData(success.data);
			},
			(error) => {
				if (error.response.status === 401) {
					NotificationManager.error("Autentikointivirhe. Kirjaudu sisään.");
					Helper.setCookie("dieticianId", "", -1);
					Helper.setCookie("admin", "", -1);
					Helper.setCookie("accesstoken", "", -1);
					props.authenticationHandler({ admin: 0, auth: 0 });
					setTimeout(() => window.location.assign("/kirjaudu"), 2000);
				} else NotificationManager.error("Virhe ladattaessa tietoja.");

				console.log(error.response.status);
			}
		);
	}

	function convertDate(date) {
		const d = new Date(date);
		const year = d.getFullYear();
		const month = d.getMonth();
		const day = d.getDate();

		let currentDateInCalendar = `${year}-${
			month + 1 < 10 ? "0" + (month + 1) : month + 1
		}-${day < 10 ? "0" + day : day}`;

		return currentDateInCalendar;
	}

	function addDays(date, days) {
		var result = new Date(date);
		result.setDate(result.getDate() + days);
		return result;
	}

	function deleteBooking(id) {
		let r = window.confirm("Haluatko varmasti poistaa varauksen?");
		if (r == true) {
			BookingAPI.remove(id).then(
				(success) => {
					NotificationManager.success("Varaus poistettu");
					getBookings();
				},
				(error) => {
					if (error.response.status === 401) {
						NotificationManager.error("Autentikointivirhe. Kirjaudu sisään.");
						Helper.setCookie("dieticianId", "", -1);
						Helper.setCookie("admin", "", -1);
						Helper.setCookie("accesstoken", "", -1);
						props.authenticationHandler({ admin: 0, auth: 0 });
						setTimeout(() => window.location.assign("/kirjaudu"), 2000);
					} else NotificationManager.error("Virhe poistaessa varausta");
				}
			);
		}
	}
}
