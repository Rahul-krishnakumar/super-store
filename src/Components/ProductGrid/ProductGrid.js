import React, { useState } from "react";

import ProductCard from "../ProductCard/ProductCard";
import SearchBar from "../SearchBar/SearchBar";
import ErrorMessage from "../ErrorComponent/ErrorComponent";

const ProductGrid = ({ data }) => {
  const [products, setProducts] = useState(data);

  return (
    <div className="xl:max-w-5xl md:max-w-2xl max-w-xs mx-auto my-10">
      <SearchBar search={(text) => setProducts(text)} items={data} />
      {products.length > 0 ? (
        <div className="grid xl:grid-cols-3 gap-14 justify-items-center md:grid-cols-2 grid-cols-1">
          {products.map((item) => {
            return <ProductCard key={item["_id"]} itemData={item} />;
          })}
        </div>
      ) : (
        <ErrorMessage message="No such item exists!" />
      )}
    </div>
  );
};

export default ProductGrid;
