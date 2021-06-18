import React from "react";
import "./style.css";

export const ProductCard = ({id, title, image, price, rating}) => {
	return (
		<div className='product'>
			<div className='product__info'>
				<p>{title}</p>
				<p className='product__price'>
					<small>$</small>
					<strong>{price}</strong>
				</p>
				{/* <div className="product__rating">
                {Array(rating)
                    .fill()
                    .map((_, i) => (
                    <p>🌟</p>
                    ))}
                </div> */}
			</div>

			<img src={image} alt='imagen del producto' />

			<button>Add to Basket</button>
		</div>
	);
};
