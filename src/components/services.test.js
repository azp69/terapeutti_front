import React from "react";

import "@testing-library/jest-dom/extend-expect";
import { render, cleanup } from "@testing-library/react";
import Services from "./services";

afterEach(cleanup);

test("renders content", () => {
	const component = render(<Services />);

	expect(component.container).toHaveTextContent(
		"Ruoka on tärkeä osa päivittäistä hyvinvointiamme"
	);
});
