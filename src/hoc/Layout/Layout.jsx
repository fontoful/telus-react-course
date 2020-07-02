import React, { Component } from "react";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import "./Layout.css";

class Layout extends Component {
	state = {
		showSideDrawer: false,
	};

	sideDrawerToggleHandler = () => {
		console.log("Function called to set SideDrawer to false");
		this.setState((prevState) => {
			return { showSideDrawer: !prevState.showSideDrawer };
		});
	};

	render() {
		return (
			<>
				<Toolbar handler={this.sideDrawerToggleHandler} />
				<SideDrawer
					open={this.state.showSideDrawer}
					closed={this.sideDrawerToggleHandler}
				/>
				<main className="Content">{this.props.children}</main>
			</>
		);
	}
}

export default Layout;
