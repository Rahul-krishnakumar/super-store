import React from "react";
import useFetch from "../Hooks/useFetch";

import Navbar from "../Components/Navbar/Navbar";
import ProductGrid from "../Components/ProductGrid/ProductGrid";
import ErrorComponent from "../Components/ErrorComponent/ErrorComponent";
import Spinner from "../Components/Spinner/Spinner";

const Deals = () => {
  const { items, loading, error } = useFetch(
    `https://gp-super-store-api.herokuapp.com/item/list/?isOnSale=true`
  );

  return (
    <div className="grid grid-rows-layout">
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
          <ProductGrid data={items} />
        )
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default Deals;
