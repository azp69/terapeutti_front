import React, { useState } from "react";
import * as BookingAPI from "../services/bookingAPI";
import DropDownMenu from "./dropDownMenu";
import TextInput from "./textinput";
import CustomModal from "./customModal";

import {
	NotificationContainer,
	NotificationManager,
} from "react-notifications";

import "../css/calendar.css";
import "../css/modal.css";

export function Calendar({
	calEvents,
	dieticianId,
	customerData,
	onUpdate,
	openModal,
}) {
	const calBase = drawCalendar();

	const [reservationData, setReservationData] = useState();
	const [selectedDate, setSelectedDate] = useState();
	const [modalIsOpen, setIsOpen] = React.useState(false);

	return (
		<>
			<CustomModal
				isOpen={modalIsOpen}
				setOpen={(x) => {
					setIsOpen(x);
				}}
			>
				<h4>Varauskalenteri ajalle {getDayMonthYear(selectedDate)}</h4>
				<ReservationComponent selectedDate={selectedDate} />
			</CustomModal>
			<div className="col-12 px-0 calendar">{calBase}</div>
		</>
	);

	function ReservationComponent(props) {
		const hours = [
			{ begin: "08:00", end: "08:30" },
			{ begin: "08:30", end: "09:00" },
			{ begin: "09:00", end: "09:30" },
			{ begin: "09:30", end: "10:00" },
			{ begin: "10:00", end: "10:30" },
			{ begin: "10:30", end: "11:00" },
			{ begin: "11:00", end: "11:30" },
			{ begin: "11:30", end: "12:00" },
			{ begin: "12:00", end: "12:30" },
			{ begin: "12:30", end: "13:00" },
			{ begin: "13:00", end: "13:30" },
			{ begin: "13:30", end: "14:00" },
			{ begin: "14:00", end: "14:30" },
			{ begin: "14:30", end: "15:00" },
			{ begin: "15:00", end: "15:30" },
			{ begin: "15:30", end: "16:00" },
		];

		if (reservationData == null) {
			return null;
		}

		console.log("Reservation data: ", reservationData);

		const freeData = hours.filter(
			(x) => !checkForReservation(x.begin, x.end, reservationData)
		);

		const resData = freeData.map((x, index) => ({
			id: index,
			label: `${x.begin} - ${x.end}`,
			value: `${new Date(
				`${selectedDate} ${x.begin}`
			).toISOString()} ${new Date(`${selectedDate} ${x.end}`).toISOString()}`,
		}));

		const res = {
			label: "Vapaat ajat",
			data: resData,
		};

		console.log(new Date(props.selectedDate).toISOString());
		console.log(resData);

		return (
			<>
				<form>
					<DropDownMenu
						id="reservationPicker"
						label="Valitse aika "
						data={res}
						onChange={handleReservationDropDownChange}
					/>
					<TextInput
						label="Nimi"
						id="name"
						placeholder="Nimi"
						defaultValue={customerData ? customerData.name : ""}
					/>
					<TextInput
						label="Sähköposti"
						id="email"
						placeholder="Sähköposti"
						defaultValue={customerData ? customerData.email : ""}
					/>
					<TextInput
						label="Viesti"
						id="description"
						placeholder="Viesti"
						defaultValue={customerData ? customerData.description : ""}
					/>
					<button
						className="btn btn-primary"
						onClick={(e) => handleReservationSubmit(e)}
					>
						Varaa
					</button>
				</form>
			</>
		);
	}

	function handleReservationSubmit(e) {
		e.preventDefault();
		const email = document.getElementById("email").value;
		const name = document.getElementById("name").value;
		const description = document.getElementById("description").value;
		const reservation = document.getElementById("reservationPicker").value;

		const res = reservation.split(" ");
		const resStart = res[0];
		const resEnd = res[1];

		console.log("Res start", resStart);
		console.log("Res end", resEnd);

		console.log(dieticianId);
		const resObject = {
			dieticianId: dieticianId,
			startsAt: resStart,
			endsAt: resEnd,
			description: description,
			customer: {
				name: name,
				email: email,
			},
		};

		BookingAPI.add(resObject).then(
			(success) => {
				NotificationManager.success("Varaus luotiin onnistuneesti");
				if (onUpdate != null) {
					onUpdate();
				}
				setIsOpen(false);
				// console.log("API Response in responsehandler: ", response);
			},
			(error) => {
				NotificationManager.error("Virhe luotaessa varausta");
			}
		);

		console.log("Reservation data: ", resObject);
	}

	function handleReservationResponse(response) {
		if (response) {
			NotificationManager.success("Varaus luotiin onnistuneesti");
			setIsOpen(false);
			console.log("API Response in responsehandler: ", response);
		}
	}

	function handleReservationDropDownChange(e) {
		console.log("ISO Time", e.target.value);
		const times = e.target.value.split(" ");
		const startTime = new Date(times[0]);
		const endTime = new Date(times[1]);

		console.log(
			getHoursAndMinutesFromDate(startTime) +
				" - " +
				getHoursAndMinutesFromDate(endTime)
		);
	}

	function checkForReservation(begin, end, reservations) {
		const dateNow = new Date();
		console.log("nyt: ", dateNow);

		if (dateNow >= new Date(`${selectedDate} ${begin}`)) return true;

		for (let i = 0; i < reservations.length; i++) {
			let element = reservations[i];
			const start = getHoursAndMinutesFromDate(new Date(element.startsAt));
			const endd = getHoursAndMinutesFromDate(new Date(element.endsAt));
			if (start.includes(begin) && endd.includes(end)) return true;
		}
		return false;
	}

	function onCalDayClick(date) {
		BookingAPI.get(
			`?dieticianId=${dieticianId}&startDate=${date}&endDate=${date}`
		).then((success) => {
			setReservationData(success.data);
		});

		setSelectedDate(date);
		setIsOpen(true);
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
			"Joulukuu",
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

export function getNameOfDay(date) {
	const daysShortSuomi = ["Su", "Ma", "Ti", "Ke", "To", "Pe", "La"];
	const d = new Date(date);
	console.log(d.getDay());
	return daysShortSuomi[d.getDay()];
}
