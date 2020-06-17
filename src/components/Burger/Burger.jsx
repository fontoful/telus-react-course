import React from "react";
import "./Burguer.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = (props) => {
	const transformedIngredients = Object.keys(props.ingredients) // [salad, cheese, bacon, meat]
		.map((igKey) => {
			return [...Array(props.ingredients[igKey])].map((_, i) => {
				return <BurgerIngredient key={igKey + i} type={igKey} />;
			});
		})
		.reduce((arr, el) => {
			return arr.concat(el);
		}, []);

	// const transformedIngredients = Object.keys(props.ingredients).map(
	// 	(igKey) => {
	// 		return <BurgerIngredient type={igKey} />;
	// 	}
	// );

	console.log(transformedIngredients);

	return (
		<div className="Burger">
			<BurgerIngredient type="bread-top" />
			{transformedIngredients}
			<BurgerIngredient type="bread-bottom" />
		</div>
	);
};

export default Burger;
