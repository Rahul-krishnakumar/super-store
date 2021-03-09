import React, { useState } from "react";
import useFetch from "../Hooks/useFetch";

import Navbar from "../Components/Navbar/Navbar";
import ProductGrid from "../Components/ProductGrid/ProductGrid";
import Spinner from "../Components/Spinner/Spinner";
import ErrorComponent from "../Components/ErrorComponent/ErrorComponent";
// import Paginator from "../Components/Paginator/Paginator";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 6;
  const lastProductIndex = currentPage * productsPerPage - 1;
  const firstProductIndex = lastProductIndex - productsPerPage + 1;

  const { items, totalItems, loading, error } = useFetch(
    `https://gp-super-store-api.herokuapp.com/item/list?from=${firstProductIndex}&size=${productsPerPage}`
  );

  const totalPages = Math.ceil(totalItems / productsPerPage);

  const paginate = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="grid grid-rows-layout">
      <Navbar
        links={[
          { Home: "/", id: 1 },
          { Deals: "/deals", id: 2 },
          { Cart: "/cart", id: 3 },
        ]}
      />
      {!loading ? (
        error ? (
          <ErrorComponent message={error.toString()} />
        ) : (
          <ProductGrid
            data={items}
            currentPage={currentPage}
            paginate={paginate}
            totalPages={totalPages}
          />
        )
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default Home;
