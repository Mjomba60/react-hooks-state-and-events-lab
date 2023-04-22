import React from "react";
import Item from "./Item";
import { useState } from "react";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All")

  function handleOnChange(event){
    const value = event.target.value
    setSelectedCategory(value)
  }

  const selectedItems = items.filter(item => item.category === selectedCategory)
  const listItems = selectedItems.length === 0 ? items : selectedItems

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter"
          onChange={handleOnChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {listItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
