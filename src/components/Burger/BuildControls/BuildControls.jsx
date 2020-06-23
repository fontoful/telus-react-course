import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import "./BuildControls.css";

const controls = [
	{ label: "Salad", type: "salad" },
	{ label: "Bacon", type: "bacon" },
	{ label: "Cheese", type: "cheese" },
	{ label: "Meat", type: "meat" },
];

const BuildControls = ({
	ingredientAdded,
	ingredientRemoved,
	disabled,
	price,
	purchasable,
	modal,
}) => {
	return (
		<div className="BuildControls">
			<p>
				Current price: <strong>{price.toFixed(2)}</strong>
			</p>
			{controls.map((ctrl) => {
				return (
					<BuildControl
						key={ctrl.label}
						label={ctrl.label}
						addIngredient={() => ingredientAdded(ctrl.type)}
						removeIngredient={() => ingredientRemoved(ctrl.type)}
						disabled={disabled[ctrl.type]}
					/>
				);
			})}
			<button
				onClick={() => modal()}
				disabled={!purchasable}
				className="OrderButton"
			>
				ORDER NOW!
			</button>
		</div>
	);
};

export default BuildControls;
