import React from "react";

import Navbar from "../Components/Navbar/Navbar";

const Cart = () => {
  return (
    <div className="grid grid-rows-layout">
      <Navbar
        links={[
          { Home: "/", id: 1 },
          { Deals: "/deals", id: 2 },
          { Cart: "/cart", id: 3 },
        ]}
      />
      Cart page
    </div>
  );
};

export default Cart;
