import React, { useState } from "react";
import "../css/modal.css";

export default function Modal(props) {
	if (!props.isOpen) {
		return null;
	}

	return (
		<div id="myModal" className="custom-modal">
			<div className="container-sm card custom-modal-content">
				<div className="row">
					<div className="col-md-12">
						<button className="close" onClick={closeModal}>
							&times;
						</button>
						{props.children}
					</div>
				</div>
			</div>
		</div>
	);

	function closeModal() {
		props.setOpen(false);
	}
}
