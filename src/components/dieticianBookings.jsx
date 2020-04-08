import React, { useState, useEffect } from "react";
import * as BookingAPI from "../services/bookingAPI";
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

export default function DieticianBookings(props) {
	const [reservationData, setReservationData] = useState();

	const dieticianId = "9b2a7778-73aa-4841-8a31-f88f6be268bf";
	const today = convertDate(new Date());

	useEffect(() => {
		getBookings();
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
			<tr key={`resTodayRow_1_${index}`}>
				<td key={`resTodayCell_1_${index}`}>
					{getNameOfDay(x.startsAt)} {getDayMonthYear(x.startsAt)}{" "}
					{getHoursAndMinutesFromDate(x.startsAt)} -{" "}
					{getHoursAndMinutesFromDate(x.endsAt)}
				</td>
				<td key={`resTodayCell_2_${index}`}>
					{x.hasOwnProperty("customer") ? x.customer.id : ""}
				</td>
				<td key={`resTodayCell_3_${index}`}>{x.description}</td>
				<td key={`resTodayCell_4_${index}`}>
					<button className="btn btn-danger" onClick={() => deleteBooking()}>
						Peruuta
					</button>
				</td>
			</tr>
		);
	});

	const reservationTomorrow = resDataTomorrow.map((x, index) => {
		return (
			<tr key={`resTomorrowRow_1_${index}`}>
				<td key={`resTomorrowRow_1_${index}`}>
					{getNameOfDay(x.startsAt)} {getDayMonthYear(x.startsAt)}{" "}
					{getHoursAndMinutesFromDate(x.startsAt)} -{" "}
					{getHoursAndMinutesFromDate(x.endsAt)}
				</td>
				<td key={`resTomorrowRow_2_${index}`}>
					{x.hasOwnProperty("customer") ? x.customer.id : ""}
				</td>
				<td key={`resTomorrowRow_3${index}`}>{x.description}</td>
				<td key={`resTomorrowRow_4_${index}`}>
					<button className="btn btn-danger" onClick={() => deleteBooking()}>
						Peruuta
					</button>
				</td>
			</tr>
		);
	});

	const reservationRest = resData.map((x, index) => {
		return (
			<tr key={`resRow_1_${index}`}>
				<td key={`resCell_1_${index}`}>
					{getNameOfDay(x.startsAt)} {getDayMonthYear(x.startsAt)}{" "}
					{getHoursAndMinutesFromDate(x.startsAt)} -{" "}
					{getHoursAndMinutesFromDate(x.endsAt)}
				</td>
				<td key={`resCell_2_${index}`}>
					{x.hasOwnProperty("customer") ? x.customer.id : ""}
				</td>
				<td key={`resCell_3_${index}`}>{x.description}</td>
				<td key={`resCell_4_${index}`}>
					<button
						className="btn btn-danger"
						onClick={() => deleteBooking(x.id)}
					>
						Peruuta
					</button>
				</td>
			</tr>
		);
	});

	return (
		<div className="row">
			<div className="col-sm-12 mt-5 card card-body bg-light">
				<div className="py-5 my-3 px-5 text-center">
					<h1>Oma varauskalenterisi</h1>
					<p>dieticianId: {dieticianId}</p>
				</div>
			</div>

			<div className="col-sm-12 mt-4 px-0">
				<div className="card-group">
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
			</div>

			<div className="col-sm-12 mt-4 px-0">
				<div className="card-deck">
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
		</div>
	);

	function compareDates(a, b) {
		if (a.startsAt > b.startsAt) return 1;
		if (a.startsAt < b.startsAt) return -1;
		return 0;
	}

	function getBookings() {
		const today = convertDate(new Date());
		const endDate = convertDate(addDays(new Date(), 14));
		BookingAPI.get(
			`?dieticianId=${dieticianId}&startDate=${today}&endDate=${endDate}`
		).then(
			(success) => {
				setReservationData(success.data);
			},
			(error) => {
				NotificationManager.error("Virhe ladattaessa varaustietoja");
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
				(rejected) => {
					NotificationManager.error("Virhe poistaessa varausta");
				}
			);
		}
	}
}
