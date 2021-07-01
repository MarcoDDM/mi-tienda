import {useState} from "react";
import "./style.css";

const ItemCount = ({initial,stock}) =>{

    const [valor,setValor]=useState(initial);

    function onAdd(){
        if (valor < stock){
            setValor(parseInt(valor)+1)
        }else{
            alert("No hay stock disponible")
        }

    }

    function onSubstract(){
        if (valor >= 1){
            setValor(parseInt(valor)-1)
        }

    }

    return(
        <div className="acumulador">
            <button className="acumulador__btn" onClick={onSubstract}>-</button>
            <input className="acumulador__input" type="text" value={valor} />
            <button className="acumulador__btn" onClick={onAdd}>+</button> 
        </div>
    )
}

ItemCount.defaultProps = {
    stock:5,
    initial:1
}

export default ItemCount;