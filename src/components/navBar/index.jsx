import React from "react";
import "./style.css";
import logo from "./logo.svg"
import CartWidget from "./CartWidget";

const NavBar = () => {
	return (
		<>
			<div className="NavBar__logoWidget">
				<div className='NavBar__logoWidget--logo'>
					<img src={logo} alt='logo' />
					<p>pokeshop</p>
				</div>

				<div className='NavBar__logoWidget--cartwidget'>
					<CartWidget />
					<p>0</p>
				</div>
			</div>

			<ul className='NavBar__categorias'>
				<li>tierra</li>
				<li>agua</li>
				<li>fuego</li>
				<li>aire</li>
			</ul>
		</>
	);
};

export default NavBar;