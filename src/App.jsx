import React from "react";
//Estilo general
import "./App.css"; 
//Componentes
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
	return (
		<>
			<nav>
				<NavBar/>
			</nav>
			<section>
				<ItemListContainer/>
			</section>
			<footer>

			</footer>

		</>
	);
};

export default App;




