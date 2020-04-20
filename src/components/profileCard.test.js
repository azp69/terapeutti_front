import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, cleanup } from "@testing-library/react";
import ProfileCard from "./profileCard";

afterEach(cleanup);

test("renders content", () => {
	const profile = {
		id: 0,
		name: "Ano Nyymi",
		education: "TtM, laill. ravitsemusterapeutti",
		place: "Kuopio",
		email: "ano@nyymi.net",
		phone: "050-123123",
		imageUrl: "nainen.webp",
		experties: [
			{ id: "0", name: "Urheiluravitsemus" },
			{ id: "1", name: "Syömishäiriöt" },
			{ id: "2", name: "Tunnesyöminen" },
		],
	};

	const component = render(<ProfileCard {...profile} />);

	expect(component.container).toHaveTextContent(profile.name);
	expect(component.container).toHaveTextContent(profile.education);
	expect(component.container).toHaveTextContent(profile.place);
	expect(component.container).toHaveTextContent(profile.email);
	expect(component.container).toHaveTextContent(profile.phone);

	const emptyComponent = render(<ProfileCard />);
});
