import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
	salad: 0.5,
	cheese: 0.4,
	meat: 1.3,
	bacon: 1.7,
};

class BurgerBuilder extends Component {
	state = {
		ingredients: {
			salad: 0,
			bacon: 0,
			cheese: 0,
			meat: 0,
		},
		purchasable: null,
		totalPrice: 4,
		modal: false,
	};

	updatePurchaseState = (ingredients) => {
		const sum = Object.keys(ingredients)
			.map((igKey) => {
				return ingredients[igKey];
			})
			.reduce((acc, val) => acc + val);

		this.setState({ purchasable: sum > 0 });
	};

	addIngredienteHandler = (type) => {
		// First off, access the key value that you wish to change (using the type)
		const oldCount = this.state.ingredients[type];
		// Store in a variable to use to to sum it or deduct it
		const updatedCount = oldCount + 1;
		// Once the math operation is performed, spread the state to a variable so it can laber be accessed by using the type that we're getting from the parameter ⬇
		const updatedIngredients = {
			...this.state.ingredients,
		};
		// We're simply updating the object accessing its key and updating its value with the previous Math calculation
		updatedIngredients[type] = updatedCount;

		const priceAddition = INGREDIENT_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice + priceAddition;

		// Set the state now
		this.setState({
			totalPrice: newPrice,
			ingredients: updatedIngredients,
		});
		this.updatePurchaseState(updatedIngredients);
	};

	removeIngredient = (type) => {
		const oldCount = this.state.ingredients[type];
		if (oldCount <= 0) {
			return;
		}
		const updatedCount = oldCount - 1;
		const updatedIngredients = {
			...this.state.ingredients,
		};
		updatedIngredients[type] = updatedCount;

		const priceDeduction = INGREDIENT_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice - priceDeduction;

		// Set the state now
		this.setState({
			totalPrice: newPrice,
			ingredients: updatedIngredients,
		});
		this.updatePurchaseState(updatedIngredients);
	};

	modalState = () => {
		this.setState({ modal: !this.state.modal });
	};

	purchaseCancelHandler = () => {
		this.setState({ modal: false });
	};

	purchaseContinueHandler = () => {
		alert("You continue!");
	};

	render() {
		const disabledInfo = {
			...this.state.ingredients,
		};
		for (let key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <= 0;
		}

		return (
			<>
				<Modal
					modalClosed={this.purchaseCancelHandler}
					show={this.state.modal}
				>
					<OrderSummary
						ingredients={this.state.ingredients}
						purchaseCanceled={this.purchaseCancelHandler}
						purchaseContinued={this.purchaseContinueHandler}
						price={this.state.totalPrice}
					/>
				</Modal>
				<Burger ingredients={this.state.ingredients} />
				<BuildControls
					ingredientAdded={this.addIngredienteHandler}
					ingredientRemoved={this.removeIngredient}
					disabled={disabledInfo}
					price={this.state.totalPrice}
					purchasable={this.state.purchasable}
					modal={this.modalState}
				/>
			</>
		);
	}
}

export default BurgerBuilder;
