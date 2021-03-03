import React from "react";

import ProductCard from "../ProductCard/ProductCard";
import SearchBar from "../SearchBar/SearchBar";

const ProductGrid = ({ data }) => {
  return (
    <div className="max-w-5xl mx-auto my-10">
      <SearchBar />
      <div className="grid grid-cols-3 gap-14 justify-items-center">
        {data.map((item) => {
          return <ProductCard key={item["_id"]} itemData={item} />;
        })}
      </div>
    </div>
  );
};

export default ProductGrid;
