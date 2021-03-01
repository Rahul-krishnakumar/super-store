import React from "react";

import ProductCard from "../ProductCard/ProductCard";

const ProductGrid = ({ data }) => {
  return (
    <div className="w-100 mx-auto my-10">
      <div>Search bar</div>
      <div className="grid grid-cols-3 gap-14 justify-items-center">
        {data.map((item) => {
          return <ProductCard key={item["_id"]} itemData={item} />;
        })}
      </div>
    </div>
  );
};

export default ProductGrid;
