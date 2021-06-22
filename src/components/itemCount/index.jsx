import {useState} from "react";
import "./style.css";

export const ItemCount = (props) =>{

    const [valor,setValor]=useState(props.initial);

    function agregar(){
        if (valor < props.stock){
            setValor(parseInt(valor)+1)
        }

    }

    function restar(){
        if (valor > 0){
            setValor(parseInt(valor)-1)
        }

    }

    return(
        <div className="acumulador">
            <button className="acumulador__btn" onClick={restar}>-</button>
            <input className="acumulador__input" type="text" value={valor} />
            <button className="acumulador__btn" onClick={agregar}>+</button>
            
        </div>
    )
}