import React from "react";

import Navbar from "../Components/Navbar/Navbar";

const Cart = () => {
  return (
    <div>
      <Navbar links={[{ Home: "/" }, { Deals: "/deals" }, { Cart: "/cart" }]} />
      Cart Page
    </div>
  );
};

export default Cart;
