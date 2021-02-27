import React from "react";

import Navbar from "../Components/Navbar/Navbar";

const Deals = () => {
  return (
    <div>
      <Navbar links={[{ Home: "/" }, { Deals: "/deals" }, { Cart: "/cart" }]} />
      Deals Page
    </div>
  );
};

export default Deals;
