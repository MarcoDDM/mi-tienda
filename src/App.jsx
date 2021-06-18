import logo from "./logo.svg"; //acá importo el logo. el ./ indica que está en esta misma carpeta
import "./App.css"; //importo el css general del proyecto
import {NavBar} from "./components/navBar";//Este es el navbar
import {Test01} from "./components/utils"; //esta es una carpeta donde pueden ir cosas sueltas (ver bien el uso)
import {Test02} from "./components/utils";
import {ProductCard} from "./components/cardComponent"; 

function App() {
	return (
		<div className='App'>
			<header>
			<NavBar />
			</header>
			<main>
			</main>
			{/* esta section es de prueba, borrar al final */}
			<section className="Products"> 
				<ProductCard />	
				<ProductCard />	
				<ProductCard />
				<ProductCard />	
				<ProductCard />	
				<ProductCard />				
			</section>
		</div>
	);
}
export default App;




