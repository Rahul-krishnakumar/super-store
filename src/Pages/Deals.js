import React, { useState } from "react";
import useFetch from "../Hooks/useFetch";

import Navbar from "../Components/Navbar/Navbar";
import ProductGrid from "../Components/ProductGrid/ProductGrid";
import ErrorComponent from "../Components/ErrorComponent/ErrorComponent";
import Spinner from "../Components/Spinner/Spinner";
import SearchBar from "../Components/SearchBar/SearchBar";

const Deals = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState("");

  const productsPerPage = 6;
  const lastProductIndex = currentPage * productsPerPage - 1;
  const firstProductIndex = lastProductIndex - productsPerPage + 1;

  const { items, totalItems, loading, error } = useFetch(
    `https://gp-super-store-api.herokuapp.com/item/list/?from=${firstProductIndex}&size=${productsPerPage}&q=${query}&isOnSale=true`
  );

  const totalPages = Math.ceil(totalItems / productsPerPage);

  const paginate = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="grid grid-rows-layout mt-10">
      <Navbar
        links={[
          { Home: "/", id: 1 },
          { Deals: "/deals", id: 2 },
          { Cart: "/cart", id: 3 },
        ]}
      />
      {error ? (
        <ErrorComponent message={error.toString()} />
      ) : !loading ? (
        items.length <= 0 ? (
          <ErrorComponent message="No items on sale right now!" />
        ) : (
          <>
            <SearchBar search={(term) => setQuery(term)} />
            <ProductGrid
              data={items}
              currentPage={currentPage}
              paginate={paginate}
              totalPages={totalPages}
            />
          </>
        )
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default Deals;
