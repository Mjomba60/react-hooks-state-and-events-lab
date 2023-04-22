import { useState } from "react";
import React from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false)
  const cart = inCart ? "in-cart" : ""

  function handleClick(){
    setInCart(!inCart)
  }

  return (
    <li className={cart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add"
        onClick={handleClick}>{inCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
