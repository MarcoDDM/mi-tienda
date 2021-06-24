import React, {useEffect,useState} from "react";
import "./style.css";
import {ItemList} from "../itemList/index";

export const ItemListContainer=({greetings})=>{

    const[products,setProducts]=useState([])

    useEffect(async () =>{
        const response = await fetch("./json/productos.json")
        const json = await response.json()
        console.log(json)
    })

    return(
        <div>
        <h1>{greetings}</h1>
        <ItemList products={products}/>
        </div>
    )
}