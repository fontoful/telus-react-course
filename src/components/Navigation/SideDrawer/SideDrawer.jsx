import React from "react";
import Logo from "../../Logo/Logo";
import Backdrop from "../../UI/Backdrop/Backdrop";
import NavigationItems from "../NavigationItems/NavigationItems";
import "./SideDrawer.css";

const SideDrawer = (props) => {
	return (
		<>
			<Backdrop show={props.open} clicked={props.closed} />
			<div className={`SideDrawer ${props.open ? "Open" : "Close"}`}>
				<div className="Logo-drawer">
					<Logo />
				</div>
				<nav>
					<NavigationItems />
				</nav>
			</div>
		</>
	);
};

export default SideDrawer;
