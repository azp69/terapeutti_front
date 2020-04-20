import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, cleanup } from "@testing-library/react";
import CancelBooking from "./cancelBookingByCustomer";

afterEach(cleanup);

test("renders content", () => {
	const component = render(<CancelBooking />);

	expect(component.container).toHaveTextContent(
		"Voit perua tekemäsi varauksen syöttämällä alle varausnumerosi"
	);
});
