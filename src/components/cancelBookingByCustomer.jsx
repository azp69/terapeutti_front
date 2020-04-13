import React, { useState } from "react";
import * as Helper from "./helper";
import * as BookingAPI from "../services/bookingAPI";
import TextInput from "./textinput";

import {
	NotificationContainer,
	NotificationManager,
} from "react-notifications";

import "../css/welcome.css";
import "../css/textInput.css";

export default function CancelBooking(props) {
	return (
		<div>
			<div className="row">
				<div className="col-sm-12 mt-5 card card-body bg-light">
					<div className="py-5 my-3 px-5 text-center">
						<h1>
							Voit perua tekemäsi varauksen syöttämällä alle varausnumerosi,
							sekä sähköpostiosoitteesi
						</h1>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-sm-12 mt-5 card card-body bg-light">
					<div className="py-5 my-3 px-5 text-center">
						<form>
							<div className="form-group">
								<div className="row">
									<div className="col">
										<TextInput
											id="Email"
											label="Sähköposti"
											placeholder="Syötä sähköposti"
											onChange={handleChange}
										/>
									</div>
								</div>
							</div>

							<div className="form-group">
								<TextInput
									id="bookingId"
									label="Varausnumero"
									placeholder="Syötä varausnumero"
									onChange={handleChange}
								/>
							</div>

							<button
								type="submit"
								className="btn btn-primary"
								onClick={handleSubmit}
							>
								Ok
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);

	function handleChange() {}

	function handleSubmit() {}
}
