import React from "react";
import { useParams } from "react-router-dom";

const Product = (props) => {
  const { id } = useParams();
  return (
    <div>
      <h1>Item Page!</h1>
      <p>{id}</p>
    </div>
  );
};

export default Product;
