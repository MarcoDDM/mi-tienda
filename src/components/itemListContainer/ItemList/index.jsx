import React from "react";
//Style
import "./style.css"; 
//Component
import Item from "./Item"

const ItemList=({products})=>{
    return(
        <div className="ItemList">
            {products.map(product =>{
                return <Item product={product}/>
            })}
        </div>
    )
}

export default ItemList;


