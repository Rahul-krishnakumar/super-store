import React, { useState, useEffect } from "react";

import Navbar from "../Components/Navbar/Navbar";
import ProductGrid from "../Components/ProductGrid/ProductGrid";
import ErrorComponent from "../Components/ErrorComponent/ErrorComponent";

const Deals = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://gp-super-store-api.herokuapp.com/item/list/?isOnSale=true`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data.items);
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
      {items.length > 0 ? (
        <ProductGrid data={items} />
      ) : (
        <ErrorComponent message="No items on sale right now!" />
      )}
    </div>
  );
};

export default Deals;
