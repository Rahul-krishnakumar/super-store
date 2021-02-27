import React, { useState, useEffect } from "react";

import Navbar from "../Components/Navbar/Navbar";
import ItemCard from "../Components/ItemCard/ItemCard";

const Home = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(`https://gp-super-store-api.herokuapp.com/item/list/?size=6`, {
      size: 6,
    })
      .then((res) => res.json())
      .then((data) => {
        setItems(data.items);
        console.log(data);
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
      <div className="w-4/5 mx-auto my-10">
        <div>Search bar</div>
        <div className="grid grid-cols-3 gap-3 justify-items-center">
          {items.map((item) => {
            return <ItemCard key={item._id} image={item.imageUrl} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
