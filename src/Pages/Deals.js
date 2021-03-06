import React, { useState, useEffect } from "react";

import Navbar from "../Components/Navbar/Navbar";
import ProductGrid from "../Components/ProductGrid/ProductGrid";
import ErrorComponent from "../Components/ErrorComponent/ErrorComponent";
import Spinner from "../Components/Spinner/Spinner";

const Deals = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    fetch(`https://gp-super-store-api.herokuapp.com/item/list/?isOnSale=true`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data.items);
        setisLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <Navbar
        links={[
          { Home: "/", id: 1 },
          { Deals: "/deals", id: 2 },
          { Cart: "/cart", id: 3 },
        ]}
      />
      {!isLoading ? (
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
