import React from "react";
import "./Burguer.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = (props) => {
	let transformedIngredients = Object.keys(props.ingredients) // [salad, cheese, bacon, meat]
		.map((igKey) => {
			return [...Array(props.ingredients[igKey])].map((_, i) => {
				return <BurgerIngredient key={igKey + i} type={igKey} />;
			});
		})
		.reduce((arr, el) => {
			return arr.concat(el);
		}, []);

	/*Break down of what's happening above ⬆
			When transforming the object to an array, in the first iteration I get 
			the following: [salad, cheese, bacon, meat]

			We then merely use it to access the value of the orinal objects' keys, being 1 or 2s for my example
			of the object

			This will help because when calling ...Array(we pass either 1 or 2 which outputs) [undefined]
			or [undefined, undefined] in each iteration.

		*/

	if (transformedIngredients.length === 0) {
		transformedIngredients = <p>Please start adding some ingredientes! </p>;
	}

	return (
		<div className="Burger">
			<BurgerIngredient type="bread-top" />
			{transformedIngredients}
			<BurgerIngredient type="bread-bottom" />
		</div>
	);
};

export default Burger;
