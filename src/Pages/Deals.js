import React from "react";

import Navbar from "../Components/Navbar/Navbar";

const Deals = () => {
  return (
    <div>
      <Navbar
        links={[
          { Home: "/", id: 1 },
          { Deals: "/deals", id: 2 },
          { Cart: "/cart", id: 3 },
        ]}
      />
      Deals Page
    </div>
  );
};

export default Deals;
