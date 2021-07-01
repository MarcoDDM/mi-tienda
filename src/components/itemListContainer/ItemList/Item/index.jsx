import React from "react";
//Estilo
import "./style.css"; 
//Componentes
import ItemCount from "./ItemCount";

const Item=({product}) =>{
	return (
		<div className="Item">
            <div>
                <img src={product.pictureURL} alt="" />
            </div>
            <div className="Item__info">
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <p>{product.price}</p>
                <ItemCount/> 
            </div>
		</div>
	);
};

Item.defaultProps = {
    titulo: "Producto 1",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in risus nec ligula ullamcorper faucibus sed in neque. Nulla eget pretium dui. Nam quis nibh tortor."
}

export default Item;