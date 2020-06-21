import React from "react";
import "./BuildControl.css";

const BuildControl = ({ addIngredient, label, removeIngredient, disabled }) => {
	return (
		<div className="BuildControl">
			<div className="Label">{label}</div>
			<button
				className="Less"
				onClick={removeIngredient}
				disabled={disabled}
			>
				Less
			</button>
			<button className="More" onClick={addIngredient}>
				More
			</button>
		</div>
	);
};

export default BuildControl;
