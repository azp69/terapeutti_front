import React from "react";
import { Link } from "react-router-dom";
import * as Helper from "./helper";

import "../css/nav.css";

export default function Nav(props) {
	return (
		<nav className="navbar navbar-expand-md sticky-top navbar-light">
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#collapsibleNavbar"
			>
				<span className="navbar-toggler-icon"></span>
			</button>

			<div
				className="collapse navbar-collapse justify-content-center"
				id="collapsibleNavbar"
			>
				<ul className="navbar-nav">
					<li
						className="nav-link"
						data-toggle="collapse"
						data-target=".navbar-collapse.show"
					>
						<Link to="/" className="nav-link">
							Etusivu
						</Link>
					</li>
					<li
						className="nav-link"
						data-toggle="collapse"
						data-target=".navbar-collapse.show"
					>
						<Link to="/palvelut" className="nav-link">
							Palvelut
						</Link>
					</li>
					<li
						className="nav-link"
						data-toggle="collapse"
						data-target=".navbar-collapse.show"
					>
						<Link to="/miksi" className="nav-link">
							Miksi ravitsemusterapiaan
						</Link>
					</li>
					<li
						className="nav-link"
						data-toggle="collapse"
						data-target=".navbar-collapse.show"
					>
						<Link to="/yhteys" className="nav-link">
							Ota yhteyttä
						</Link>
					</li>

					{props.authenticated == 1 ? (
						<>
							<li
								className="nav-link"
								data-toggle="collapse"
								data-target=".navbar-collapse.show"
							>
								<Link to="/varaukset" className="nav-link">
									Varaukset
								</Link>
							</li>

							<li
								className="nav-link"
								data-toggle="collapse"
								data-target=".navbar-collapse.show"
							>
								<Link to="/logout" className="nav-link">
									Kirjaudu ulos
								</Link>
							</li>
						</>
					) : (
						<>
							<li
								className="nav-link"
								data-toggle="collapse"
								data-target=".navbar-collapse.show"
							>
								<Link to="/rekisteroidy" className="nav-link">
									Rekisteröidy
								</Link>
							</li>

							<li
								className="nav-link"
								data-toggle="collapse"
								data-target=".navbar-collapse.show"
							>
								<Link to="/kirjaudu" className="nav-link">
									Kirjaudu sisään
								</Link>
							</li>
						</>
					)}
				</ul>
			</div>
		</nav>
	);
}
