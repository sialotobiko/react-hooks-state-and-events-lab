import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false)

  function addToCart(){
    setInCart(!inCart)
  }

  const checkIfInCart = inCart ? "in-cart" : ""

  const addInCart = inCart ? "Remove from Cart" : "Add to Cart"

  return (
    <li className={checkIfInCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={checkIfInCart} onClick={addToCart}>{addInCart}</button>
    </li>
  );
}

export default Item;
