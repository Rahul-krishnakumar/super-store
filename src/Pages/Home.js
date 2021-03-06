import React, { useState, useEffect } from "react";

import Navbar from "../Components/Navbar/Navbar";
import ProductGrid from "../Components/ProductGrid/ProductGrid";
import Spinner from "../Components/Spinner/Spinner";

const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://gp-super-store-api.herokuapp.com/item/list/?size=15`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data.items);
        setIsLoading(false);
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
      {!isLoading ? <ProductGrid data={items} /> : <Spinner />}
    </div>
  );
};

export default Home;
