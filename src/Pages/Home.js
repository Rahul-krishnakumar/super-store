import React from "react";
import useFetch from "../Hooks/useFetch";

import Navbar from "../Components/Navbar/Navbar";
import ProductGrid from "../Components/ProductGrid/ProductGrid";
import Spinner from "../Components/Spinner/Spinner";
import ErrorComponent from "../Components/ErrorComponent/ErrorComponent";

const Home = () => {
  const { items, loading, error } = useFetch(
    `https://gp-super-store-api.herokuapp.com/item/list/?size=15`
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
      {!loading ? (
        error ? (
          <ErrorComponent message={error.toString()} />
        ) : (
          <ProductGrid data={items} />
        )
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default Home;
