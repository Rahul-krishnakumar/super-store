import React, { useState, useEffect } from "react";

import Navbar from "../Components/Navbar/Navbar";
import ProductGrid from "../Components/ProductGrid/ProductGrid";

const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://gp-super-store-api.herokuapp.com/item/list/?size=12`)
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
      <ProductGrid data={items} />
    </div>
  );
};

export default Home;
