import React, { useState, useEffect } from "react";

import ProductCard from "../ProductCard/ProductCard";
import ErrorMessage from "../ErrorComponent/ErrorComponent";
import Paginator from "../Paginator/Paginator";

const ProductGrid = ({ data, currentPage, paginate, totalPages }) => {
  const [products, setProducts] = useState(data);

  useEffect(() => {
    setProducts(data);
  }, [data]);

  return (
    <div className="xl:min-w-5xl md:min-w-2xl w-80 mx-auto mt-10 mb-5">
      {products.length > 0 ? (
        <>
          <div className="grid xl:grid-cols-3 gap-14 justify-items-center md:grid-cols-2 grid-cols-1">
            {products.map((item) => {
              return <ProductCard key={item["_id"]} itemData={item} />;
            })}
          </div>
          <Paginator
            currentPage={currentPage}
            paginate={paginate}
            totalPages={totalPages}
          />
        </>
      ) : (
        <ErrorMessage message="No such item exists!" />
      )}
    </div>
  );
};

export default ProductGrid;
