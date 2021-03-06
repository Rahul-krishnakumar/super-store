import React from "react";

import ProductCard from "../ProductCard/ProductCard";
import SearchBar from "../SearchBar/SearchBar";

const ProductGrid = ({ data }) => {
  return (
    <div className="xl:max-w-5xl md:max-w-2xl max-w-xs mx-auto my-10">
      <SearchBar />
      <div className="grid xl:grid-cols-3 gap-14 justify-items-center md:grid-cols-2 grid-cols-1">
        {data.map((item) => {
          return <ProductCard key={item["_id"]} itemData={item} />;
        })}
      </div>
    </div>
  );
};

export default ProductGrid;
