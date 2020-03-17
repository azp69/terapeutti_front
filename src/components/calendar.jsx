import React, { useState } from "react";
import "../css/calendar.css";

export function Calendar({ calEvents }) {
	const calBase = drawCalendar();
	const ajanvarausTieto = {
		pvm: "2020-03-04"
	};

	const [reservationData, setReservationData] = useState(ajanvarausTieto);

	return (
		<>
			<div className="col-12 px-0 calendar">{calBase}</div>
			<Modal reservationData={reservationData} />
		</>
	);

	function Modal({ reservationData }) {
		let paiva = new Date(reservationData.pvm);
		paiva = getDayMonthYear(paiva);

		return (
			<div className="modal" id="myModal">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h4 className="modal-title">Ajanvaraus</h4>
							<button type="button" className="close" data-dismiss="modal">
								&times;
							</button>
						</div>

						<div className="modal-body">Vapaat ajat päivälle {paiva}</div>

						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-danger"
								data-dismiss="modal"
							>
								Sulje
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}

	function drawCalendarDayView() {}

	function getEventIDsForDate(date) {
		const IDs = [];
		console.log(calEvents);

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
	}

	function onCalEventClick(IDs) {
		console.log(IDs);
		/*
        console.log(calEvents[IDs].alku);
        const startTime = new Date(calEvents[IDs].alku);
        const endTime = new Date(calEvents[IDs].loppu);
        console.log(getHoursAndMinutesFromDate(startTime) + " - " + getHoursAndMinutesFromDate(endTime));
        */
		/*
        const timeTable = IDs.map((eventID) => (
           <p>{getDayMonthYear(calEvents[eventID].alku)} { getHoursAndMinutesFromDate(calEvents[eventID].alku)} - {getHoursAndMinutesFromDate(calEvents[eventID].loppu)}</p>
        ));
        */
		// console.log(timeTable);
		// setSelectedDay(timeTable);
	}

	function createCalEventPopupInfo(IDs) {
		const timeTable = IDs.map(
			eventID =>
				calEvents[eventID].kohde +
				": " +
				getHoursAndMinutesFromDate(calEvents[eventID].alku) +
				"-" +
				getHoursAndMinutesFromDate(calEvents[eventID].loppu) +
				"<br/>"
		);

		// console.log(timeTable);
		return timeTable.join("");
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

		// firstDayOfMonth = 7;
		console.log("First day of month: ", firstDayOfMonth);

		while (runningDay <= lastDayOfMonth) {
			for (let i = 1; i < 8; i++) {
				if (i >= firstDayOfMonth || runningDay > i) {
					if (runningDay > lastDayOfMonth) {
						dayCells.push(
							<div key={"paiva" + runningDay} className="col cal-cell"></div>
						);
					} else {
						let currentDateInCalendar = new Date(
							`${year}-${
								month + 1 < 10 ? "0" + (month + 1) : month + 1
							}-${runningDay} 00:00:00`
						);
						let eventIDs = getEventIDsForDate(currentDateInCalendar);

						if (eventIDs) {
							// If we have event for this day
							dayCells.push(
								<div
									key={"paiva" + runningDay}
									onClick={() => onCalEventClick(eventIDs)}
									className="col cal-cell text-nowrap text-light bg-primary"
									data-toggle="modal"
									data-target="#myModal"
								>
									<small>
										{runningDay === day ? (
											<span className="badge badge-light">{runningDay}</span>
										) : (
											runningDay
										)}
									</small>
								</div>
							);
						} // And we dont have any events for this day
						else {
							dayCells.push(
								<div
									key={"paiva" + runningDay}
									className="col cal-cell text-nowrap"
									onClick={() => onCalEventClick(null)}
									data-toggle="modal"
									data-target="#myModal"
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
