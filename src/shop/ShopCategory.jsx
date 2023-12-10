import React from "react";
import data from "../products.json"

const ShopCategory = ({ allCategories, selectedCategory,filterItem,setproducts,setSelectedCategory}) => {
const allButton = () =>{
    setproducts(data)
    setSelectedCategory("All")
}
  return (
    <div>
      <div className=" widget-header">
        <h5 className=" ms-2">All Categories </h5>
      </div>
      <div className="">
        <button className={`m-2 ${selectedCategory === "All" ? "bg-warning" : ""}`} onClick={allButton}>All</button>
        {allCategories.map((val, i) => {
          return (
            <button
              key={i}
              className={`m-2 ${
                selectedCategory === val ? "bg-warning" : ""
              }`}
              onClick={()=>filterItem(val)}
            >
              {val}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ShopCategory;
