import React from "react";

import Navbar from "../Components/Navbar/Navbar";

const Cart = () => {
  return (
    <div>
      <Navbar
        links={[
          { Home: "/", id: 1 },
          { Deals: "/deals", id: 2 },
          { Cart: "/cart", id: 3 },
        ]}
      />
      Cart Page
    </div>
  );
};

export default Cart;
