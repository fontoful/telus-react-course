import React, { Component } from "react";
import "./Modal.css";
import Backdrop from "../Backdrop/Backdrop";

class Modal extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		return nextProps.show !== this.props.show;
	}

	componentDidUpdate() {
		console.log("[modal.js] will update");
	}

	render() {
		return (
			<>
				<Backdrop
					show={this.props.show}
					clicked={this.props.modalClosed}
				/>
				<div
					style={{
						transform: this.props.show
							? "translateY(0)"
							: "translateY(-100vh)",
						opacity: this.props.show ? "1" : "0",
					}}
					className="Modal"
				>
					{this.props.children}
				</div>
			</>
		);
	}
}

export default Modal;
