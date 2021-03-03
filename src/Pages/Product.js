import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import NavBar from "../Components/Navbar/Navbar";
import Rating from "../Components/Ratings/Ratings";

const Product = () => {
  const [productData, setProductData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://gp-super-store-api.herokuapp.com/item/${id}`)
      .then((res) => res.json())
      .then((data) => setProductData(data))
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  console.log(productData);
  return (
    <div>
      <NavBar
        links={[
          { Home: "/", id: 1 },
          { Deals: "/deals", id: 2 },
          { Cart: "/cart", id: 3 },
        ]}
      />
      <div className="max-w-5xl mx-auto mt-20 grid grid-cols-2 gap-6">
        <div className="max-w-md ml-4 flex justify-end">
          <img className="w-3/4 mr-2" src={productData.imageUrl} alt="" />
        </div>
        <div className="max-w-xs">
          <h1 className="text-lg font-semibold mt-10 mb-1">
            {productData.name}
          </h1>
          <Rating rating={productData.avgRating} />
          <hr className="border-gray-500 border-b-1 my-2" />
          <p className="text-sm text-gray-700">{productData.description}</p>
          <p className="my-2 font-semibold">&#36;{productData.price}</p>
          <div>
            <span className="mr-1 text-sm text-gray-800">Quantity:</span>{" "}
            <input
              type="text"
              className="border border-gray-700 rounded-sm outline-none p-1.5 text-gray-700 text-xs text-center w-12"
            />
          </div>
          <button className="mt-5 px-3 py-2 bg-yellow-400 rounded text-yellow-900 font-semibold">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
