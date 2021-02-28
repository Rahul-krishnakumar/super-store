import React, { useState, useEffect } from "react";

import ProductCard from "../ProductCard/ProductCard";

const ProductGrid = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(`https://gp-super-store-api.herokuapp.com/item/list/?size=12`, {
      size: 6,
    })
      .then((res) => res.json())
      .then((data) => {
        setItems(data.items);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="w-100 mx-auto my-10">
      <div>Search bar</div>
      <div className="grid grid-cols-3 gap-14 justify-items-center">
        {items.map((item) => {
          return <ProductCard key={item._id} itemData={item} />;
        })}
      </div>
    </div>
  );
};

export default ProductGrid;
