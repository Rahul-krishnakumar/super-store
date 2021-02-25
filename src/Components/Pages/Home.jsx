import React from "react";

import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar links={[{ Home: "/" }, { Deals: "/deals" }, { Cart: "/cart" }]} />
      Home Page
    </div>
  );
};

export default Home;
