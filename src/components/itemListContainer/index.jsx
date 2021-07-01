import React,{useEffect, useState} from "react";
//Style
import "./style.css";
//Component
import ItemList from "./ItemList";

const ItemListContainer=({greetings})=>{

    const [products,setProducts] = useState([])

    useEffect(async()=>{
        const response = await fetch ("./json/productos.json")
        const json = await response.json()
        setProducts(json)
    },[])

    return(
        <div>
            <h1>{greetings}</h1>
            <div>
                <ItemList products={products}/>
            </div>        
        </div>
    )
}

ItemListContainer.defaultProps = {
    greetings: "Armá tu mejor equipo",

}

export default ItemListContainer;