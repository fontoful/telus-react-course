import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import "./Toolbar.css";

const Toolbar = (props) => {
	return (
		<header className="Toolbar">
			<h3 onClick={props.handler}>
				<i className="fas fa-bars fa-2x"></i>
			</h3>
			<div className="Logo2">
				<Logo />
			</div>
			<nav>
				<NavigationItems />
			</nav>
		</header>
	);
};

export default Toolbar;
