import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import "./Toolbar.css";

const Toolbar = (props) => {
	return (
		<header className="Toolbar">
			<div>MENU</div>
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
