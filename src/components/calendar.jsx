import React, { useState } from "react";
import * as Booking from "../services/bookingAPI";

import "../css/calendar.css";
import "../css/modal.css";

export function Calendar({ calEvents, dieticianId }) {
	const calBase = drawCalendar();

	const [reservationData, setReservationData] = useState(null);
	const [selectedDate, setSelectedDate] = useState("2020-03-10 12:00:00");
	const [modalIsOpen, setIsOpen] = React.useState(false);

	return (
		<>
			<Modal />
			<div className="col-12 px-0 calendar">{calBase}</div>
			<div>{selectedDate}</div>
		</>
	);

	function openModal() {
		setIsOpen(true);
	}

	function closeModal() {
		setIsOpen(false);
	}

	function Modal() {
		if (!modalIsOpen) {
			return null;
		}

		return (
			<div id="myModal" className="custom-modal">
				<div className="container-sm card custom-modal-content">
					<div className="row">
						<div className="col-md-12 col-lg-5">
							<button className="close" onClick={closeModal}>
								&times;
							</button>
							<h4>Varauskalenteri ajalle {getDayMonthYear(selectedDate)}</h4>
							<CalendarDayView />
						</div>
						<div className="col-md-12 col-lg-7">
							<h4>Varauksen tiedot</h4>
						</div>
					</div>
				</div>
			</div>
		);
	}

	function CalendarDayView() {
		const hours = [
			{ begin: "08:00", end: "09:00" },
			{ begin: "09:00", end: "10:00" },
			{ begin: "10:00", end: "11:00" },
			{ begin: "11:00", end: "12:00" },
			{ begin: "12:00", end: "13:00" },
			{ begin: "13:00", end: "14:00" },
			{ begin: "14:00", end: "15:00" },
			{ begin: "15:00", end: "16:00" },
			{ begin: "16:00", end: "17:00" }
		];

		const rows = hours.map((h, index) => {
			return (
				<tr key={`tr1 ${index}`}>
					<td key={`td1 ${index}`}>
						{h.begin} - {h.end}
					</td>
					<td key={`td2 ${index}`}>
						<button className="btn btn-primary">Varaa</button>
					</td>
				</tr>
			);
		});

		return (
			<table className="table table-striped">
				<tbody>{rows}</tbody>
			</table>
		);
	}

	function getEventIDsForDate(date) {
		/*
		const IDs = [];
		// console.log(calEvents);

		const referenceDate = new Date(date);
		try {
			for (var i = 0; i < calEvents.length; i++) {
				const d = new Date(calEvents[i].alku);
				if (
					d.getDate() === referenceDate.getDate() &&
					d.getMonth() === referenceDate.getMonth() &&
					d.getFullYear() === referenceDate.getFullYear()
				) {
					IDs.push(calEvents[i].id); // return calEvents[i].id;
				}
			}
		} catch {}

		if (IDs.length > 0) return IDs;
		else return null;

		*/
	}

	function onCalDayClick(date) {
		Booking.get(
			setReservationData,
			`?dieticianId=${dieticianId}&startDate=${date}&endDate=${date}`
		);
		setSelectedDate(date);
		openModal();
	}

	function drawCalendar() {
		const today = new Date();
		// const today = new Date("2020-07-10");
		const day = today.getDate();
		// const day = today.getDate() < 10 ? ((today.getDate())) : (today.getDate());
		const month = today.getMonth();
		const year = today.getFullYear();
		const dayOfWeek = today.getDay();
		const lastDayOfMonth = new Date(year, month + 1, 0).getDate();
		const firstDayOfMonth =
			new Date(year, month, 1).getDay() === 0
				? 7
				: new Date(year, month, 1).getDay();
		const months = [
			"Tammikuu",
			"Helmikuu",
			"Maaliskuu",
			"Huhtikuu",
			"Toukokuu",
			"Kesäkuu",
			"Heinäkuu",
			"Elokuu",
			"Syyskuu",
			"Lokakuu",
			"Marraskuu",
			"Joulukuu"
		];
		const monthShort = [
			"Tam",
			"Hel",
			"Maa",
			"Huh",
			"Tou",
			"Kes",
			"Hei",
			"Elo",
			"Syy",
			"Lok",
			"Mar",
			"Jou"
		];
		const days = [
			"Sunnuntai",
			"Maanantai",
			"Tiistai",
			"Keskiviikko",
			"Torstai",
			"Perjantai",
			"Lauantai"
		];
		const daysShortSuomi = ["Ma", "Ti", "Ke", "To", "Pe", "La", "Su"];

		let runningDay = 1;

		let weekRows = [];
		let dayCells = [];

		for (let i = 0; i < 7; i++) {
			dayCells.push(
				<div key={"otsikot" + i} className="col bg-primary text-light">
					{daysShortSuomi[i]}
				</div>
			);
		}

		weekRows.push(
			<div key={"viikkorivi"} className="row">
				{dayCells}
			</div>
		);
		dayCells = [];

		// console.log("First day of month: ", firstDayOfMonth);

		while (runningDay <= lastDayOfMonth) {
			for (let i = 1; i < 8; i++) {
				if (i >= firstDayOfMonth || runningDay > i) {
					if (runningDay > lastDayOfMonth) {
						dayCells.push(
							<div key={"paiva" + runningDay} className="col cal-cell"></div>
						);
					} else {
						let currentDateInCalendar = `${year}-${
							month + 1 < 10 ? "0" + (month + 1) : month + 1
						}-${runningDay < 10 ? "0" + runningDay : runningDay}`;

						// let eventIDs = getEventIDsForDate(currentDateInCalendar);
						// console.log(currentDateInCalendar);

						dayCells.push(
							<div
								key={"paiva" + runningDay}
								className="col cal-cell text-nowrap"
								onClick={() => onCalDayClick(currentDateInCalendar)}
							>
								<small>
									{runningDay === day ? (
										<span className="badge badge-primary">{runningDay}</span>
									) : (
										runningDay
									)}
								</small>
							</div>
						);
					}
					runningDay++;
				} else {
					dayCells.push(
						<div key={runningDay + i} className="col cal-cell"></div>
					);

					let currentDateInCalendar = new Date(
						`${year}-${
							month + 1 < 10 ? "0" + (month + 1) : month + 1
						}-${runningDay + 1} 00:00:00`
					);
				}
			}

			weekRows.push(
				<div key={"viikkorivi" + runningDay} className="row">
					{dayCells}
				</div>
			);
			dayCells = [];
		}

		return (
			<div className="card">
				<div className="card-header">
					<h5 className="text-center">
						{months[month]} {year}
					</h5>
				</div>
				<div className="card-body px-3 py-0">{weekRows}</div>
			</div>
		);
	}
}

export function getHoursAndMinutesFromDate(date) {
	const d = new Date(date);
	const hours = d.getHours() < 10 ? "0" + d.getHours() : d.getHours();
	const minutes = d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes();
	return `${hours}:${minutes}`;
}

export function getDayMonthYear(date) {
	const d = new Date(date);

	const day = d.getDate() < 10 ? "0" + d.getDate() : d.getDate();
	const month =
		d.getMonth() + 1 < 10 ? "0" + (d.getMonth() + 1) : d.getMonth() + 1;
	const year = d.getFullYear();

	return `${day}.${month}.${year}`;
}

export function getMonthAndDay(date) {
	const d = new Date(date);

	const day = d.getDate() < 10 ? "0" + d.getDate() : d.getDate();
	const month =
		d.getMonth() + 1 < 10 ? "0" + (d.getMonth() + 1) : d.getMonth() + 1;
	const year = d.getFullYear();

	return `${day}.${month}.`;
}
