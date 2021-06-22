import React from "react";
import "./style.css";
import {ItemCount} from "../itemCount/index";

export const ProductCard = ({id, title, image, price, rating}) => {
	return (
		<div className='product'>
			<div className='product__info'>
				<p>{title}</p>
				<p className='product__price'>
					<small>$</small>
					<strong>{price}</strong>
				</p>
			</div>

			<img src={image} alt='imagen del producto' />

			<ItemCount stock='10' initial='1' />

			<button>Add to Basket</button>
		</div>
	);
};
