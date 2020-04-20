import React from "react";

import "@testing-library/jest-dom/extend-expect";
import { render, cleanup } from "@testing-library/react";
import Register from "./register";

afterEach(cleanup);

test("renders content", () => {
	const component = render(<Register />);

	expect(component.container).toHaveTextContent(
		"Rekisteröidy sivuillemme alla olevalla lomakkeella ja liity mukaan toimintaan!"
	);
});
